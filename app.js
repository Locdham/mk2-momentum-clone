// 음주가능 나이 알려주는 계산기 만들기

//유저의 나이를 묻는것으로 시작해보자
const age = parseInt(prompt("너 몇살이야?"));

if (isNaN(age) || age < 0) {
  console.log("올바른 숫자를 입력하시오");
} else if (age < 18) {
  console.log("술을 마시기엔 너무 어립니다.");
} else if (age >= 18 && age <= 50) {
  console.log("당신은 술을 마실수 있습니다.");
} else if (age > 50 && age <= 80) {
  console.log("당신은 운동이 필요합니다.");
} else if (age === 100) {
  console.log("당신은 현명하신것 같군요");
} else if (age > 80) {
  console.log("술을 자제 하세요");
}
