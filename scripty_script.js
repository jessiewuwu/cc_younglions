$(document).ready(function() {
    $('.dropdown-button').dropdown();
    $('.button-collapse').sideNav();
    $('.hamburger-icon').click(() => {
        $('#mobile-dropdown').toggle();
    });

    //for forms
    $('select').material_select();

    // for scrollable lightbox gallery
    $('.photo-lightbox').vanillabox();

});