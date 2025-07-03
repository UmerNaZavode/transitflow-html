export default function mapTabs() {
  const buttons = document.querySelectorAll(".contact-informations__button");
  const iframe = document.querySelector(".iframe");
  const src1 = "https://www.openstreetmap.org/export/embed.html?bbox=37.580430538065436%2C55.74703229248481%2C37.583906680948736%2C55.74829737986316&amp;layer=mapnik&amp;marker=55.74766484130172%2C37.58216860950711"
  const src2 = "https://www.openstreetmap.org/export/embed.html?bbox=29.70110893249512%2C60.20199974982952%2C29.718768596649173%2C60.20646734923844&amp;layer=mapnik&amp;marker=60.20423362558044%2C29.709938764572144"
  const sources = [
    src1, src2
  ]

  buttons.forEach((button, index) => {
    button.addEventListener("click", () => {
      buttons.forEach(btn => btn.classList.remove("is-active"));
      button.classList.add("is-active");

      iframe.setAttribute("src", sources[index])
    });
  });
}
