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

  $('.layout-claims-new').on("change", 'select[name="information.reason"]', function(){
    if ($(this).val() == "Manage a recently diagnosed medical condition.") {
      $('.dependent').hide();
    } else {
      $('.dependent').show();
    }
  });

});