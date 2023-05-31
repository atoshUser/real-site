window.addEventListener("DOMContentLoaded", () => {
    const tabParent = document.querySelector(".tabheader__items");
    const tabChilds = document.querySelectorAll(".tabheader__item");
    const tabContent = document.querySelectorAll(".tabcontent");
    const loader = document.querySelector(".loader");
    //LOADER
    setTimeout(() => {
        loader.style.opacity = "0";
        loader.style.visibility = "hidden";
    }, 2000);
    // this function hide our tb content in html
    // TAB
    function hideTabContent() {
        tabContent.forEach((item) => {
            item.classList.remove("show");
            item.classList.add("hide");
        });
        tabChilds.forEach((childItem) => {
            childItem.classList.remove("tabheader__item_active");
        });
    }

    function showTabContent(i = 0) {
        tabContent[i].classList.remove("hide");
        tabContent[i].classList.add("show");
        tabChilds[i].classList.add("tabheader__item_active");
    }

    tabParent.addEventListener("click", (e) => {
        const target = e.target;
        if (target.classList.contains("tabheader__item")) {
            tabChilds.forEach((item, index) => {
                if (item == target) {
                    hideTabContent();
                    showTabContent(index);
                }
            });
        }
    });

    hideTabContent();
    showTabContent();

    // TIMER
    const deadline = "2023-05-31";
    const getRemainingTime = (endTime) => {
        let days, hours, minutes, secondes;
        const timer = Date.parse(endTime) - Date.parse(new Date());

        if (timer <= 0) {
            days = 0;
            hours = 0;
            minutes = 0;
            secondes = 0;
        } else {
            days = Math.round(timer / (1000 * 60 * 60 * 24));
            hours = Math.round((timer / (1000 * 60 * 60)) % 24);
            minutes = Math.round((timer / (1000 * 60)) % 60);
            secondes = Math.round((timer / 1000) % 60);
        }

        return { timer, days, hours, minutes, secondes };
    };

    const getZero = (date) => {
        return date < 10 ? "0" + date : date;
    };

    const updateClockUI = () => {
        const eldays = document.querySelector("#days"),
            elHours = document.querySelector("#hours"),
            elMinutes = document.querySelector("#minutes"),
            elSecond = document.querySelector("#seconds");

        let setInterClock = setInterval(() => {
            const { timer, days, hours, minutes, secondes } =
                getRemainingTime(deadline);

            if (timer <= 0) {
                clearInterval(setInterClock);
            }
            eldays.textContent = getZero(days);
            elHours.textContent = getZero(hours);
            elMinutes.textContent = getZero(minutes);
            elSecond.textContent = getZero(secondes);
        }, 1000);
    };
    updateClockUI();

    // MODAL
    const modalBtnTrigger = document.querySelectorAll("[btn-modal]"),
        modal = document.querySelector(".modal");

    const openModal = () => {
        modal.classList.toggle("hidden");
        document.body.classList.toggle("window-fix");
    };

    modalBtnTrigger.forEach((btn) => {
        btn.addEventListener("click", () => {
            openModal();
            clearTimeout(setTimeModal);
        });
    });
    document.addEventListener("keydown", (e) => {
        if (e.code == "Escape" && !modal.classList.contains("hidden")) {
            modal.classList.toggle("hidden");
        }
    });

    modal.addEventListener("click", (e) => {
        const target = e.target;

        if (target == modal || target.getAttribute("btn-close") == "") {
            openModal();
        }
    });

    // SetTimeOut modal
    const setTimeModal = setTimeout(openModal, 8000);

    // SHOW MODAL BY SCROLL
    const showScrollModal = () => {
        // window innerheight take our nout height
        // window scrollY take when we scroll site height
        // document.documentElement.scrollHeigth take our full site height
        let windowHeight = window.innerHeight,
            scrollPosition = window.scrollY,
            documentHeight = document.documentElement.scrollHeight;

        if (scrollPosition + windowHeight >= documentHeight) {
            openModal();
            window.removeEventListener("scroll", showScrollModal);
        }
    };
    window.addEventListener("scroll", showScrollModal);

    // CLASS

    class MenuCard {
        constructor(src, alt, title, descr, price, parentSelector, ...clases) {
            this.src = src;
            this.alt = alt;
            this.title = title;
            this.descr = descr;
            this.clases = clases;
            this.parentSelector = document.querySelector(parentSelector);
            this.price = price;
            this.transfer = 11450;
        }

        chengeToUZS() {
            return (this.price *= this.transfer);
        }
        render() {
            const element = document.createElement("div");
            // here we should check our object element class
            if (this.clases.length == 0) {
                element.className = "menu__item";
            } else {
                this.clases.forEach((item) => {
                    element.classList.add(item);
                });
            }
            //
            element.innerHTML = `
            <img src= ${this.src} alt=${this.alt} />
            <h3 class="menu__item-subtitle">${this.title}</h3>
            <div class="menu__item-descr">
              ${this.descr}
            </div>
            <div class="menu__item-divider"></div>
            <div class="menu__item-price">
                <div class="menu__item-cost">Price:</div>
                <div class="menu__item-total">
                    <span>${this.chengeToUZS()}</span> uzs/month
                </div>
            </div>

             `;

            this.parentSelector.append(element);
        }
    }
    // AXIOS orqali server response olish
    axios.get("http://localhost:3000/menu").then((data) => {
        data.data.forEach(({ img, altimg, title, descrp, price }) => {
            new MenuCard(
                img,
                altimg,
                title,
                descrp,
                price,
                ".menu .container"
            ).render();
        });
    });

    // FORM

    const forms = document.querySelectorAll("form");
    forms.forEach((form) => {
        bindPostData(form);
    });
    console.log(forms);
    const msg = {
        loading: "Loading...",
        success: `Thanks for submating our form`,
        fail: `Something went wrong`,
    };
    async function postData(url, data) {
        const request = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: data,
        });

        return await request.json();
    }
    function bindPostData(formEl) {
        formEl.addEventListener("submit", (e) => {
            e.preventDefault();
            const statusMessage = document.createElement("div");
            statusMessage.textContent = msg.loading;
            formEl.append(statusMessage);

            const formData = new FormData(formEl);
            // const json = JSON.stringify(Object.fromEntries(formData.entries()));
            const json = JSON.stringify(Object.fromEntries(formData));

            postData("http://localhost:3000/request", json)
                .then((data) => {
                    console.log(data);
                    showThanksModal(msg.success);
                    statusMessage.remove();
                })
                .catch(() => {
                    showThanksModal(msg.fail);
                })
                .finally(() => {
                    formEl.reset();
                });
        });
    }

    // SHOW THANKS MODAL
    function showThanksModal(message) {
        const prevModalDialog = document.querySelector(".modal__dialog");
        prevModalDialog.classList.toggle("hidden");
        const thanksModal = document.createElement("div");
        thanksModal.classList.add("modal__dialog");
        thanksModal.innerHTML = `
        <div class="modal__content">
           <div btn-close class="modal__close">&times</div>
            <div class="modal__title">
                ${message}
            </div>
            </div>
        `;
        document.querySelector(".modal").append(thanksModal);
        setTimeout(() => {
            thanksModal.remove();
            prevModalDialog.classList.toggle("hidden");
            openModal();
        }, 4000);
    }

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
        window.getComputedStyle(slidesWrapper).width.slice(0, -2)
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
});
