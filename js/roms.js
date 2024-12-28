window.onload = function () {
  let dontShowAgain = localStorage.getItem("dontShowModal");
  if (dontShowAgain === null || dontShowAgain === "") {
    setTimeout(function () {
      let modal = document.getElementById("myModal");
      modal.style.display = "block";
    }, 500);}setTimeout(function () {
    showButtons();}, 2000);
  adjustButtonText();};
function showButtons() {
  let buttons = document.querySelectorAll(".button");
  for (let i = 0; i < buttons.length; i++) {
    let button = buttons[i];
    button.style.opacity = "1";
    button.style.animationDelay = (i * 0.2) + "s";
    button.style.animation = "fadeInButton 1s ease-in-out forwards";}}
function adjustButtonText() {
  let buttons = document.querySelectorAll(".button");
  for (let i = 0; i < buttons.length; i++) {
    let button = buttons[i];
    let paragraph = button.querySelector("p");
    let containerHeight = button.clientHeight * 0.25;
    let fontSize = parseFloat(window.getComputedStyle(paragraph).fontSize);
    while (paragraph.scrollHeight > containerHeight) {
      if (fontSize <= 10) {
        break;}
      fontSize = fontSize - 1;
      paragraph.style.fontSize = fontSize + "px";}}}
function closeModal() {
  let dontShowCheckbox = document.getElementById("dontShowAgain");
  if (dontShowCheckbox != null && dontShowCheckbox.checked === true) {
    localStorage.setItem("dontShowModal", "true");}
  let modal = document.getElementById("myModal");
  modal.style.display = "none";}
window.onclick = function (event) {
  let modal = document.getElementById("myModal");
  if (event.target === modal) {
    closeModal();}};
document.addEventListener('contextmenu', function(e) {
  e.preventDefault();}, false);axios.get('https://examples.http-client.intellij.net/get', {
  headers: {
    'Cross-Origin-Opener-Policy': 'same-origin',
    'Cross-Origin-Embedder-Policy': 'require-corp'
  }
})
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error('Error:', error);
  });


