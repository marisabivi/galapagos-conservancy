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

$btnShowHide.on('click', function () {
    var theClass = $(this).siblings('div').attr('id');
    
    if ($(this).siblings('div').hasClass('js-showhide')) {
        $('.js-showhide').removeClass('js-showhide');
    } else {
        $('.js-showhide').removeClass('js-showhide');
        $('.' + theClass).addClass('js-showhide');
    }
});
