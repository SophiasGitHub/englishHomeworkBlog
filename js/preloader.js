jQuery(window).load(function () {
  "use strict";
  jQuery("#status").fadeOut(450); // will first fade out the loading animation
  jQuery("#preloader").delay(600).fadeOut(200); // will fade out the white DIV that covers the website.
});
