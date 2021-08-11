// function to set a given theme/color-scheme
function setTheme(themeName) {
    localStorage.setItem('theme', themeName);
    document.documentElement.className = themeName;
}

// function to toggle between light and dark theme
function toggleTheme() {
    if (localStorage.getItem('theme') === 'theme-dark') {
        setTheme('theme-light');
    } else {
        setTheme('theme-dark');
    }
}

// Immediately invoked function to set the theme on initial load
(function () {
    if (localStorage.getItem('theme') === 'theme-dark') {
        setTheme('theme-dark');
    } else {
        setTheme('theme-light');
    }
})();


// swiper demo`

var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
        rotate: 20,
        stretch: 20,
        depth: 50,
        modifier: 4,
        slideShadows: true,
    },
    spaceBetween: 20,
        centeredSlides: true,
        autoplay: {
          delay: 2500,
          disableOnInteraction: true,
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
   
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});


const listMenu = document.querySelector('div.menus ul');
const openMenu = document.getElementById('open-menu');
const closeMenu = document.getElementById('close-menu');

openMenu.addEventListener("click",function(e){
    listMenu.style.display = "block";
    closeMenu.style.display  = 'block'
    openMenu.style.display  = 'none'
})

closeMenu.addEventListener("click",function(e){
    listMenu.style.display = "none";
    closeMenu.style.display  = 'none'
    openMenu.style.display  = 'block'
})