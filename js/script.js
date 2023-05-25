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
        const timer = Date.parse(endTime) - Date.parse(new Date());
        const days = Math.round(timer / (1000 * 60 * 60 * 24));
        const hours = Math.round((timer / (1000 * 60 * 60)) % 24);
        const minutes = Math.round((timer / (1000 * 60)) % 60);
        const secondes = Math.round((timer / 1000) % 60);
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

            if (timer == 0) {
                clearInterval(setInterClock);
            }
            eldays.textContent = getZero(days);
            elHours.textContent = getZero(hours);
            elMinutes.textContent = getZero(minutes);
            elSecond.textContent = getZero(secondes);
        }, 1000);
    };
    updateClockUI();
});
