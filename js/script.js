import { clas } from "./modules/clas";
import { getData } from "./modules/getData";
import { loader } from "./modules/loader";
import { modal } from "./modules/modal";
import { scrollModal } from "./modules/scrolModal";
import { setData } from "./modules/setData";
import { sliders } from "./modules/sliders";
import { tab } from "./modules/tab";
import { thanksModal } from "./modules/thanksModal";
import { timer } from "./modules/timer";
window.addEventListener("DOMContentLoaded", () => {
    clas();
    getData();
    loader();
    modal();
    scrollModal();
    setData();
    sliders();
    tab();
    thanksModal();
    timer();
});
