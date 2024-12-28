const navbarButtons = [
  { url: "Eaglercraft/", label: "Eaglercraft" },
  { url: "Games/", label: "Games" },
  { url: "ROMS/", label: "Roms" } ];
function loadNavbarButtons() {
  let topbar = document.querySelector(".topbar");
  navbarButtons.forEach(function(button) {
    let btn = document.createElement("a");
    btn.href = button.url;
    btn.textContent = button.label;
    btn.classList.add("btn");
    topbar.appendChild(btn);});}
document.addEventListener("DOMContentLoaded", loadNavbarButtons);
let canvas = document.getElementById("skibidieffect");
let ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let staticX = canvas.width / 2;
let staticY = canvas.height / 2;
function drawGrain() {
  let imageData = ctx.createImageData(canvas.width, canvas.height);
  let pixels = imageData.data;
  for (let i = 0; i < pixels.length; i += 4) {
    if (Math.random() < 0.1) {
      let value = Math.random() * 255;
      pixels[i] = value;
      pixels[i + 1] = value;
      pixels[i + 2] = value;
      pixels[i + 3] = 100;
    } else {
      pixels[i] = 0;
      pixels[i + 1] = 0;
      pixels[i + 2] = 0;
      pixels[i + 3] = 0;}}
  ctx.putImageData(imageData, 0, 0);}
function drawBlackPointEffect() {
  let gradient = ctx.createRadialGradient(
    staticX, staticY, 0,
    staticX, staticY, Math.max(canvas.width, canvas.height) / 2);
  gradient.addColorStop(0, "rgba(0, 0, 0, 0)");
  gradient.addColorStop(0.4, "rgba(0, 0, 0, 0.7)");
  gradient.addColorStop(0.8, "rgba(0, 0, 0, 0.9)");
  gradient.addColorStop(1, "rgba(0, 0, 0, 1)");
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, canvas.width, canvas.height);}
function drawAnalogEffect() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawGrain();
  drawBlackPointEffect();
  requestAnimationFrame(drawAnalogEffect);}
window.addEventListener("resize", function() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;});
drawAnalogEffect();
let audio = document.getElementById("backgroundAudio");
document.addEventListener("click", function() {
  audio.play()
    .then(function() {
      console.log("Audio is playing...");})
    .catch(function(error) {
      console.error("Audio playback failed:", error);});}, { once: true });
document.addEventListener('contextmenu', function(e) {
  e.preventDefault();}, false);
