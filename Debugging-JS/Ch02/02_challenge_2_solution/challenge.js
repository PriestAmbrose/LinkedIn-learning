jQuery(function () {
  "use strict";
  // Don't do anything here if cookie is set
  if (window.sessionStorage.getItem("modalViewed") === "true") return;

  var modalContainer = document.querySelector(".modal--container");

  // Display the timeout after a couple seconds
  setTimeout(function () {
    modalContainer.classList.add("open");

    // note that the user has seen this modal before
    window.sessionStorage.setItem("modalViewed", "true");

    setTimeout(function () {
      modalContainer.classList.add("visible");
    }, 100);
  }, 2000);

  // Close the modal via the Escape key
  document.addEventListener("keyup", function (evt) {
    if (evt.which !== 27 || !modalContainer.classList.contains("visible"))
      return;

    hideModal();
  });

  // Close the modal when clicking Close
  modalContainer
    .querySelector(".modal--close")
    .addEventListener("click", function (evt) {
      evt.preventDefault();

      hideModal();
    });

  function hideModal() {
    modalContainer.classList.remove("visible");

    // when browser compatibility is better, could use `transitionend` event here
    // for now, fire this with a timeout
    setTimeout(function () {
      modalContainer.classList.remove("open");
    }, 2100);
  }
});
