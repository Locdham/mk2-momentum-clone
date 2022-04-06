// click 감지는 필요없으니 submit을 감지

const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");

// function onLoginSubmit(toamto) {
//   toamto.preventDefault();
//   console.log(toamto);
// }

//브라우저가 기본동작을 실행하지 못하게 막아줌
function onLoginSubmit(event) {
  event.preventDefault();
  console.log(loginInput.value);
}

loginForm.addEventListener("submit", onLoginSubmit);
