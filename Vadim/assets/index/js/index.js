$(document).ready(function () {
  /*============== Button_profile-menu ==================*/

  $("#header_button-profile").on("click", function () {
    $(".button_profile-menu").slideToggle().css({
      display: "block",
    });
  });

  /*Закрываем по клику вне элемента */
  $(document).mouseup(function (e) {
    const container = $(".button_profile-menu");
    const container2 = $("#header_button-profile");
    if (
      container.has(e.target).length === 0 &&
      container2.has(e.target).length === 0
    ) {
      container.hide();
    }
  });

  /*============== Mobile_menu-aside ====================*/

  $(".header_aside-btn_arrow").on("click", function () {
    $(".mobile_menu-aside").slideToggle().css({
      display: "block",
    });
  });

  $("#btn_line-aside").on("click", function () {
    $(".mobile_menu-aside").slideToggle();
  });

  /*Закрываем по клику вне элемента */
  $(document).mouseup(function (e) {
    const container = $(".mobile_menu-aside");
    const container2 = $("#btn_line-aside, .header_aside-btn_arrow");
    if (
      container.has(e.target).length === 0 &&
      container2.has(e.target).length === 0
    ) {
      container.hide();
    }
  });

  $(".header_aside-btn_arrow").on("click", function () {
    $(".mobile_menu-burg, .mobile_menu-plus").hide();
  });

  /*============== Mobile_menu-plus ====================*/

  $(".header-btn_plus").on("click", function () {
    $(".mobile_menu-plus").slideToggle().css({
      display: "block",
    });
  });

  $("#btn_line-plus").on("click", function () {
    $(".mobile_menu-plus").slideToggle();
  });

   /*Закрываем по клику вне элемента */
  $(document).mouseup(function (e) {
    const container = $(".mobile_menu-plus");
    const container2 = $(".header-btn_plus, #btn_line-plus");
    if (
      container.has(e.target).length === 0 &&
      container2.has(e.target).length === 0
    ) {
      container.hide();
    }
  });


  $(".header-btn_plus").on("click", function () {
    $(".mobile_menu-burg, .mobile_menu-aside").hide();
  });


  /*============== Mobile_menu-burg ====================*/

  $(".header-burg").on("click", function () {
    $(".mobile_menu-burg").slideToggle().css({
      display: "block",
    });
  });

  $("#btn_line-burg").on("click", function () {
    $(".mobile_menu-burg").slideToggle();
  });

  /*Закрываем по клику вне элемента */
  $(document).mouseup(function (e) {
    const container = $(".mobile_menu-burg");
    const container2 = $(".header-burg, #btn_line-burg");
    if (
      container.has(e.target).length === 0 &&
      container2.has(e.target).length === 0
    ) {
      container.hide();
    }
  });

  $(".header-burg").on("click", function () {
    $(".mobile_menu-plus, .mobile_menu-aside").hide();
  });

  /*============== Slider ====================*/

  $(".main_aside-storys").slick({
    arrows: false,
    variableWidth: true,
  });

  
  /*============== Modals ====================*/

  $('.content_bar_wrapper-img').on('click', function(){
    $('.modal-content').show();
    $('.modal-content').attr('src', $(this).attr('src'));
    $('.modal').css({
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    });
    $('html, body').css({
      overflow: 'hidden',
      height: 'auto'
    });
  });

  $('.modal, .modal-content').on('click', function(){
    $('.modal').hide();
    $('html, body').css(
      'overflow', 'auto'
    );
  });



   /*Скрываем второстепенные элементы*/
   $(".main_content_bar-wrapper").on("click", function () {
       $(".button_profile-menu, .mobile_menu-aside, .mobile_menu-plus, .mobile_menu-burg").hide();
     });


}); // Конец ready