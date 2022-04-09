//명언 10개 array로 만들기
const quotes = [
  {
    quote: "꿈을 이루고자 하는 용기만 있다면 모든 꿈을 이룰 수 있다",
    author: "월트 디즈니",
  },
  {
    quote: "무슨 일을 하기 전에는 그 일에 대해 기대를 가져야 한다",
    author: "마이클 조던",
  },
  {
    quote:
      "남들이 할 수 있거나 하려는 일을 하지 말고 남들이 할 수 없거나 하지 않으려는 일을 하라",
    author: "아멜리아 에어하트",
  },
  {
    quote:
      "새로운 일에 도전하다 보면 가끔 실수를 저지를 수 있다. 자신의 실수를 빨리 인정하고 다른 시도에 집중하는 것이 최선이다",
    author: "스티브 잡스",
  },
  {
    quote:
      "절대로 고개를 떨구지 말라. 고개를 꼿꼿이 치켜 들고 두 눈으로 똑똑히 세상을 보라",
    author: "헬렌 켈러",
  },
  {
    quote: "승리는 가장 끈기 있는 사람에게 돌아간다",
    author: "나폴레옹",
  },
  {
    quote: "노력하는 사람에게 불가능이란 없다",
    author: "알렉산더 대왕",
  },
  {
    quote:
      "인생에서 실패한 사람의 대부분은 성공이 눈앞에 왔는데도 모르고 포기한 사람들이다",
    author: "에디슨",
  },
  {
    quote: "오늘 나무 그늘에서 쉴 수 있는 이유는 예전에 나무를 심었기 때문이다",
    author: "워렌 버핏",
  },
  {
    quote: "나약한 태도는 그 사람 자체도 나약하게 만든다",
    author: "아인슈타인",
  },
];

//명언과 작가가 위치할 span 지정
const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

//콘솔로그에 랜덤 확인하기
console.log(quotes[Math.floor(Math.random() * 10)]);

//quotes.length 로 명언의 갯수를 array의 길이만큼 자동으로 맞추기
console.log(quotes[Math.floor(Math.random() * quotes.length)]);

//랜덤명언 변수로 지정해주기
const todaysQuotes = quotes[Math.floor(Math.random() * quotes.length)];

//화면에 명언 노출 시키기
quote.innerText = todaysQuotes.quote;
author.innerText = todaysQuotes.author;
