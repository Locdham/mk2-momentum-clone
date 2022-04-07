const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");

const link = document.querySelector("a");

//브라우저가 기본동작을 실행하지 못하게 막아줌
function onLoginSubmit(event) {
  event.preventDefault();
  console.log(loginInput.value);
}

function handelLinkClick(event) {
  event.preventDefault();
  console.dir(event);
}

loginForm.addEventListener("submit", onLoginSubmit);
link.addEventListener("click", handelLinkClick);
