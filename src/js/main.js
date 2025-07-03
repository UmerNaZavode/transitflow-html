import './../scss/style.scss'
import headerStyles from './modules/headerStyles';
import heroSlider from './modules/heroSlider';
import mapTabs from './modules/mapTabs';
import toggleMenu from './modules/toggleMenu';

document.addEventListener("DOMContentLoaded", function() {
  // const header = document.queryselector

  headerStyles()

  toggleMenu()

  const contact_informations_btn = document.querySelector(".contact-informations__button");
  if (contact_informations_btn) {
    mapTabs()
  }

  const hero_section = document.querySelector(".hero-section")
  if (hero_section) {
    heroSlider()
  }
});
