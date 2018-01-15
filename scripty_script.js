$(document).ready(function() {
  $('.dropdown-button').dropdown();
  $('.button-collapse').sideNav();
  $('.hamburger-icon').click(() => {
    $('#mobile-dropdown').toggle();
  });
  $('.photo-lightbox').vanillabox();
});