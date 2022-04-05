//Events -이벤트 listen-

const h1 = document.querySelector("div.hello:first-child h1");

// 클릭시 컬러 변경 블루 - 레드
// 1. h1 이벤트 리스너를 만들어준다
// 2. 이벤트 리스너의 function을 만들어준다
function handleWindowClick() {
  const clickedClass = "clicked";
  if (h1.className === clickedClass) {
    h1.className = "";
  } else {
    h1.className = clickedClass;
  }
}

h1.addEventListener("click", handleWindowClick);
