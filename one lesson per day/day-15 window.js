console.log(window.location);

const closeWindow = document.querySelector('#closeWindow');
const openNewWindow = document.querySelector('#openNewPage');

closeWindow.addEventListener('click', () => {
  const closeCheck = window.confirm("You're about to leave this page\nAre you sure you want to do so")
  if (closeCheck) {
    window.close();
  }
});


openNewWindow.addEventListener('click', () => {
  window.open("https://www.youtube.com");
});