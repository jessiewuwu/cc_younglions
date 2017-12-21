$(document).ready(function() {
  $('.dropdown-button').dropdown();
  $('.button-collapse').sideNav();
  $('.hamburger-icon').click(() => {
    $('#mobile-dropdown').toggle();
  });

  // vanillabox gallery plugin
  $('.gallery figure img').vanillabox();
  // $('.image-list a').vanillabox();
});