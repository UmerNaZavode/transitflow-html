export default function heroSlider() {
  const images = document.querySelectorAll(".background-img")
  const btn_prev = document.querySelector(".hero-section .navigation-btn__arrow--prev")
  const btn_next = document.querySelector(".hero-section .navigation-btn__arrow--next")
  let index = 0

  btn_prev.addEventListener("click", function() {
    if (index === 0) {
      index = images.length - 1
    }
    else {
      index -= 1
    }

    resetActive()
    setActive(index)
  })

  btn_next.addEventListener("click", function() {
    if (index === images.length - 1) {
      index = 0
    }
    else {
      index += 1
    }

    resetActive()
    setActive(index)
  })

  function setActive(index) {
    images[index].classList.add("active")
    setTimeout(() => {
      images[index].classList.add("show")
    }, 10)
  }

  function resetActive() {
    images.forEach(item => {
      item.classList.remove("show")
      item.classList.remove("active")
    })
  }
}

// TODO: fix header menu
