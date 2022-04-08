const clock = document.querySelector("h2#clock");

function sayhello() {
  console.log("hello");
}
//이함수를 매2초마다 실행시키려면?...
setInterval(sayhello, 5000);
