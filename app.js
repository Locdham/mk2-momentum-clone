//Events -이벤트 listen-

const h1 = document.querySelector("div.hello:first-child h1");

function handleTitleClick() {
  h1.style.color = "blue";
}

function handleMouseEnter() {
  h1.innerText = "Mouse is here";
}

function handleMouseLeave() {
  h1.innerText = "Mouse is gone";
}

function handleWinddowResize() {
  document.body.style.backgroundColor = "tomato";
}

function handleWindowCopy() {
  alert("copier!");
}

function handleWindowOffline() {
  alert("sos I need wifi");
}

function handleWindowOnline() {
  alert("You have wifi");
}

h1.addEventListener("click", handleTitleClick);
h1.addEventListener("mouseenter", handleMouseEnter);
h1.addEventListener("mouseleave", handleMouseLeave);

window.addEventListener("resize", handleWinddowResize);
window.addEventListener("copy", handleWindowCopy);
window.addEventListener("offline", handleWindowOffline);
window.addEventListener("online", handleWindowOnline);
