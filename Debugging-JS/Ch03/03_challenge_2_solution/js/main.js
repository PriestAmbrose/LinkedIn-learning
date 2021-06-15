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
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
});
