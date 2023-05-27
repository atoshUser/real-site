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
        modal = document.querySelector(".modal"),
        modalCloseBtn = document.querySelector("[btn-close]");

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
    modalCloseBtn.addEventListener("click", () => {
        openModal();
    });
    modal.addEventListener("click", (e) => {
        const target = e.target;
        if (target == modal) {
            openModal();
        }
    });

    // SetTimeOut modal
    //  const setTimeModal = setTimeout(openModal, 4000);

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

    ///
    new MenuCard(
        `img/tabs/1.png`,
        `vegy`,
        `Plan "Usual"`,
        `  Lorem ipsum, dolor sit amet consectetur adipisicing
    elit. Fugit nesciunt facere, sequi exercitationem
    praesentium ab cupiditate beatae debitis
    perspiciatis itaque quaerat id modi corporis
    delectus ratione nobis harum voluptatum in.`,
        10,
        `.menu .container`
    ).render();

    new MenuCard(
        `img/tabs/3.jpg`,
        `post`,
        `Plan "VIP"`,
        `Lorem ipsum dolor, sit amet consectetur adipisicing
    elit. Voluptatibus natus nobis minus corporis atque
    enim vitae, modi eligendi commodi itaque voluptatum
    ipsum. Nemo reiciendis, id rem dolorum rerum
    consequuntur eos.`,
        12,
        `.menu .container`,
        `menu__item`
    ).render();
    new MenuCard(
        `img/tabs/2.jpg`,
        `elite`,
        `Plan “Premium”`,
        ` Lorem ipsum dolor sit amet consectetur adipisicing
    elit. Itaque aliquid molestiae, sit eveniet, tempora
    ipsum quaerat recusandae sapiente doloremque
    corporis dolores quas consectetur ut labore
    distinctio libero reiciendis harum sequi?`,
        15,
        `.menu .container`,
        `menu__item`
    ).render();
});
