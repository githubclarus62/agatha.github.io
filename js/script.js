$(document).ready(function () {
  $("#menu").click(function () {
    $(this).toggleClass("fa-times");
    $("header").toggleClass("toggle");
  });
  $(window).on("scroll load", function () {
    $("#menu").removeClass("fa-times");
    $("header").removeClass("toggle");

    if ($(window).scrollTop() > 0) {
      $(".top").show();
    } else {
      $(".top").hiden();
    }
  });

  //contact-form
  const contactForm = document.getElementById("contact-form");

  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const url = e.target.action;
    const formData = new FormData(contactForm);

    fetch(url, {
      method: "POST",
      body: formData,
      mode: "no-cors",
    })
      .then(() => {
        //url thank you
        window.location.href = "./thankyou.html";
      })
      .catch((e) => alert("Error occured"));
  });

  var typed = new Typed(".typing-1", {
    strings: ["Demokrasi untuk mencapai tujuan bersama"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });

  var typed = new Typed(".typing-2", {
    strings: ["Lambang partai...", "Nama CALEG..."],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });
  // smooth scrolling
  $('a[href* = "#"]').on("click", function (e) {
    e.preventDefault();
    $("html, body").animate(
      {
        scrollTop: $($(this).attr("href")).offset().top,
      },
      500,
      "linear"
    );
  });
});
