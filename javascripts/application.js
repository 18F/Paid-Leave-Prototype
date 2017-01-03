function initBody() {
  $('body').removeClass('no-js');
}

$(document).ready(function() {
  initBody();
  
  $('input').focus(function(){
    $(this).parents('.field').addClass('is-focused')
  });

  $('input').blur(function(){
    $(this).parents('.field').removeClass('is-focused')
  });

});