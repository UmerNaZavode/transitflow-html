export default function headerBurger() {
  const burger = document.querySelector('.header-burger');
  const mobileMenu = document.querySelector('.header-mobile');
  const overlay = document.querySelector('.header-mobile__overlay');
  const closeBtn = document.querySelector('.header-mobile__close');
  const dropdownButtons = document.querySelectorAll('.header-mobile__button--dropdown');

  // Проверяем наличие необходимых элементов
  if (!burger || !mobileMenu) {
    console.warn('Burger menu elements not found');
    return;
  }

  // Открытие меню
  burger.addEventListener('click', function() {
    burger.classList.add('is-active');
    mobileMenu.classList.add('is-active');
    document.body.style.overflow = 'hidden';
  });

  // Закрытие меню по клику на overlay
  if (overlay) {
    overlay.addEventListener('click', function() {
      closeMobileMenu();
    });
  }

  // Закрытие меню по клику на кнопку закрытия
  if (closeBtn) {
    closeBtn.addEventListener('click', function() {
      closeMobileMenu();
    });
  }

  // Функция закрытия меню
  function closeMobileMenu() {
    burger.classList.remove('is-active');
    mobileMenu.classList.remove('is-active');
    document.body.style.overflow = '';
  }

  // Обработка выпадающих меню
  dropdownButtons.forEach(button => {
    button.addEventListener('click', function() {
      const parentItem = this.closest('.header-mobile__item--dropdown');
      if (parentItem) {
        parentItem.classList.toggle('is-active');
      }
    });
  });

  // Закрытие меню при клике на ссылки
  const mobileLinks = document.querySelectorAll('.header-mobile__link');
  mobileLinks.forEach(link => {
    link.addEventListener('click', function() {
      closeMobileMenu();
    });
  });

  // Закрытие меню при изменении размера экрана
  window.addEventListener('resize', function() {
    if (window.innerWidth > 992) {
      closeMobileMenu();
    }
  });

  // Возвращаем объект с методами для внешнего управления
  return {
    open: () => {
      burger.classList.add('is-active');
      mobileMenu.classList.add('is-active');
      document.body.style.overflow = 'hidden';
    },
    close: closeMobileMenu,
    toggle: () => {
      if (mobileMenu.classList.contains('is-active')) {
        closeMobileMenu();
      } else {
        burger.classList.add('is-active');
        mobileMenu.classList.add('is-active');
        document.body.style.overflow = 'hidden';
      }
    }
  };
}
