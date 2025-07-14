export default function headerNav() {
  const links = document.querySelectorAll('.header-nav__link');
  const currentPath = window.location.pathname;

  links.forEach(link => {
    const linkPath = link.getAttribute('href');

    if (linkPath === currentPath || linkPath === '.' + currentPath) {
      link.classList.add('is-active');
    }
  });
}
