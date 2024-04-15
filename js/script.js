

  const menuItems = document.querySelectorAll('.menu__item');

  // Функция для изменения активного пункта меню
  function changeActiveMenuItem(item) {
    // Удаляем класс 'active' со всех пунктов меню
    menuItems.forEach(item => item.classList.remove('active'));
    // Добавляем класс 'active' к выбранному пункту меню
    item.classList.add('active');
  }

  // Добавляем обработчики событий к каждому пункту меню
  menuItems.forEach(item => {
    item.addEventListener('click', () => changeActiveMenuItem(item));
  });


function initializeSlickSlider() {
  if (!$('.requirements__cards').hasClass('slick-initialized')) {
    $('.requirements__cards').slick({
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