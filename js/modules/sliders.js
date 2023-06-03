// SLIDES
let sliders = document.querySelectorAll(".offer__slide");
let next = document.querySelector(".offer__slider-next");
let prev = document.querySelector(".offer__slider-prev");
let current = document.querySelector("#current");
let total = document.querySelector("#total");
let slidesWrapper = document.querySelector(".offer__slider-wrapper");
let slidesInner = document.querySelector(".offer__slider-inner");
let offerSlider = document.querySelector(".offer__slider");
let widthSlidesWrapper = Math.round(
    parseFloat(window.getComputedStyle(slidesWrapper).width)
);
total.textContent = getZero(sliders.length);
// har bir contenti width ni olamiz
slidesInner.style.width = 100 * sliders.length + "%";
slidesInner.style.display = "flex";
slidesInner.style.transition = "all 0.5s ease";
slidesWrapper.style.overflow = "hidden";
let slideTotal = 0;

sliders.forEach((val) => {
    val.style.width = widthSlidesWrapper + "px";
});

const indicator = document.createElement("ol");
indicator.classList.add("carousel-indicators");
offerSlider.insertAdjacentElement("beforeend", indicator);
const dots = [];
for (let i = 0; i < sliders.length; i++) {
    const dot = document.createElement("li");
    dot.setAttribute("data-slide-to", i + 1);
    dot.classList.add("carousel-dot");
    indicator.appendChild(dot);
    dots.push(dot);
    if (i == 0) {
        dot.style.opacity = 1;
    }
}
let slideIndex = 1;
const changeCurrentText = (idx) => {
    slideIndex += idx;
    if (slideIndex <= 0) {
        current.textContent = getZero(sliders.length);
        slideIndex = sliders.length;
    } else if (slideIndex > sliders.length) {
        current.textContent = "01";
        slideIndex = 1;
    } else {
        current.textContent = getZero(slideIndex);
    }
    dots.forEach((dot) => {
        dot.style.opacity = "0.5";
    });
    dots[slideIndex - 1].style.opacity = "1";
};
dots.forEach((dot) => {
    dot.addEventListener("click", () => {
        let result = dot.getAttribute("data-slide-to");
        current.textContent = getZero(result);
        let slide = widthSlidesWrapper * (result - 1);
        slidesInner.style.transform = `translateX(-${slide}px)`;
        dots.forEach((val) => {
            val.style.opacity = "0.5";
        });
        dot.style.opacity = "1";
    });
});

prev.addEventListener("click", () => {
    if (slideTotal == widthSlidesWrapper * (sliders.length - 1)) {
        slideTotal = 0;
    } else {
        slideTotal += widthSlidesWrapper;
    }
    slidesInner.style.transform = `translateX(-${slideTotal}px)`;
    changeCurrentText(1);
});
next.addEventListener("click", () => {
    if (slideTotal == 0) {
        slideTotal = widthSlidesWrapper * (sliders.length - 1);
    } else {
        slideTotal -= widthSlidesWrapper;
    }
    slidesInner.style.transform = `translateX(-${slideTotal}px)`;
    changeCurrentText(-1);
});
