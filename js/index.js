var $btnCollapse = $('.collapse');
var $panel = $('.panel');

$btnCollapse.on('click', function () {
	$panel.toggleClass('js-panel');
});
