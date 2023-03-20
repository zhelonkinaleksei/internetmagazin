new Swiper(".swiper",{
    navigation:{
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    loop:true,
    
    autoplay:{
        delay:5000,

    },
    pagination:{
        el: '.swiper-pagination',

        clickable:true,
        
    },

});