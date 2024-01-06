const showImgButton = document.querySelector('#showImg');
const hideImgButton = document.querySelector('#hideImg');
const showOrHide = document.querySelector('#showAndHide');
const image = document.querySelector('#gruMeme');

const imageStyle = window.getComputedStyle(image);
const hideBtnStyle = window.getComputedStyle(hideImgButton);

showImgButton.addEventListener('click', () => {

  hideImgButton.style.display = "block";
  image.style.visibility = "visible";
});

hideImgButton.addEventListener('click', () => {

  hideImgButton.style.display = "none";
  image.style.visibility = "hidden";
});

showOrHide.addEventListener('click', () => {

  if (imageStyle.visibility == "hidden") {

    hideImgButton.style.display = "block";
    image.style.visibility = "visible";
  }
  else if (imageStyle.visibility == "visible") {

    hideImgButton.style.display = "none";
    image.style.visibility = "hidden";
  }
});