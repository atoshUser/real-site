import { openModal } from "./modal";
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
