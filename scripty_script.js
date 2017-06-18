$(document).ready(function() {
  $('.dropdown-button').dropdown();
  $('.button-collapse').sideNav();
  $('.hamburger-icon').click(() => {
    $('#mobile-dropdown').toggle();
  });

  // vanillabox gallery plugin
  $('selector-for-image-elements').vanillabox();
  $('.image-list a').vanillabox();
});