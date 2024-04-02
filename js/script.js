function initializeSlickSlider() {
  if (!$('.requirements__cards').hasClass('slick-initialized')) {
    $('.requirements__cards').slick({
      // Настройки Slick Slider
      dots: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false, 
    });
  }
}

function destroySlickSlider() {
  if ($('.requirements__cards').hasClass('slick-initialized')) {
    $('.requirements__cards').slick('unslick');
  }
}

function checkScreenWidth() {
  if (window.innerWidth < 768) {
    initializeSlickSlider();
  } else {
    destroySlickSlider();
  }
}


checkScreenWidth();

window.addEventListener('resize', checkScreenWidth);