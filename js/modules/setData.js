   // FORM
   const forms = document.querySelectorAll("form");
   forms.forEach((form) => {
       bindPostData(form);
   });
   console.log(forms);
   const msg = {
       loading: "Loading...",
       success: `Thanks for submating our form`,
       fail: `Something went wrong`,
   };
   async function postData(url, data) {
       const request = await fetch(url, {
           method: "POST",
           headers: {
               "Content-Type": "application/json",
           },
           body: data,
       });

       return await request.json();
   }
   function bindPostData(formEl) {
       formEl.addEventListener("submit", (e) => {
           e.preventDefault();
           const statusMessage = document.createElement("div");
           statusMessage.textContent = msg.loading;
           formEl.append(statusMessage);

           const formData = new FormData(formEl);
           // const json = JSON.stringify(Object.fromEntries(formData.entries()));
           const json = JSON.stringify(Object.fromEntries(formData));

           postData("http://localhost:3000/request", json)
               .then((data) => {
                   console.log(data);
                   showThanksModal(msg.success);
                   statusMessage.remove();
               })
               .catch(() => {
                   showThanksModal(msg.fail);
               })
               .finally(() => {
                   formEl.reset();
               });
       });
   }