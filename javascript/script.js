$(function () {
  // slide
  const slideList = $(".slide-list");
  const slideWidth = $(".slide").width();
  const slideInitFnc = () => {
    slideList.css({ marginLeft: 0 }).find("li:first").appendTo(slideList);
  };

  const moveSlideFnc = () => {
    slideList.animate({ marginLeft: -slideWidth }, 1000, slideInitFnc);
  };

  setInterval(moveSlideFnc, 2000);

  // modal
  $(() => {
    $(".notice li:first a").click((e) => {
      e.preventDefault(); // 기본 동작 방지
      $("#modal").addClass("active");
    });

    $(".btn").click(() => {
      $("#modal").removeClass("active");
    });
  });
});
