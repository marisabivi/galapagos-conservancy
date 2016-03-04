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

$('.more').click(function() {
    $(this).prev('div').slideToggle();
    $(this).html('less');
});