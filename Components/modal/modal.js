const modalCTA = document.querySelector(".ex-modal-CTA");
const modal = document.querySelector(".ex-modal");
const modalCloseBtn = document.querySelector(".ex-modal-cl");
const modalBackBtn = document.querySelector(".ex-modal-back");

modalCTA.addEventListener("click", ()=>{
    modal.classList.add("active");
    document.body.style.overflow = "hidden"
})

modalCloseBtn.addEventListener("click", ()=>{
    modal.classList.remove("active");
    document.body.style.overflow = "visible";
})

modalBackBtn.addEventListener("click", ()=>{
    modal.classList.remove("active");
    document.body.style.overflow = "visible";
})