
let shop_btn=document.getElementById("shop-now-btn");
let error_modal=document.querySelector(".error-modal");
let error_overlay=document.querySelector(".error-modal-overlay");

shop_btn.addEventListener("click", (e)=>{
    error_modal.classList.add('active');
    error_overlay.classList.add('active');
});

error_overlay.addEventListener("click", (e)=>{
    error_modal.classList.remove('active');
    error_overlay.classList.remove('active');
});