// Get the modal
const modal = document.getElementById('myModal');
let body_modal = document.body;

//Get the image and insert it inside the modal
const image = document.querySelectorAll('article img');
const modalImg = document.getElementById('img01');

//Get the <span> element that closes the modal
const spanClose = document.getElementsByClassName('close')[0];

//Get media size, smaller than 700px, no modal images
let mobileVsScreen = window.matchMedia('(min-width: 700px)');

function ModalImagesMax() {
  if (mobileVsScreen.matches) {
    /* Looping through images */
    for (let i = 0; i <= image.length - 1; i++) {
      let actualImage = image[i];
      if (!actualImage.classList.contains('trennstrich')) {
        actualImage.classList.add('modal_possibility');
        actualImage.onclick = function () {
          body_modal.style.overflow = 'hidden';
          modal.style.display = 'block';
          modalImg.src = this.src;
          modalImg.focus();
        };
      }
    }
  }
}

function closeModalImg() {
  modal.style.display = 'none';
  body_modal.style.overflow = 'auto';
}

//Run Max Image Funtion
ModalImagesMax();
mobileVsScreen.addListener(ModalImagesMax);

// Close Modal Image
modalImg.addEventListener('click', closeModalImg);
spanClose.addEventListener('click', closeModalImg);
