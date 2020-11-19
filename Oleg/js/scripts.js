$(document).ready(function() {
  let container = document.getElementById('modal_container');
  let body = document.getElementById('body');
  let viewBtn = $('.gallery_view');

  $('.gallery_item ').click(function() {
    let imgAddr = $(this).attr("src");
    $('#gallery_item_view').attr({src: imgAddr});
    container.style = 'display: flex';
    body.style = 'overflow-y: hidden';
  });

  $('#modal_container').click(function() {
      container.style = 'display: none';
      body.style = 'overflow-y: auto';
    });

  $(".follow").click(function() {
      $(this).text(function(span, text) {
        return text == "Follow" ? "Followed" : "Follow";
      });
  });

  viewBtn.click(function() {
    $('.gallery_view').removeClass('active_view');
    $(this).toggleClass('active_view');

  });

  
  let msgCounter = +$('.msg_counter').attr('data-counter');

  if ($('.msg_counter').attr('data-counter') == '0') {
    $('.msg_counter::after').css('display', 'none');
  } else {
    $('.msg_counter::after').css('display', 'block');
  }

  setInterval(() => {
    msgCounter +=1;
    $('.msg_counter').attr('data-counter', msgCounter);

    if (msgCounter == 99) {
      msgCounter = 0;
    }
  }, 8000);

  $('.msg_counter').click(function(){
    $('.msg_counter').attr('data-counter', '0');
    msgCounter = 0;
  });

});
