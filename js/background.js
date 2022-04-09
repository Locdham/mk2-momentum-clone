//이미지 array 만들기
const iamges = ["0.jpg", "1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg"];

//랜덤 이미지의 함수 만들기
const choiceImage = iamges[Math.floor(Math.random() * iamges.length)];

//콘솔.로그로 랜덤픽 되는지 테스트
// console.log(choiceImage);

//HTML에 이미지 추가하기
const bgImage = document.createElement("img");

//콘솔.로그 확인
// console.log(bgImage);  <img> 출력

bgImage.src = `img/${choiceImage}`;

//콘솔.로그 확인
// console.log(bgImage);  <img src="img/3.jpg"> 랜덤으로 출력, 요소를 만들어냄

//JS로 만든 이미지랜덤 요소를 body에 추가하기
document.body.appendChild(bgImage);
