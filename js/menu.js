$(document).ready(function(){
  var navOffset = jQuery("nav").offset().top;
  jQuery(window).scroll(function(){
    var scrollPos = jQuery(window).scrollTop();

    if (scroll >= navOffset) {
        jQuery("nav").addClass("fixed");
        alert("helo");
    }
    else {
        jQuery("nav").removeClass("fixed");
    }
  });
});
