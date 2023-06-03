/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./js/modules/clas.js":
/*!****************************!*\
  !*** ./js/modules/clas.js ***!
  \****************************/
/***/ (() => {

eval("// CLASS\r\n\r\nclass MenuCard {\r\n    constructor(src, alt, title, descr, price, parentSelector, ...clases) {\r\n        this.src = src;\r\n        this.alt = alt;\r\n        this.title = title;\r\n        this.descr = descr;\r\n        this.clases = clases;\r\n        this.parentSelector = document.querySelector(parentSelector);\r\n        this.price = price;\r\n        this.transfer = 11450;\r\n    }\r\n\r\n    chengeToUZS() {\r\n        return (this.price *= this.transfer);\r\n    }\r\n    render() {\r\n        const element = document.createElement(\"div\");\r\n        // here we should check our object element class\r\n        if (this.clases.length == 0) {\r\n            element.className = \"menu__item\";\r\n        } else {\r\n            this.clases.forEach((item) => {\r\n                element.classList.add(item);\r\n            });\r\n        }\r\n        //\r\n        element.innerHTML = `\r\n      <img src= ${this.src} alt=${this.alt} />\r\n      <h3 class=\"menu__item-subtitle\">${this.title}</h3>\r\n      <div class=\"menu__item-descr\">\r\n        ${this.descr}\r\n      </div>\r\n      <div class=\"menu__item-divider\"></div>\r\n      <div class=\"menu__item-price\">\r\n          <div class=\"menu__item-cost\">Price:</div>\r\n          <div class=\"menu__item-total\">\r\n              <span>${this.chengeToUZS()}</span> uzs/month\r\n          </div>\r\n      </div>\r\n\r\n       `;\r\n\r\n        this.parentSelector.append(element);\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://my-real-site/./js/modules/clas.js?");

/***/ }),

/***/ "./js/modules/getData.js":
/*!*******************************!*\
  !*** ./js/modules/getData.js ***!
  \*******************************/
/***/ (() => {

eval("// AXIOS orqali server response olish\r\naxios.get(\"http://localhost:3000/menu\").then((data) => {\r\n    data.data.forEach(({ img, altimg, title, descrp, price }) => {\r\n        new MenuCard(\r\n            img,\r\n            altimg,\r\n            title,\r\n            descrp,\r\n            price,\r\n            \".menu .container\"\r\n        ).render();\r\n    });\r\n});\r\n\n\n//# sourceURL=webpack://my-real-site/./js/modules/getData.js?");

/***/ }),

/***/ "./js/modules/loader.js":
/*!******************************!*\
  !*** ./js/modules/loader.js ***!
  \******************************/
/***/ (() => {

eval("function loader() {\r\n    const loader = document.querySelector(\".loader\");\r\n    //LOADER\r\n    setTimeout(() => {\r\n        loader.style.opacity = \"0\";\r\n        loader.style.visibility = \"hidden\";\r\n    }, 2000);\r\n    // this function hide our tb content in html\r\n    // TAB\r\n}\r\n\n\n//# sourceURL=webpack://my-real-site/./js/modules/loader.js?");

/***/ }),

/***/ "./js/modules/modal.js":
/*!*****************************!*\
  !*** ./js/modules/modal.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   openModal: () => (/* binding */ openModal)\n/* harmony export */ });\n// MODAL\r\nconst modalBtnTrigger = document.querySelectorAll(\"[btn-modal]\"),\r\n    modal = document.querySelector(\".modal\");\r\n\r\nconst openModal = () => {\r\n    modal.classList.toggle(\"hidden\");\r\n    document.body.classList.toggle(\"window-fix\");\r\n};\r\n\r\nmodalBtnTrigger.forEach((btn) => {\r\n    btn.addEventListener(\"click\", () => {\r\n        openModal();\r\n        clearTimeout(setTimeModal);\r\n    });\r\n});\r\ndocument.addEventListener(\"keydown\", (e) => {\r\n    if (e.code == \"Escape\" && !modal.classList.contains(\"hidden\")) {\r\n        modal.classList.toggle(\"hidden\");\r\n    }\r\n});\r\n\r\nmodal.addEventListener(\"click\", (e) => {\r\n    const target = e.target;\r\n\r\n    if (target == modal || target.getAttribute(\"btn-close\") == \"\") {\r\n        openModal();\r\n    }\r\n});\r\n\r\n// SetTimeOut modal\r\nconst setTimeModal = setTimeout(openModal, 8000);\r\n\n\n//# sourceURL=webpack://my-real-site/./js/modules/modal.js?");

/***/ }),

/***/ "./js/modules/scrolModal.js":
/*!**********************************!*\
  !*** ./js/modules/scrolModal.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal */ \"./js/modules/modal.js\");\n\r\n// SHOW MODAL BY SCROLL\r\nconst showScrollModal = () => {\r\n    // window innerheight take our nout height\r\n    // window scrollY take when we scroll site height\r\n    // document.documentElement.scrollHeigth take our full site height\r\n    let windowHeight = window.innerHeight,\r\n        scrollPosition = window.scrollY,\r\n        documentHeight = document.documentElement.scrollHeight;\r\n\r\n    if (scrollPosition + windowHeight >= documentHeight) {\r\n        (0,_modal__WEBPACK_IMPORTED_MODULE_0__.openModal)();\r\n        window.removeEventListener(\"scroll\", showScrollModal);\r\n    }\r\n};\r\nwindow.addEventListener(\"scroll\", showScrollModal);\r\n\n\n//# sourceURL=webpack://my-real-site/./js/modules/scrolModal.js?");

/***/ }),

/***/ "./js/modules/setData.js":
/*!*******************************!*\
  !*** ./js/modules/setData.js ***!
  \*******************************/
/***/ (() => {

eval("   // FORM\r\n   const forms = document.querySelectorAll(\"form\");\r\n   forms.forEach((form) => {\r\n       bindPostData(form);\r\n   });\r\n   console.log(forms);\r\n   const msg = {\r\n       loading: \"Loading...\",\r\n       success: `Thanks for submating our form`,\r\n       fail: `Something went wrong`,\r\n   };\r\n   async function postData(url, data) {\r\n       const request = await fetch(url, {\r\n           method: \"POST\",\r\n           headers: {\r\n               \"Content-Type\": \"application/json\",\r\n           },\r\n           body: data,\r\n       });\r\n\r\n       return await request.json();\r\n   }\r\n   function bindPostData(formEl) {\r\n       formEl.addEventListener(\"submit\", (e) => {\r\n           e.preventDefault();\r\n           const statusMessage = document.createElement(\"div\");\r\n           statusMessage.textContent = msg.loading;\r\n           formEl.append(statusMessage);\r\n\r\n           const formData = new FormData(formEl);\r\n           // const json = JSON.stringify(Object.fromEntries(formData.entries()));\r\n           const json = JSON.stringify(Object.fromEntries(formData));\r\n\r\n           postData(\"http://localhost:3000/request\", json)\r\n               .then((data) => {\r\n                   console.log(data);\r\n                   showThanksModal(msg.success);\r\n                   statusMessage.remove();\r\n               })\r\n               .catch(() => {\r\n                   showThanksModal(msg.fail);\r\n               })\r\n               .finally(() => {\r\n                   formEl.reset();\r\n               });\r\n       });\r\n   }\n\n//# sourceURL=webpack://my-real-site/./js/modules/setData.js?");

/***/ }),

/***/ "./js/modules/sliders.js":
/*!*******************************!*\
  !*** ./js/modules/sliders.js ***!
  \*******************************/
/***/ (() => {

eval("// SLIDES\r\nlet sliders = document.querySelectorAll(\".offer__slide\");\r\nlet next = document.querySelector(\".offer__slider-next\");\r\nlet prev = document.querySelector(\".offer__slider-prev\");\r\nlet current = document.querySelector(\"#current\");\r\nlet total = document.querySelector(\"#total\");\r\nlet slidesWrapper = document.querySelector(\".offer__slider-wrapper\");\r\nlet slidesInner = document.querySelector(\".offer__slider-inner\");\r\nlet offerSlider = document.querySelector(\".offer__slider\");\r\nlet widthSlidesWrapper = Math.round(\r\n    parseFloat(window.getComputedStyle(slidesWrapper).width)\r\n);\r\ntotal.textContent = getZero(sliders.length);\r\n// har bir contenti width ni olamiz\r\nslidesInner.style.width = 100 * sliders.length + \"%\";\r\nslidesInner.style.display = \"flex\";\r\nslidesInner.style.transition = \"all 0.5s ease\";\r\nslidesWrapper.style.overflow = \"hidden\";\r\nlet slideTotal = 0;\r\n\r\nsliders.forEach((val) => {\r\n    val.style.width = widthSlidesWrapper + \"px\";\r\n});\r\n\r\nconst indicator = document.createElement(\"ol\");\r\nindicator.classList.add(\"carousel-indicators\");\r\nofferSlider.insertAdjacentElement(\"beforeend\", indicator);\r\nconst dots = [];\r\nfor (let i = 0; i < sliders.length; i++) {\r\n    const dot = document.createElement(\"li\");\r\n    dot.setAttribute(\"data-slide-to\", i + 1);\r\n    dot.classList.add(\"carousel-dot\");\r\n    indicator.appendChild(dot);\r\n    dots.push(dot);\r\n    if (i == 0) {\r\n        dot.style.opacity = 1;\r\n    }\r\n}\r\nlet slideIndex = 1;\r\nconst changeCurrentText = (idx) => {\r\n    slideIndex += idx;\r\n    if (slideIndex <= 0) {\r\n        current.textContent = getZero(sliders.length);\r\n        slideIndex = sliders.length;\r\n    } else if (slideIndex > sliders.length) {\r\n        current.textContent = \"01\";\r\n        slideIndex = 1;\r\n    } else {\r\n        current.textContent = getZero(slideIndex);\r\n    }\r\n    dots.forEach((dot) => {\r\n        dot.style.opacity = \"0.5\";\r\n    });\r\n    dots[slideIndex - 1].style.opacity = \"1\";\r\n};\r\ndots.forEach((dot) => {\r\n    dot.addEventListener(\"click\", () => {\r\n        let result = dot.getAttribute(\"data-slide-to\");\r\n        current.textContent = getZero(result);\r\n        let slide = widthSlidesWrapper * (result - 1);\r\n        slidesInner.style.transform = `translateX(-${slide}px)`;\r\n        dots.forEach((val) => {\r\n            val.style.opacity = \"0.5\";\r\n        });\r\n        dot.style.opacity = \"1\";\r\n    });\r\n});\r\n\r\nprev.addEventListener(\"click\", () => {\r\n    if (slideTotal == widthSlidesWrapper * (sliders.length - 1)) {\r\n        slideTotal = 0;\r\n    } else {\r\n        slideTotal += widthSlidesWrapper;\r\n    }\r\n    slidesInner.style.transform = `translateX(-${slideTotal}px)`;\r\n    changeCurrentText(1);\r\n});\r\nnext.addEventListener(\"click\", () => {\r\n    if (slideTotal == 0) {\r\n        slideTotal = widthSlidesWrapper * (sliders.length - 1);\r\n    } else {\r\n        slideTotal -= widthSlidesWrapper;\r\n    }\r\n    slidesInner.style.transform = `translateX(-${slideTotal}px)`;\r\n    changeCurrentText(-1);\r\n});\r\n\n\n//# sourceURL=webpack://my-real-site/./js/modules/sliders.js?");

/***/ }),

/***/ "./js/modules/tab.js":
/*!***************************!*\
  !*** ./js/modules/tab.js ***!
  \***************************/
/***/ (() => {

eval("const tabParent = document.querySelector(\".tabheader__items\");\r\nconst tabChilds = document.querySelectorAll(\".tabheader__item\");\r\nconst tabContent = document.querySelectorAll(\".tabcontent\");\r\nfunction hideTabContent() {\r\n    tabContent.forEach((item) => {\r\n        item.classList.remove(\"show\");\r\n        item.classList.add(\"hide\");\r\n    });\r\n    tabChilds.forEach((childItem) => {\r\n        childItem.classList.remove(\"tabheader__item_active\");\r\n    });\r\n}\r\n\r\nfunction showTabContent(i = 0) {\r\n    tabContent[i].classList.remove(\"hide\");\r\n    tabContent[i].classList.add(\"show\");\r\n    tabChilds[i].classList.add(\"tabheader__item_active\");\r\n}\r\n\r\ntabParent.addEventListener(\"click\", (e) => {\r\n    const target = e.target;\r\n    if (target.classList.contains(\"tabheader__item\")) {\r\n        tabChilds.forEach((item, index) => {\r\n            if (item == target) {\r\n                hideTabContent();\r\n                showTabContent(index);\r\n            }\r\n        });\r\n    }\r\n});\r\n\r\nhideTabContent();\r\nshowTabContent();\r\n\n\n//# sourceURL=webpack://my-real-site/./js/modules/tab.js?");

/***/ }),

/***/ "./js/modules/thanksModal.js":
/*!***********************************!*\
  !*** ./js/modules/thanksModal.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal */ \"./js/modules/modal.js\");\n\r\n // SHOW THANKS MODAL\r\n function showThanksModal(message) {\r\n  const prevModalDialog = document.querySelector(\".modal__dialog\");\r\n  prevModalDialog.classList.toggle(\"hidden\");\r\n  const thanksModal = document.createElement(\"div\");\r\n  thanksModal.classList.add(\"modal__dialog\");\r\n  thanksModal.innerHTML = `\r\n  <div class=\"modal__content\">\r\n     <div btn-close class=\"modal__close\">&times</div>\r\n      <div class=\"modal__title\">\r\n          ${message}\r\n      </div>\r\n      </div>\r\n  `;\r\n  document.querySelector(\".modal\").append(thanksModal);\r\n  setTimeout(() => {\r\n      thanksModal.remove();\r\n      prevModalDialog.classList.toggle(\"hidden\");\r\n      (0,_modal__WEBPACK_IMPORTED_MODULE_0__.openModal)();\r\n  }, 4000);\r\n}\n\n//# sourceURL=webpack://my-real-site/./js/modules/thanksModal.js?");

/***/ }),

/***/ "./js/modules/timer.js":
/*!*****************************!*\
  !*** ./js/modules/timer.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getZero: () => (/* binding */ getZero)\n/* harmony export */ });\n// TIMER\r\nconst deadline = \"2023-08-08\";\r\nconst getRemainingTime = (endTime) => {\r\n    let days, hours, minutes, secondes;\r\n    const timer = Date.parse(endTime) - Date.parse(new Date());\r\n\r\n    if (timer <= 0) {\r\n        days = 0;\r\n        hours = 0;\r\n        minutes = 0;\r\n        secondes = 0;\r\n    } else {\r\n        days = Math.round(timer / (1000 * 60 * 60 * 24));\r\n        hours = Math.round((timer / (1000 * 60 * 60)) % 24);\r\n        minutes = Math.round((timer / (1000 * 60)) % 60);\r\n        secondes = Math.round((timer / 1000) % 60);\r\n    }\r\n\r\n    return { timer, days, hours, minutes, secondes };\r\n};\r\n\r\nconst getZero = (date) => {\r\n    return date < 10 ? \"0\" + date : date;\r\n};\r\n\r\nconst updateClockUI = () => {\r\n    const eldays = document.querySelector(\"#days\"),\r\n        elHours = document.querySelector(\"#hours\"),\r\n        elMinutes = document.querySelector(\"#minutes\"),\r\n        elSecond = document.querySelector(\"#seconds\");\r\n\r\n    let setInterClock = setInterval(() => {\r\n        const { timer, days, hours, minutes, secondes } =\r\n            getRemainingTime(deadline);\r\n\r\n        if (timer <= 0) {\r\n            clearInterval(setInterClock);\r\n        }\r\n        eldays.textContent = getZero(days);\r\n        elHours.textContent = getZero(hours);\r\n        elMinutes.textContent = getZero(minutes);\r\n        elSecond.textContent = getZero(secondes);\r\n    }, 1000);\r\n};\r\nupdateClockUI();\r\n\n\n//# sourceURL=webpack://my-real-site/./js/modules/timer.js?");

/***/ }),

/***/ "./js/script.js":
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_clas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/clas */ \"./js/modules/clas.js\");\n/* harmony import */ var _modules_clas__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_modules_clas__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _modules_getData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/getData */ \"./js/modules/getData.js\");\n/* harmony import */ var _modules_getData__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_modules_getData__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _modules_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/loader */ \"./js/modules/loader.js\");\n/* harmony import */ var _modules_loader__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_modules_loader__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/modal */ \"./js/modules/modal.js\");\n/* harmony import */ var _modules_scrolModal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/scrolModal */ \"./js/modules/scrolModal.js\");\n/* harmony import */ var _modules_setData__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/setData */ \"./js/modules/setData.js\");\n/* harmony import */ var _modules_setData__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_modules_setData__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _modules_sliders__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/sliders */ \"./js/modules/sliders.js\");\n/* harmony import */ var _modules_sliders__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_modules_sliders__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _modules_tab__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/tab */ \"./js/modules/tab.js\");\n/* harmony import */ var _modules_tab__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_modules_tab__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _modules_thanksModal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/thanksModal */ \"./js/modules/thanksModal.js\");\n/* harmony import */ var _modules_timer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/timer */ \"./js/modules/timer.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nwindow.addEventListener(\"DOMContentLoaded\", () => {\r\n    (0,_modules_clas__WEBPACK_IMPORTED_MODULE_0__.clas)();\r\n    (0,_modules_getData__WEBPACK_IMPORTED_MODULE_1__.getData)();\r\n    (0,_modules_loader__WEBPACK_IMPORTED_MODULE_2__.loader)();\r\n    (0,_modules_modal__WEBPACK_IMPORTED_MODULE_3__.modal)();\r\n    (0,_modules_scrolModal__WEBPACK_IMPORTED_MODULE_4__.scrollModal)();\r\n    (0,_modules_setData__WEBPACK_IMPORTED_MODULE_5__.setData)();\r\n    (0,_modules_sliders__WEBPACK_IMPORTED_MODULE_6__.sliders)();\r\n    (0,_modules_tab__WEBPACK_IMPORTED_MODULE_7__.tab)();\r\n    (0,_modules_thanksModal__WEBPACK_IMPORTED_MODULE_8__.thanksModal)();\r\n    (0,_modules_timer__WEBPACK_IMPORTED_MODULE_9__.timer)();\r\n});\r\n\n\n//# sourceURL=webpack://my-real-site/./js/script.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./js/script.js");
/******/ 	
/******/ })()
;