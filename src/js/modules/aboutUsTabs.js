export default function aboutUsTabs() {
  const tabButtons = document.querySelectorAll(".about-us__tabs-button");
  const tabContents = document.querySelectorAll(".about-us__tabs-content");

  tabButtons.forEach((btn, index) => {
    btn.addEventListener("click", () => activateTab(index));
  });

  function activateTab(index) {
    const targetTab = tabButtons[index].dataset.tab;

    tabButtons.forEach((btn, i) => {
      btn.classList.toggle("is-active", i === index);
      btn.setAttribute("aria-selected", i === index ? "true" : "false");
      btn.setAttribute("tabindex", i === index ? "0" : "-1");
    });

    tabContents.forEach((content) => {
      content.classList.toggle("about-us__tabs-content--active", content.dataset.tab === targetTab);
    });
  }
}
