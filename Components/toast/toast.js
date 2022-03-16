const toastExample = document.querySelector("#toast-example-success");
const btnToShowToast = document.querySelector(".show-toast-example-btn");


let timerIdForToast;
btnToShowToast.addEventListener("click", ()=>{
    toastExample.style.display = "block";
    timerIdForToast = setTimeout(()=>{
        toastExample.style.display = "none";  
    },2000)
})
