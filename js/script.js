const btnMenu = document.querySelector(".menu-mobile");
const menu = document.querySelector(".menu");
const headerMenu = document.querySelector(".header-menu");

function menuMobile() {
  menu.classList.toggle("active");
  outsideclick(headerMenu, () => {
    menu.classList.remove("active");
  });
}

btnMenu.addEventListener("click", menuMobile);

function outsideclick(element, callback) {
  const html = document.documentElement;
  html.addEventListener("click", handleOutsideClick);

  function handleOutsideClick(event) {
    if (!element.contains(event.target)) {
      html.removeEventListener("click", handleOutsideClick);
      callback();
    }
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const tl = gsap.timeline();

  tl.from(".menu-1", {
    duration: 1,
    y: 50,
    opacity: 0,
    delay: 0.5,
    ease: "power3.out",
  })
    .from(
      ".menu-2",
      {
        duration: 1,
        y: 50,
        opacity: 0,
        ease: "power3.out",
      },
      "-=0.8"
    )
    .from(
      ".menu-3",
      {
        duration: 1,
        y: 50,
        opacity: 0,
        ease: "power3.out",
      },
      "-=0.8"
    )
    .from(
      ".menu-4",
      {
        duration: 1,
        y: 50,
        opacity: 0,
        ease: "power3.out",
      },
      "-=0.8"
    )
    .from(
      ".menu-5",
      {
        duration: 1,
        y: 50,
        opacity: 0,
        ease: "power3.out",
      },
      "-=0.8"
    )
    .from(
      ".container-item div",
      {
        duration: 1,
        y: 300,
        opacity: 0,
        stagger: { each: 0.2 },
        ease: "power3.out",
      },
      "-=0.8"
    )
    .from(
      ".container-item img",
      {
        duration: 1,
        y: 300,
        opacity: 0,
        ease: "power3.out",
      },
      "-=0.8"
    );

  // gsap.registerPlugin(ScrollTrigger);

  // gsap.from("#section-01 .list-item", {
  //   duration: 1,
  //   x: -300,
  //   opacity: 0,
  //   stagger: { each: 0.2 },
  //   ease: "power3.out",
  //   scrollTrigger: {
  //     trigger: "#section-01",
  //   },
  // });

  // gsap.from("#section-02 .list-item", {
  //   duration: 1,
  //   x: -300,
  //   opacity: 0,
  //   stagger: { each: 0.2 },
  //   ease: "power3.out",
  //   scrollTrigger: {
  //     trigger: "#section-02",
  //   },
  // });

  // gsap.from("#section-03", {
  //   duration: 1,
  //   x: -300,
  //   opacity: 0,
  //   stagger: { each: 0.2 },
  //   ease: "power3.out",
  //   scrollTrigger: {
  //     trigger: "#section-03",
  //   },
  // });
});

// SCROLL SUAVE

const menuItems = document.querySelectorAll(".scroll-suave");

menuItems.forEach((item) => {
  item.addEventListener("click", scrollToIdOnClick);
});

function getScrollToByHref(element) {
  const id = element.getAttribute("href");
  return document.querySelector(id).offsetTop;
}

function scrollToIdOnClick(event) {
  event.preventDefault();
  menu.classList.remove("active");
  const to = getScrollToByHref(event.target);

  window.scroll({
    top: to - 80,
    behavior: "smooth",
  });
}

// Anima Scroll

const debounce = function (func, wait, immediate) {
  let timeout;
  return function (...args) {
    const context = this;
    const later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
};

const target = document.querySelectorAll(".anima-scroll");
const animationClass = "animate";

function animaScroll() {
  const windowTop = window.pageYOffset + (window.innerHeight * 3) / 3.5;
  target.forEach((element) => {
    if (windowTop > element.offsetTop) {
      element.classList.add(animationClass);
    } else {
      element.classList.remove(animationClass);
    }
  });
}

animaScroll();

if (target.length) {
  window.addEventListener(
    "scroll",
    debounce(() => {
      animaScroll();
    }, 150)
  );
}

// Modal

const happy = document.querySelector(".happy");
const podcastr = document.querySelector(".podcastr");
const spider = document.querySelector(".spider");
const worksModal = document.querySelector(".works-modal");

// function handleClick(event) {
//   event.preventDefault();
//   worksModal.classList.add("works-active");

//   document
//     .querySelector(`#${event.target.innerText.toLowerCase()}`)
//     .classList.add("img-active");
// }

// happy.addEventListener("click", handleClick);
// podcastr.addEventListener("click", handleClick);
// spider.addEventListener("click", handleClick);

// function removeModalClass() {
//   const modalImgRemoveClass = document.querySelectorAll(".remove-class");

//   modalImgRemoveClass.forEach((img) => {
//     img.classList.remove("img-active");
//   });

//   worksModal.classList.remove("works-active");
// }

// document.querySelector(".close").addEventListener("click", removeModalClass);

import SlideNav from "./slide.js";

const slide = new SlideNav(".slide", ".slide-wrapper");
slide.init();
slide.addArrow(".prev", ".next");

slide.addControl(".custom-controls");