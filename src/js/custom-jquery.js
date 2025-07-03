jQuery(document).ready(function($) {
  const safety_content = document.querySelector(".safety-content")
  if (safety_content) {
    safetySlider()
  }
  function safetySlider() {
    const slider = $('.safety-content')
    const btn_prev = $('.safety .navigation-btn__arrow--prev')
    const btn_next = $('.safety .navigation-btn__arrow--next')

    slider.slick({
      arrows: false,
    });
    btn_prev.on("click", function() {
      slider.slick("slickPrev");
    });
    btn_next.on("click", function() {
      slider.slick("slickNext");
    });
  }

  const projects__slider = document.querySelector(".projects__slider")
  if (projects__slider) {
    projectSlider()
  }
  function projectSlider() {
    const slider = $('.projects__slider')
    const btn_prev = $('.projects .navigation-btn__arrow--prev')
    const btn_next = $('.projects .navigation-btn__arrow--next')

    slider.slick({
      arrows: false,
    });
    btn_prev.on("click", function() {
      slider.slick("slickPrev");
    });
    btn_next.on("click", function() {
      slider.slick("slickNext");
    });
  }
});
