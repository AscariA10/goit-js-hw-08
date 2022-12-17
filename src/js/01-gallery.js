// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

console.log(galleryItems);

const galleryPlace = document.querySelector('.gallery');

galleryPlace.insertAdjacentHTML('afterbegin', galleryRender(galleryItems));

function galleryRender(galleryForCreate) {
   return galleryForCreate
      .map(({ original, preview, description }) => {
         return `<div class="gallery__item">
                    <a class="gallery__item" href="${original}">
                        <img class="gallery__image" src="${preview}" alt="${description}" />
                    </a>
                </div>`;
      })
      .join('');
}

var lightbox = new SimpleLightbox('.gallery a', {
   captionsData: 'alt',
   captionDelay: 250,
   captionPosition: 'bottom',
});
