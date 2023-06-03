// TIMER
const deadline = "2023-08-08";
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

export const getZero = (date) => {
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
