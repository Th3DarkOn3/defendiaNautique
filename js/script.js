document.addEventListener("DOMContentLoaded", function () {
    // Inizializza Materialize Components
    const sidenavElems = document.querySelectorAll(".sidenav");
    M.Sidenav.init(sidenavElems);
  
    const materialboxedElems = document.querySelectorAll(".materialboxed");
    M.Materialbox.init(materialboxedElems);
  
    const parallaxElems = document.querySelectorAll(".parallax");
    M.Parallax.init(parallaxElems);
  
    const tabsElems = document.querySelectorAll(".tabs");
    M.Tabs.init(tabsElems);
  
    const datepickerElems = document.querySelectorAll(".datepicker");
    M.Datepicker.init(datepickerElems);
  
    const tooltipElems = document.querySelectorAll(".tooltipped");
    M.Tooltip.init(tooltipElems);
  
    const dropdownElems = document.querySelectorAll(".dropdown-trigger");
    M.Dropdown.init(dropdownElems);
  });
  
  // ---------------------- CAROSELLO 3D PERSONALIZZATO ----------------------
  
  (function () {
    "use strict";
  
    const carousel = document.querySelector(".carousel");
    if (!carousel) return; // se non esiste, esci
  
    const slider = carousel.querySelector(".carousel__slider"),
      items = carousel.querySelectorAll(".carousel__slider__item"),
      prevBtn = carousel.querySelector(".carousel__prev"),
      nextBtn = carousel.querySelector(".carousel__next");
  
    let width,
      height,
      totalWidth,
      margin = 20,
      currIndex = 0,
      interval,
      intervalTime = 4000;
  
    function init() {
      resize();
      move(Math.floor(items.length / 2));
      bindEvents();
      timer();
    }
  
    function resize() {
      width = Math.max(window.innerWidth * 0.25, 275);
      height = window.innerHeight * 0.5;
      totalWidth = width * items.length;
  
      slider.style.width = totalWidth + "px";
  
      items.forEach((item) => {
        item.style.width = width - margin * 2 + "px";
        item.style.height = height + "px";
      });
    }
  
    function move(index) {
      if (index < 1) index = items.length;
      if (index > items.length) index = 1;
      currIndex = index;
  
      items.forEach((item, i) => {
        const box = item.querySelector(".item__3d-frame");
        if (i === index - 1) {
          item.classList.add("carousel__slider__item--active");
          box.style.transform = "perspective(1200px)";
        } else {
          item.classList.remove("carousel__slider__item--active");
          box.style.transform =
            "perspective(1200px) rotateY(" +
            (i < index - 1 ? 40 : -40) +
            "deg)";
        }
      });
  
      slider.style.transform =
        "translate3d(" +
        (index * -width + width / 2 + window.innerWidth / 2) +
        "px, 0, 0)";
    }
  
    function timer() {
      clearInterval(interval);
      interval = setInterval(() => {
        move(++currIndex);
      }, intervalTime);
    }
  
    function prev() {
      move(--currIndex);
      timer();
    }
  
    function next() {
      move(++currIndex);
      timer();
    }
  
    function bindEvents() {
      window.addEventListener("resize", resize);
      prevBtn?.addEventListener("click", prev);
      nextBtn?.addEventListener("click", next);
    }
  
    init();
  })();
  