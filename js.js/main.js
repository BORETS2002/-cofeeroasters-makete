var elSiteheaderToggleBtn = document.querySelector(".site-header__menu-btn");
var elHeader = document.querySelector(".site-header");
var elsiteNav = document.querySelector(".sitenav");

elSiteheaderToggleBtn.addEventListener("click", function () {
  elHeader.classList.toggle("site-header__open");
  elsiteNav.classList.toggle("site-hader__open");
});

var elModalOpenButton = document.querySelector(".js-modal-open-button");
var elModal = document.querySelector(".modal");

elModalOpenButton.addEventListener("click", function () {
  elModal.classList.add("modal-show");
});

var elModalCloseButton = document.querySelector(".js-close-modal");

elModalCloseButton.addEventListener("click", function () {
  elModal.classList.remove("modal-show");
});
