'use strict'
const popupButton = document.querySelector(".slidetask__left");
if (popupButton){
    const popup = document.querySelector('.popup');
    popupButton.addEventListener("click", function (e){
        popup.classList.add("_open");
     });
};

const popupCancel = document.querySelector('.popup__cancel');
  
if(popupCancel){
    popupCancel.addEventListener("click", function(e){
        popup.classList.remove("_open");
    });
}

popup.addEventListener("click", function(e){
    if(!e.target.closest(".popup__photo")) {
        popup.classList.remove("_open");
    };
})
