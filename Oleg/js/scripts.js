$(document).ready(function () {
  let container = document.querySelector("#modal_container"),
    body = document.querySelector("body"),
    gallery = document.querySelector(".gallery_photos"),
    taggs = document.querySelector("#taggs"),
    moreModal = document.querySelector("#modal_view-more"),
    modalImg = document.querySelector("#gallery_item_view"),
    viewBtn = $(".gallery_view"),
    msgCounter = +$(".msg_counter").attr("data-counter"),
    togglePosts = $("#togglePosts"),
    name = $(".name");
  toggleTagged = $("#toggleTagged");

  moreModal.style = "display: none !important";
  modalImg.style = "display: none !important";

  $(".gallery_item").click(function () {
    modalImg.style = "display: block";
    let imgAddr = $(this).attr("src");
    $("#gallery_item_view").attr({ src: imgAddr });
    container.style = "display: flex";
    body.style = "overflow-y: hidden";
  });

  $("#modal_container").click(function () {
    this.style = "display: none";
    body.style = "overflow-y: auto";
    moreModal.style = "display: none !important";
  });

  $(".follow").click(function () {
    $(this).text(function (span, text) {
      return text == "Follow" ? "Followed" : "Follow";
    });
  });

  viewBtn.click(function () {
    $(".gallery_view").removeClass("active_view");
    $(this).toggleClass("active_view");
  });

  function toggleAfter() {
    if (msgCounter == "0") {
      $(".msg_counter").removeClass("toggleAfter");
    } else if (msgCounter > "0") {
      $(".msg_counter").addClass("toggleAfter");
    }
  }

  function msgCounterPlus() {
    msgCounter++;
    $(".animate__animated").toggleClass("animate__heartBeat");
    setTimeout(() => {
      $(".animate__animated").toggleClass("animate__heartBeat");
    }, 4000);
  }

  setInterval(() => {
    msgCounterPlus();
    toggleAfter();
    $(".msg_counter").attr("data-counter", msgCounter);

    if (msgCounter === 99) {
      msgCounter = 0;
    }
  }, 5000);

  $(".msg_counter").click(function () {
    $(".msg_counter").attr("data-counter", "0");
    msgCounter = 0;
    toggleAfter();
  });

  $(".more_arrow").click(function () {
    modalImg.style = "display: none";
    container.style = "display: flex";
    body.style = "overflow-y: hidden";
    moreModal.style = "display: block";
  });

  togglePosts.click(function () {
    gallery.style = "display: flex";
    taggs.style = "display: none";
  });

  toggleTagged.click(function () {
    gallery.style = "display: none";
    taggs.style = "display: block";
  });

  name.click(function () {
    let changeName = prompt("Введите новый ник: ", "");

    while (changeName == "" || changeName.length > 10) {
      changeName = prompt("Введите новый ник: ", "");
    }

    name.text(changeName);
  });
});
