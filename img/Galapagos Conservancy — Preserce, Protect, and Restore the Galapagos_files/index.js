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
var $genovesa = $('.genovesa');
var $isabela = $('.isabela');
var $marchena = $('.marchena');
var $pinta = $('.pinta');
var $sancristobel = $('.sancristobal');
var $santacruz = $('.santacruz');
var $santiago = $('.santiago');

$btnShowHide.on('click', function () {
    $espanola.toggleClass('js-showhide');
});

$btnShowHide.on('click', function () {
    $fernandina.toggleClass('js-showhide');
});

$btnShowHide.on('click', function () {
    $genovesa.toggleClass('js-showhide');
});

$btnShowHide.on('click', function () {
    $isabela.toggleClass('js-showhide');
});

$btnShowHide.on('click', function () {
    $marchena.toggleClass('js-showhide');
});

$btnShowHide.on('click', function () {
    $pinta.toggleClass('js-showhide');
});

$btnShowHide.on('click', function () {
    $sancristobal.toggleClass('js-showhide');
});

$btnShowHide.on('click', function () {
    $santacruz.toggleClass('js-showhide');
});

$btnShowHide.on('click', function () {
    $santiago.toggleClass('js-showhide');
});
