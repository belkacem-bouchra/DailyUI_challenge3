let fullBody = document.querySelector('body'),
    headerContainer = document.querySelector('.header .container');

let whiteLogo = document.getElementById('white-logo'),
    blackLogo = document.getElementById('black-logo');

let navLinks = Array.from(document.querySelectorAll('nav ul li a'));

window.onload = function () {
    window.scrollTo(0, 0);
}

var currentNav = 0;

let bars = document.querySelector('.fa-bars'),
    xmark = document.querySelector('.fa-xmark'),
    burger = document.querySelector('.burger'),
    navMenu = document.querySelector('nav');

let textArea = document.querySelector('.about .text');

for (i = 0; i < navLinks.length; i++) {
    navLinks[i].setAttribute('nav-index', i);
}

for (i = 0; i < navLinks.length; i++) {
    navLinks[i].onclick = function () {
        currentNav = parseInt(this.getAttribute('nav-index'));
        navCheck();
        console.log('current nav =' + currentNav)
    }
}

function navCheck() {
    removeActiveNav();
    navLinks[currentNav].classList.add('active-nav');
    navMenu.style.right = '-80%';
    xmark.classList.add('hide');
    bars.classList.remove('hide');
    burger.classList.remove('click');
}

navCheck();

function removeActiveNav() {
    navLinks.forEach(function (nav) {
        nav.classList.remove('active-nav');
    })
}
// Toggling burger icons


bars.addEventListener('click', function () {
    toggleIcons();
    navMenu.style.right = '0';
    // textArea.style.zIndex = '2';
});

xmark.addEventListener('click', function () {
    toggleIcons();
    navMenu.style.right = '-80%';
    // textArea.style.zIndex = '3';+
});

function toggleIcons() {
    bars.classList.toggle('hide');
    xmark.classList.toggle('hide');
    burger.classList.toggle('click');
}

// Landing slider

let slide = Array.from(document.querySelectorAll('.slider img')),
    nbrSlide = slide.length;
var currentSlide;

for (i = 0; i < nbrSlide; i++) {
    slide[i].setAttribute('data-index', i);
    currentSlide = parseInt(slide[i].getAttribute('data-index'));
    checker();
}

function checker() {
    removeAllCurrent();
    slide[currentSlide].classList.add('current');
}

checker();

function removeAllCurrent() {
    slide.forEach(function (img) {
        img.classList.remove('current');
    });
}

setInterval(function () {
    currentSlide++;
    if (currentSlide >= nbrSlide) {
        currentSlide = 0;
    }
    checker();
}, 5000)

/* Full screen video */

let fullScreen = document.getElementById('full-screen'),
    playIcon = document.getElementById('play-icon'),
    stopIcon = document.getElementById('stop-icon'),
    fullVideo = document.getElementById('full-video');

playIcon.addEventListener('click', function () {
    fullScreen.style.display = 'flex';
    fullVideo.play();
})

fullScreen.addEventListener('click', function () {
    fullScreen.style.display = 'none';
    fullVideo.pause();
})

stopIcon.addEventListener('click', function () {
    fullScreen.style.display = 'none';
    fullVideo.pause();

})


/* Change menu content */

let menuList = Array.from(document.querySelectorAll('.menu-list li')),
    foodContainer = document.getElementById('food-container'),
    menuFood = Array.from(document.querySelectorAll('.menu-food')),
    menuListNbr = menuList.length,
    menuFoodNbr = menuFood.length,
    currentMenu = 1;
for (i = 0; i < menuListNbr; i++) {
    menuList[i].setAttribute('menu-index', i + 1)
}

for (i = 0; i < menuListNbr; i++) {
    menuList[i].addEventListener('click', function () {
        currentMenu = parseInt(this.getAttribute('menu-index'));
        menuCheck();
    })
}

function menuCheck() {
    removeMenuList();
    removeVisibleBox();
    menuList[currentMenu - 1].classList.add('active-link');
    menuFood[currentMenu - 1].classList.add('visible-box');
}

menuCheck();

function removeMenuList() {
    menuList.forEach(function (li) {
        li.classList.remove('active-link');
    })
}

function removeVisibleBox() {
    menuFood.forEach(function (food) {
        food.classList.remove('visible-box');
    })
}

/* Full screen gallery */

let galleryContainer = document.getElementById('gallery-container'),
    galleryItems = Array.from(document.querySelectorAll('.gallery-container .gallery-item'));

for (i = 0; i < galleryItems.length; i++) {
    galleryItems[i].setAttribute('data-index', i + 1);
}

// create element for lightbox

let lightBoxContainer = document.createElement('div'),
    lightBoxContent = document.createElement('div'),
    lightBoxImage = document.createElement('img'),
    lightBoxClose = document.createElement('div'),
    lightBoxPrev = document.createElement('div'),
    lightBoxNext = document.createElement('div');

lightBoxContainer.classList.add('lightbox');
lightBoxContent.classList.add('lightbox-content');
lightBoxClose.classList.add('fa-solid', 'fa-xmark', 'lightbox-close');
lightBoxPrev.classList.add('fa-solid', 'fa-arrow-left', 'lightbox-prev');
lightBoxNext.classList.add('fa-solid', 'fa-arrow-right', 'lightbox-next');

lightBoxContent.appendChild(lightBoxImage);
lightBoxContent.appendChild(lightBoxClose);
lightBoxContent.appendChild(lightBoxPrev);
lightBoxContent.appendChild(lightBoxNext);

lightBoxContainer.appendChild(lightBoxContent);

document.body.appendChild(lightBoxContainer);

let index = 1;

function showLightbox(n) {
    if (n > galleryItems.length) {
        index = 1;
    } else if (n < 1) {
        index = galleryItems.length;
    }

    let imageLocation = galleryItems[index - 1].children[0].getAttribute('src');
    lightBoxImage.setAttribute('src', imageLocation);
}

function currentImage() {
    lightBoxContainer.style.display = "grid";
    lightBoxContainer.style.placeItems = "center";
    let imageIndex = parseInt(this.getAttribute('data-index'));
    showLightbox(index = imageIndex);
}

for (i = 0; i < galleryItems.length; i++) {
    galleryItems[i].addEventListener('click', currentImage);
}

function sliderImage(n) {
    showLightbox(index += n);
}

function prevImage(n) {
    sliderImage(-1);
}

function nextImage(n) {
    sliderImage(1);
}

function hideLightBox() {
    lightBoxContainer.style.display = "none";
}

lightBoxClose.addEventListener('click', hideLightBox);
lightBoxPrev.addEventListener('click', prevImage);
lightBoxNext.addEventListener('click', nextImage);

/* Functions onscrolling */

fullBody.onscroll = function () {
    if (window.scrollY == 0) {
        headerContainer.classList.remove('scrolling');
        whiteLogo.classList.add('hide');
        blackLogo.classList.remove('hide');
        navLinks.forEach(function (link) {
            link.style.color = 'white';
        })
    }

    if (window.scrollY > 0) {
        headerContainer.classList.add('scrolling');
        whiteLogo.classList.remove('hide');
        blackLogo.classList.add('hide');
        navLinks.forEach(function (link) {
            link.style.color = 'black';
        })
    }

}
let sections = Array.from(document.querySelectorAll('.section'));



let
    homeSect = document.getElementById('home'),
    goUpButton = document.getElementById('go-up');

let homeHeight = homeSect.offsetHeight,

    homeH = homeHeight - 80;


window.addEventListener('scroll', function () {
    if (window.pageYOffset > homeH) {
        goUpButton.classList.add('appear');
        goUpButton.classList.remove('disappear');

    }
    if (window.pageYOffset == 0) {
        goUpButton.classList.add('disappear');
        goUpButton.classList.remove('appear');
    }
    var scrollPosition = document.documentElement.scrollTop;
    sections.forEach(function (sect) {
        if (scrollPosition >= sect.offsetTop - 80 && scrollPosition < sect.offsetTop + sect.offsetHeight) {
            var currentSect = sect.attributes.id.value;
            removeActiveNav();
            addActiveClasse(currentSect);
        }
    })

})

goUpButton.addEventListener('click', function () {
    window.scrollTo(0, 0)
})

var addActiveClasse = function (id) {
    var selector = `ul a[href="#${id}"]`;
    document.querySelector(selector).classList.add('active-nav');
}