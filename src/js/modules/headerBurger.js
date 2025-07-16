export default function headerBurger() {
  const burger = document.querySelector('.header-burger');
  const mobileMenu = document.querySelector('.header-mobile');
  const mobileOverlay = document.querySelector('.header-mobile__overlay');
  const mobileDropdowns = document.querySelectorAll('.header-mobile__item--dropdown');
  const body = document.body;

  // Открытие/закрытие мобильного меню
  function toggleMobileMenu() {
    burger.classList.toggle('is-active');
    mobileMenu.classList.toggle('is-active');
    body.style.overflow = mobileMenu.classList.contains('is-active') ? 'hidden' : '';
  }

  // Закрытие мобильного меню
  function closeMobileMenu() {
    burger.classList.remove('is-active');
    mobileMenu.classList.remove('is-active');
    body.style.overflow = '';

    // Закрываем все dropdown'ы
    mobileDropdowns.forEach(dropdown => {
      dropdown.classList.remove('is-active');
    });
  }

  // Обработчики событий
  if (burger) {
    burger.addEventListener('click', toggleMobileMenu);
  }

  if (mobileOverlay) {
    mobileOverlay.addEventListener('click', closeMobileMenu);
  }

  // Обработка dropdown'ов в мобильном меню
  mobileDropdowns.forEach(dropdown => {
    const button = dropdown.querySelector('.header-mobile__button');

    if (button) {
      button.addEventListener('click', function(e) {
        e.preventDefault();
        dropdown.classList.toggle('is-active');

        // Закрываем другие открытые dropdown'ы
        mobileDropdowns.forEach(otherDropdown => {
          if (otherDropdown !== dropdown) {
            otherDropdown.classList.remove('is-active');
          }
        });
      });
    }
  });

  // Закрытие меню при клике на ссылку
  const mobileLinks = document.querySelectorAll('.header-mobile__link');
  mobileLinks.forEach(link => {
    link.addEventListener('click', closeMobileMenu);
  });

  // Закрытие меню при изменении размера экрана
  window.addEventListener('resize', function() {
    if (window.innerWidth > 992) {
      closeMobileMenu();
    }
  });

  // Предотвращение закрытия при клике на контент меню
  const mobileContent = document.querySelector('.header-mobile__content');
  if (mobileContent) {
    mobileContent.addEventListener('click', function(e) {
      e.stopPropagation();
    });
  }

  // Возвращаем объект с методами для внешнего управления (опционально)
  return {
    closeMobileMenu,
    toggleMobileMenu
  };
}
