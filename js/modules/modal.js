// MODAL
const modalBtnTrigger = document.querySelectorAll("[btn-modal]"),
    modal = document.querySelector(".modal");

export const openModal = () => {
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
