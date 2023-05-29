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
    // AXIOS orqali server request jonatish
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
});
