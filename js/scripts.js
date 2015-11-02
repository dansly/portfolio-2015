jQuery(document).ready(function($) {
    $('.hider').click(function() {
        $('.subtext').toggleClass("show");
    });
    $('.about').click(function() {
        $('.about-panel').toggleClass("show-about");
        $('.page-fade').toggleClass("faded");
    });
    $('.about-close').click(function() {
        $('.about-panel').toggleClass("show-about");
        $('.page-fade').toggleClass("faded");
    });
});


$(document).keypress(function(e) {
    if (e.keyCode == 27) {
     $('.about-panel').toggleClass("show-about");
        $('.page-fade').toggleClass("faded");

    }
});


$( document ).ready(function() {
    $('.main-gallery').flickity({
  // options
  cellAlign: 'left',
  contain: 'true',
  watchCSS: 'fallbackOn',
  percentPosition: 'false',
  wrapAround: 'true',
  arrowShape: {
  x0: 0,
  x1: 50, y1: 50,
  x2: 55, y2: 50,
  x3: 5
}
});
});



$(document).ready(function () {
  $('.accordion-tabs-minimal').each(function(index) {
    $(this).children('li').first().children('a').addClass('is-active').next().addClass('is-open');
  });
  $('.accordion-tabs-minimal').on('click', 'li > a.tab-link', function(event) {
    if (!$(this).hasClass('is-active')) {
      event.preventDefault();
      var accordionTabs = $(this).closest('.accordion-tabs-minimal');
      accordionTabs.find('.is-open').removeClass('is-open');

      $(this).next().toggleClass('is-open');
      accordionTabs.find('.is-active').removeClass('is-active');
      $(this).addClass('is-active');
    } else {
      event.preventDefault();
    }
  });
});


var container = $('div').offset().top;
    $(document).on("scroll", function(){
    if
      ($(document).scrollTop() > container){
      $(".class").addClass("shrink");
    }
    else
    {
      $(".class").removeClass("shrink");
    }
  });
