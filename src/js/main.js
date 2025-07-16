import './../scss/style.scss'
import aboutUsTabs from './modules/aboutUsTabs';
import headerBurger from './modules/headerBurger';
import headerNav from './modules/headerNav';

document.addEventListener("DOMContentLoaded", function() {
  headerNav()

  aboutUsTabs()

  headerBurger()
});
