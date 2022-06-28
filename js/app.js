// download generated image as image
download.onclick = function() {
  // hide stuff
  menu.style.display = "none";
  donate.style.display = "none";
  footer.style.display = "none";

  // us letter portrait
  // questions.style.width = "612px";
  // questions.style.height = "792px";
  
  // set canvas width to a fixed size
  questions.style.width = "800px";
  // questions.style.width = "1000px";
  // questions.style.height = "1500px";
  questions.style.height = "2000px";

  var fileName = "agreement";
  
  // convert website to image
  html2canvas(questions, {
    allowTaint: true,
    useCORS: true,
    foreignObjectRendering: true
  }).then(function(canvas) {
    // download canvas image
    myBase64 = canvas.toDataURL("image/png");
    var iOS = !!navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform);
    if (iOS === true) {
      // remove image if already visible
      var img = new Image();
      img.crossOrigin = "Anonymous";
      img.id = "getshot";
      img.src = myBase64;
      document.body.appendChild(img);

      var a = document.createElement("a");
      a.href = getshot.src;
      a.download = fileName + ".png";
      a.click();
      document.body.removeChild(img);
    } else {
      canvas.toBlob(function(blob) {
        saveAs(blob, fileName + ".png");
      }, "image/png");
    }
  });

  // revert canvas width to 100%
  questions.style.width = "";
  questions.style.height = "";
  
  // show stuff
  menu.style.display = "block";
  donate.style.display = "block";
  footer.style.display = "block";
};