//Events -이벤트 listen-

const h1 = document.querySelector("div.hello:first-child h1");

// 클릭시 컬러 변경 블루 - 레드

// function handleWindowClick() {
//   const clickedClass = "clicked";
//   if (h1.className === clickedClass) {
//     h1.className = "";
//   } else {
//     h1.className = clickedClass;
//   }
// }

// function handleWindowClick() {
//   const clickedClass = "clicked";
//   if (h1.classList.contains(clickedClass)) {
//     h1.classList.remove(clickedClass);
//   } else {
//     h1.classList.add(clickedClass);
//   }
// }

function handleWindowClicked() {
  h1.classList.toggle("clicked");
}

h1.addEventListener("click", handleWindowClicked);
