$(document).ready(function () {
  const container = $(".modal_container"),
    body = $("body"),
    gallery = $(".gallery_photos"),
    taggs = $("#taggs"),
    moreModal = $(".modal_view-more"),
    modalImg = $(".view_modal_img");

  let msgCounter = +$(".msg_counter").attr("data-counter"),
    name = $(".name"),
    nameDescr = $(".name_descr");

  let result;
  $.ajax("https://picsum.photos/v2/list?page=2&limit=100", {
    success: function (data) {
      result = data;
    },
  });

  $(".gallery_photos").on("click", ".gallery_item", function () {
    let imgAddr = $(this).attr("src");
    modalImg.attr("src", imgAddr).css("display", "block");
    container.css("display", "flex");
    body.css("overflow", "hidden");
    moreModal.css("display", "none");
  });

  $(".modal_container").mouseup(function (e) {
    if (!container.is(e.target)) {
      return;
    } else {
      body.css("overflow", "auto");
      moreModal.css("display", "none");
      container.css("display", "none");
      modalImg.css("display", "none");
    }
  });

  $(".more_arrow").click(function () {
    body.css("overflow", "hidden");
    container.css("display", "flex");
    moreModal.css("display", "block");
    modalImg.css("display", "none");
  });

  $(".follow").click(function () {
    $(this).text(function (_, text) {
      return text == "Follow" ? "Followed" : "Follow";
    });
  });

  $(".gallery_view").click(function () {
    $(".gallery_view").removeClass("active_view");
    $(this).toggleClass("active_view");
  });

  $(".add_photo").click(function () {
    const newWrp = $('<div class="photo_wrp"></div>');
    const newImg = $('<img class="gallery_item" alt="new photo">');

    const src = result[random(1, 100)].download_url;
    $(".photo_wrp:first-child").after(newWrp);
    newWrp.append(newImg);
    newImg.attr("src", src + ".jpg");
  });

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

  taggs.hide();

  $("#togglePosts").click(function () {
    gallery.show();
    taggs.hide();
  });

  $("#toggleTagged").click(function () {
    gallery.hide();
    taggs.show();
  });

  $(".name").click(function () {
    let changeName = "";
    checkPrompt();

    function checkPrompt() {
      if (changeName) {
        name.text(changeName);
        nameDescr.text(changeName);
      } else {
        changeName = prompt("Введите новый ник: ", "name");
        checkPrompt();
      }
    }
  });

  function random(min, max) {
    return Math.floor(min + Math.random() * (max - min));
  }

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
});
