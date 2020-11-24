$(document).ready(function () {
  let container = $(".modal_container"),
    body = document.getElementById("body"),
    gallery = $(".gallery_photos"),
    taggs = $("#taggs"),
    moreModal = $(".modal_view-more"),
    modalImg = $(".view_modal_img"),
    viewBtn = $(".gallery_view"),
    msgCounter = +$(".msg_counter").attr("data-counter"),
    togglePosts = $("#togglePosts"),
    name = $(".name"),
    nameDescr = $(".name_descr"),
    toggleTagged = $("#toggleTagged");

  container.hide();
  moreModal.hide();
  modalImg.hide();
  taggs.hide();

  $(".gallery_item").click(function () {
    modalImg.style = "display: block";
    let imgAddr = $(this).attr("src");
    modalImg.attr({ src: imgAddr });
    body.style = "overflow-y: hidden";
    container.show();
    modalImg.show();
    moreModal.hide();
  });

  container.click(function () {
    body.style = "overflow-y: auto";
    moreModal.style = "display: none !important";
    modalImg.hide();
    moreModal.hide();
    container.hide();
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
    modalImg.hide();
    container.show();
    moreModal.show();
    body.style = "overflow-y: hidden";
    moreModal.style = "display: block";
  });

  togglePosts.click(function () {
    gallery.show();
    taggs.hide();
  });

  toggleTagged.click(function () {
    gallery.hide();
    taggs.show();
  });

  name.click(function () {
    let changeName = prompt("Введите новый ник: ", "");
    let access = false;

    function finishPrompt() {
      if (access == true) {
        name.text(changeName);
        nameDescr.text(changeName);
      } else {
        checkPrompt();
      }
    }

    function checkPrompt() {
      if (changeName == "" || changeName.length > 10) {
        access = false;
        finishPrompt();
      } else {
        access = true;
        finishPrompt();
      }
    }
    finishPrompt();
  });
});
