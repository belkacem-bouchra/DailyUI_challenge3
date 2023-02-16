// let galleryContainer = document.getElementById('gallery-container'),
//     galleryItems = Array.from(document.querySelectorAll('.gallery-container .gallery-item'));

// for (i = 0; i < galleryItems.length; i++) {
//     galleryItems[i].setAttribute('data-index', i + 1);
// }

// // create element for lightbox

// let lightBoxContainer = document.createElement('div'),
//     lightBoxContent = document.createElement('div'),
//     lightBoxImage = document.createElement('img'),
//     lightClose = document.createElement('div'),
//     lightBoxPrev = document.createElement('div'),
//     lightBoxNext = document.createElement('div');

// lightBoxContainer.classList.add('lightbox');
// lightBoxContent.classList.add('lightbox-content');
// lightClose.classList.add('fa-solid', 'fa-xmark', 'lightbox-close');
// lightBoxPrev.classList.add('fa-solid', 'fa-arrow-left', 'lightbox-prev');
// lightBoxNext.classList.add('fa-solid', 'fa-arrow-right', 'lightbox-next');

// lightBoxContent.appendChild(lightBoxImage);
// lightBoxContent.appendChild(lightClose);
// lightBoxContent.appendChild(lightBoxPrev);
// lightBoxContent.appendChild(lightBoxNext);

// lightBoxContainer.appendChild(lightBoxContent);

// document.body.appendChild(lightBoxContainer);

// /** */

// let index = 1;

// function showLightbox(n) {
//     if (n > galleryItems.length) {
//         index = 1;
//     } else if (n < 1) {
//         index = galleryItems.length;
//     }

//     let imageLocation = galleryItems[index - 1].children[0].getAttribute('src');
//     lightBoxImage.setAttribute('src', imageLocation);
// }
// function currentImage() {
//     lightBoxContainer.style.display = "grid";
//     lightBoxContainer.style.placeItems = "center";
//     let imageIndex = parseInt(this.getAttribute('data-index'));
//     showLightbox(index = imageIndex);
// }

// for (i = 0; i < galleryItems.length; i++) {
//     galleryItems[i].addEventListener('click', currentImage);
// }

// function sliderImage(n) {
//     showLightbox(index += n);
// }
// function prevImage(n) {
//     sliderImage(-1);
// }
// function nextImage(n) {
//     sliderImage(1);
// }

// lightBoxPrev.addEventListener('click', prevImage);
// lightBoxNext.addEventListener('click', nextImage);

// // close lightbox

// function closeLightbox() {
//     if (this === event.target) {
//         lightBoxContainer.style.display = 'none'
//     }
// }

// lightBoxContainer.addEventListener('click', closeLightbox);
// lightClose.addEventListener('click', closeLightbox);

