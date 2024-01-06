const showImgButton = document.querySelector('#showImg');
const hideImgButton = document.querySelector('#hideImg');
const image = document.querySelector('#gruMeme');

showImgButton.addEventListener('click', () => {

  image.style.display = "block";
  hideImgButton.style.visibility = "visible";
});

hideImgButton.addEventListener('click', () => {

  image.style.display = "none";
  hideImgButton.style.visibility = "hidden";
});