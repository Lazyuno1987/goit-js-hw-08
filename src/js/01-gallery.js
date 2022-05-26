// Add imports above this line
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);
const galeryElement = document.querySelector(".gallery");
galeryElement.insertAdjacentHTML(
  "beforeend",
  oncreateMarkUpGalery(galleryItems)
);

function oncreateMarkUpGalery(galery) {
  return galery
    .map(({ preview, original, description }) => {
      return `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`;
    })
    .join("");
}


  const lightbox = new SimpleLightbox(".gallery a", { captionsData: "alt", captionDelay: 250 });

