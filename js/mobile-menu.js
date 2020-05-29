// Mobile Menu Hide on scolling down - show on scrolling up
let scroll = window.pageYOffset;

window.onscroll = function () {
    const currentScroll = window.pageYOffset;

    if (scroll > currentScroll) {
        document.querySelector(".nav").style.bottom = "0";
    } else {
        document.querySelector(".nav").style.bottom = "-100px";
    }

    scroll = currentScroll;
}