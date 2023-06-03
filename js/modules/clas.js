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
