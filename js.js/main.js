var elSiteheaderToggleBtn = document.querySelector(".site-header__menu-btn");
var elHeader = document.querySelector(".site-header");
var elsiteNav = document.querySelector(".sitenav");

elSiteheaderToggleBtn.addEventListener("click", function () {
  elHeader.classList.toggle("site-header__open");
  elsiteNav.classList.toggle("site-hader__open");
});
