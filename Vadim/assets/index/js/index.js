$(document).ready(function () {
/*============== Button_profile-menu ==================*/

$('.button_profile-menu').hide();
  $('#header_button-profile').on('click', function(){
       $('.button_profile-menu').slideToggle();
   }) 


/*============== Mobile_menu-aside ====================*/ 

  $('.mobile_menu-aside').hide();
  $('.header_aside-btn_arrow').on('click', function(){
       $('.mobile_menu-aside').slideToggle();
   })  
  

   $('#btn_line-aside').on('click', function(){
    $('.mobile_menu-aside').slideToggle();
  }) 
  

  $('.header_aside-btn_arrow').on('click', function(){
    $('.mobile_menu-burg, .mobile_menu-plus').hide();
  })


  /*Darkening the background_menu-burg*/
  $('.header_aside-btn_arrow').click(function(){
    $('.mobile_menu-aside').toggleClass('mobile_menu-shadow');
  });


  $('#btn_line-aside').click(function(){
    $('.mobile_menu-aside').toggleClass('mobile_menu-shadow');
  });



/*============== Mobile_menu-plus ====================*/

    $('.mobile_menu-plus').hide();
    $('.header-btn_plus').on('click', function(){
         $('.mobile_menu-plus').slideToggle();
     })  
    

     $('#btn_line-plus').on('click', function(){
        $('.mobile_menu-plus').slideToggle();
    }) 


     $('.header-btn_plus').on('click', function(){
        $('.mobile_menu-burg, .mobile_menu-aside').hide();
    })
   

  /*Darkening the background_menu-plus*/

    $('.header-btn_plus').click(function(){
        $('.mobile_menu-plus').toggleClass('mobile_menu-shadow');
      });
      

      $('#btn_line-plus').click(function(){
        $('.mobile_menu-plus').toggleClass('mobile_menu-shadow');
      });
    


/*============== Mobile_menu-burg ====================*/ 

    $('.mobile_menu-burg').hide();
    $('.header-burg').on('click', function(){
         $('.mobile_menu-burg').slideToggle();
     })  


    $('#btn_line-burg').on('click', function(){
        $('.mobile_menu-burg').slideToggle();
    }) 


    $('.header-burg').on('click', function(){
        $('.mobile_menu-plus, .mobile_menu-aside').hide();
    })
   
    
  /*Darkening the background_menu-burg*/

   $('.header-burg').click(function(){
      $('.mobile_menu-burg').toggleClass('mobile_menu-shadow');
    })

    $('#btn_line-burg').click(function(){
      $('.mobile_menu-burg').toggleClass('mobile_menu-shadow');
    });
   


/*============== Slider ====================*/

  $('.main_aside-storys').slick({
      arrows: false,
      variableWidth: true
    });

  
    
/*============== PopUp ====================*/
  /*Row 1*/
    $('#popup_1').hide();
    $('#photo_1').on('click', function(){
         $('#popup_1').show();
     }) 

    $('#popup_2').hide();
    $('#photo_2').on('click', function(){
         $('#popup_2').show();
     }) 

    $('#popup_3').hide();
    $('#photo_3').on('click', function(){
         $('#popup_3').show();
     }) 


      $('#photo_1, #photo_2, #photo_3').on('click', function(){
        $('.button_profile-menu').hide();
      })

  /*Row 2*/ 
    $('#popup_4').hide();
    $('#photo_4').on('click', function(){
         $('#popup_4').show();
     }) 


    $('#popup_5').hide();
    $('#photo_5').on('click', function(){
         $('#popup_5').show();
     }) 

    $('#popup_6').hide();
    $('#photo_6').on('click', function(){
         $('#popup_6').show();
     }) 


      $('#photo_4, #photo_5, #photo_6').on('click', function(){
        $('.button_profile-menu').hide();
      })



    /*Убираем скролл всего сайта при клике на pop up*/
    $('#photo_1, #photo_2, #photo_3, #photo_4, #photo_5, #photo_6').on('click', function(){

      $('html, body').css({
        overflow: 'hidden',
        height: 'auto'
      });
     }) 

     /*Добавляем скролл всего сайта при клике вне области контента*/
    $(document).mouseup(function (e) {
      
      var container = $(".popup");
      if (container.has(e.target).length === 0){
          container.hide();
      }
        $('html, body').css({
          overflow: 'auto'
        });
    });

}); // Конец ready

