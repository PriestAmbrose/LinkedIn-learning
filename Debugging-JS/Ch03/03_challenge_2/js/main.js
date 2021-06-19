jQuery(function ($) {
  "use strict";

  $("article h1").lettering("words");

  var words = document.querySelectorAll("article h1 span");
  for (var w = 0; w < words.length; w++) {
    words[w].addEventListener("mouseenter", function colorize(evt) {
      // set the word to a random color
      var newColor = getRandomColor();

      evt.currentTarget.style.color = newColor;
    });
  }

  /**
   * Return a hex code for a random color
   */
  function getRandomColor() {
   
    let r= Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return `rgb(${r},${g},${b})`
  }
});
