var $form = $('.news-form');
var $name = $('.news-form-name');
var $comment = $('.news-form-comment');
var $list = $('.news-form-comments-list');

$form.on('submit', function (e) {
    e.preventDefault();
    
    var $li = $('<li>');
    var $nameP = $('<p>').html($name.val());
    var $commentP = $('<p>').html($comment.val());
    
    $li.append($nameP, $commentP);
    $list.append($li);
    
    $li.addClass('news-form-list-item');
    $nameP.addClass('news-form-list-name');
    $commentP.addClass('news-form-list-comment');
    
    $form[0].reset();
    
});