// function to set a given theme/color-scheme
function setTheme(themeName) {
    localStorage.setItem('theme', themeName);
    document.documentElement.className = themeName;
}

// function to toggle between light and dark theme
function toggleTheme() {
    if (localStorage.getItem('theme') === 'theme-dark') {
        setTheme('theme-dark');
    } else {
        setTheme('theme-light');
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
const wipemenu = document.querySelectorAll('div.menus ul li a');
console.log(wipemenu);
Array.from(wipemenu).forEach(e=>{
    console.log(e)
    e.addEventListener("click",function(e){
        listMenu.style.display = "none";
        closeMenu.style.display  = 'none'
        openMenu.style.display  = 'block'
    })
})
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








//Get the button
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


