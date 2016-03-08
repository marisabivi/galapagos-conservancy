$(function(){
  $('body').removeClass('noscript');
  $('.icon-hamberger, .icon-close').click(function(){
      toggleNav();
  });
});

function toggleNav() {
  if ($('.site-wrapper').attr('data-state') == 'slide-closed') {
    $('.site-wrapper').attr('data-state', 'slide-open');
  } else {
   $('.site-wrapper').attr('data-state', 'slide-closed');
  }
}

var $btnShowHide = $('.showhide');
var $espanola = $('.espanola');
var $fernandina = $('.fernandina');

$btnShowHide.on('click', function () {
    $espanola.toggleClass('js-showhide');
});

$btnShowHide.on('click', function () {
    $fernandina.toggleClass('js-showhide');
});
