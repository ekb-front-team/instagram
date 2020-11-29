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