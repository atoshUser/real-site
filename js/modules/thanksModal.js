import { openModal } from "./modal";
 // SHOW THANKS MODAL
 function showThanksModal(message) {
  const prevModalDialog = document.querySelector(".modal__dialog");
  prevModalDialog.classList.toggle("hidden");
  const thanksModal = document.createElement("div");
  thanksModal.classList.add("modal__dialog");
  thanksModal.innerHTML = `
  <div class="modal__content">
     <div btn-close class="modal__close">&times</div>
      <div class="modal__title">
          ${message}
      </div>
      </div>
  `;
  document.querySelector(".modal").append(thanksModal);
  setTimeout(() => {
      thanksModal.remove();
      prevModalDialog.classList.toggle("hidden");
      openModal();
  }, 4000);
}