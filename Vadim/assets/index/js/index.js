$(document).ready(function () {
  /*============== Button_profile-menu ==================*/

  $("#header_button-profile").on("click", function () {
    $(".button_profile-menu").slideToggle();
    $(".button_profile-menu").css({
      display: "block",
    });
  });

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
    $(".mobile_menu-aside").slideToggle();
    $(".mobile_menu-aside").css({
      display: "block",
    });
  });

  $("#btn_line-aside").on("click", function () {
    $(".mobile_menu-aside").slideToggle();
  });

  $(".header_aside-btn_arrow").on("click", function () {
    $(".mobile_menu-burg, .mobile_menu-plus").hide();
  });

  /*Darkening the background_menu-burg*/
  $(".header_aside-btn_arrow").click(function () {
    $(".mobile_menu-aside").toggleClass("mobile_menu-shadow");
  });

  $("#btn_line-aside").click(function () {
    $(".mobile_menu-aside").toggleClass("mobile_menu-shadow");
  });

  /*============== Mobile_menu-plus ====================*/

  $(".header-btn_plus").on("click", function () {
    $(".mobile_menu-plus").slideToggle();
    $(".mobile_menu-plus").css({
      display: "block",
    });
  });

  $("#btn_line-plus").on("click", function () {
    $(".mobile_menu-plus").slideToggle();
  });

  $(".header-btn_plus").on("click", function () {
    $(".mobile_menu-burg, .mobile_menu-aside").hide();
  });

  /*Darkening the background_menu-plus*/

  $(".header-btn_plus").click(function () {
    $(".mobile_menu-plus").toggleClass("mobile_menu-shadow");
  });

  $("#btn_line-plus").click(function () {
    $(".mobile_menu-plus").toggleClass("mobile_menu-shadow");
  });

  /*============== Mobile_menu-burg ====================*/

  $(".header-burg").on("click", function () {
    $(".mobile_menu-burg").slideToggle();
    $(".mobile_menu-burg").css({
      display: "block",
    });
  });

  $("#btn_line-burg").on("click", function () {
    $(".mobile_menu-burg").slideToggle();
  });

  $(".header-burg").on("click", function () {
    $(".mobile_menu-plus, .mobile_menu-aside").hide();
  });

  /*Darkening the background_menu-burg*/

  $(".header-burg").click(function () {
    $(".mobile_menu-burg").toggleClass("mobile_menu-shadow");
  });

  $("#btn_line-burg").click(function () {
    $(".mobile_menu-burg").toggleClass("mobile_menu-shadow");
  });

  /*============== Slider ====================*/

  $(".main_aside-storys").slick({
    arrows: false,
    variableWidth: true,
  });

  
  /*============== Modals ====================*/

  const btns = document.querySelectorAll('.btn');
  const modalOverlay = document.querySelector('.modal-overlay ');
  const modals = document.querySelectorAll('.modal');
  
  btns.forEach((el) => {
    el.addEventListener('click', (e) => {
      let path = e.currentTarget.getAttribute('data-path');
  
      modals.forEach((el) => {
        el.classList.remove('modal--visible');
      });
  
      document.querySelector(`[data-target="${path}"]`).classList.add('modal--visible');
      modalOverlay.classList.add('modal-overlay--visible');
    });
  });
  
  modalOverlay.addEventListener('click', (e) => {
    console.log(e.target);
  
    if (e.target == modalOverlay) {
      modalOverlay.classList.remove('modal-overlay--visible');
      modals.forEach((el) => {
        el.classList.remove('modal--visible');
      });
    }
  });
  
  /*Убираем скролл всего сайта при клике на pop up*/
   $(".main_content_bar-wrapper").on(
     "click",
     function () {
       $("html, body").css({
         overflow: "hidden",
         height: "auto",
       });
     }
   );

   /*Добавляем скролл всего сайта при клике вне области контента*/
   $(document).mouseup(function (e) {
     var container = $("");
      if (container.has(e.target).length === 0) {
       container.hide();
     }
     $("html, body").css({
       overflow: "auto",
     });
   });

   /*Скрываем второстепенные элементы*/
   $(".main_content_bar-wrapper").on("click", function () {
       $(".button_profile-menu, .mobile_menu-aside, .mobile_menu-plus, .mobile_menu-burg").hide();
     });


}); // Конец ready