const namesdata = document.querySelectorAll(".entries__name");
var total_data = document.querySelector(".entries__col2");
//all entries names
var names = Array.from(namesdata);

const entriesFunctions = {
  show: function (i) {
    let y = i;
    while (--y >= 0) {
      names[y].classList.remove("label");
    }
    names[i].classList.add("label");
    let z = i;
    while (z++ < names.length) {
      names[z].classList.remove("label");
    }
  },
  //scrolling function
  
  scrollData: function () {
    console.log(total_data.scrollTop)
    if (Math.floor(total_data.scrollTop / 493) === 1) {
      names[0].classList.remove("label");
      names[1].classList.add("label");
      names[2].classList.remove("label");
      names[3].classList.remove("label");
    } else if (Math.floor(total_data.scrollTop / 493) === 2) {
      names[0].classList.remove("label");
      names[1].classList.remove("label");
      names[2].classList.add("label");
      names[3].classList.remove("label");
    } else if (Math.floor(total_data.scrollTop / 493) === 3) {
      names[0].classList.remove("label");
      names[1].classList.remove("label");
      names[2].classList.remove("label");
      names[3].classList.add("label");
    } else if (Math.floor(total_data.scrollTop / 493) === 0) {
      names[0].classList.add("label");
      names[1].classList.remove("label");
      names[2].classList.remove("label");
      names[3].classList.remove("label");
    }
  },
  swiperObject: {
    cssMode: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
    },
    mousewheel: true,
    keyboard: true,
    breakpoints: {
      200: {
        slidesPerView: 1,
      },
      412: {
        slidesPerView: 1,
      },
      840: {
        slidesPerView: 1,
        spaceBetween: 50,
      },
    },
  },
  movePrev: function () {
    prevSwiperButton.click();
  },
  moveNext: function () {
    nextSwiperButton.click();
  },
};
console.log(total_data.scrollTop)
//for each entries
for (let i = 0; i < names.length; i++) {
  names[i].addEventListener("click", () => entriesFunctions.show(i));
}

//scrolling event
total_data.addEventListener("scroll", () => entriesFunctions.scrollData());

//swiper js
var swiper = new Swiper(".mySwiper", entriesFunctions.swiperObject);

//click functionality
const prevButton = document.querySelectorAll(".prev-button");
const nextButton = document.querySelectorAll(".next-button");

const prevSwiperButton = document.querySelector(".swiper-button-prev");
const nextSwiperButton = document.querySelector(".swiper-button-next");

var prev = Array.from(prevButton);
for (let i = 0; i < prev.length; i++) {
  prev[i].addEventListener("click", () => entriesFunctions.movePrev());
}

var next = Array.from(nextButton);
for (let i = 0; i < next.length; i++) {
  next[i].addEventListener("click", () => entriesFunctions.moveNext());
}
