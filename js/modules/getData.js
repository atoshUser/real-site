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
