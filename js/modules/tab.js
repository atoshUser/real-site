const tabParent = document.querySelector(".tabheader__items");
const tabChilds = document.querySelectorAll(".tabheader__item");
const tabContent = document.querySelectorAll(".tabcontent");
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
