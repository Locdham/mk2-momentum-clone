//
// const loginForm = document.getElementById("loginForm");
// const loginInput = loginForm.querySelector("input");
// const loginButton = loginForm.querySelector("button");

// 위의 코드를 좀더 짧게 작성하자면..
const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");

// click event 적용할 것인데.. login button 과 연결할것임
// 매번 loginInput.value 을 적는대신에 변수를 만들어준다

function onLoginBtnClick() {
  //console.log("hello", loginInput.value);
  const username = loginInput.value;
  // if (username === "") {
  //   alert("Please write your name!");
  // } else if (username.length > 15) {
  //   alert("username is too long");
  // }
  console.log(username);
}

loginButton.addEventListener("click", onLoginBtnClick);
