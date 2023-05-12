$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
    });

// typing animation

    var typed = new Typed(".typing", {
        strings: ["Web Developer","Front-end Developer","React Developer","Node.js Developer","Flutter Developer",],
        typespeed: 0.1,
        backspeed: 10,
        loop: true 
    });
    var typed = new Typed(".typing2", {
        strings: ["Web Developer","frontend Developer","React Developer","Node.js Developer","Backend Developer","Flutter developer"],
        typespeed: 0.1,
        backspeed: 10,
        loop: true 
    });
    var typed = new Typed(".typing3", {
        strings: ["Amar kumar","अमर कुमार"],
        typespeed: 10,
        backspeed: 10,
        backDelay:4000,
        typeDelay:4000,
        loop: true 
    });

    // menubar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });
});

let backdrop = document.querySelector('.backdrop');
let styleOfBackdrop = getComputedStyle(backdrop);

// function removeSideBar(){
//     $('.navbar .menu').toggleClass("active");
//     $('.menu-btn i').toggleClass("active");
//     if(backdrop.classList.contains('none')){
//         backdrop.classList.remove('none');
//         backdrop.classList.add('block');
//     }else if(backdrop.classList.contains('block')){
//         backdrop.classList.remove('block');
//         backdrop.classList.add('none');
//     }
// }

function removeSideBar(){
    console.log("responsive")
}