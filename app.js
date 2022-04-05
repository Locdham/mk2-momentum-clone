//Events -이벤트 listen-

const h1 = document.querySelector("div.hello:first-child h1");

// 클릭시 컬러 변경 블루 - 레드
function handleTitleClick() {
  const currentColor = h1.style.color; //getter
  let newColor;
  if (currentColor === "blue") {
    newColor = "tomato";
  } else {
    newColor = "blue";
  }
  h1.style.color = newColor; //setter
}

h1.addEventListener("click", handleTitleClick);
