//손흥민 오브젝트 만들기
const player = {
  name: "Son",
  team: "Tottenham",
  foot: "both",
  speed: 100,
  handsome: true,
};

console.log(player);
console.log(player.name);

//오브젝트 업데이트
player.speed = 200;
player.backnumber = "7";

console.log(player);

player.speed = player.speed + 50;

console.log(player.speed);
