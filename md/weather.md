# 8. Weather

# 8.0 Geolocation

```js
navigator.geolocation.getCurrentPosition();
```

- 호출하면 브라우저에서 위치좌표를 줄것이야
- 두개의 argument 인자가 필요하다
- 첫번째, 모든게 잘됐을때 실행될 함수
- 두번째, 에러가 났을때 실행될 함수

- 첫째, 현재 위치의 위도와 경도를 알아내자

```js
function onGeoOk(position) {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  console.log("you live in", latitude, longitude);
}
```

- 두번재, 위도/경도 숫자를 장소로 바꿔줄 서비스를 사용하자

# 8.1 Weather API

- API 계정 열기
- https://openweathermap.org/ 사이트 이동한 후에
- 계정생성
- API 찾기
- 브라우저에서 위 주소로 엔터를 치면 현재위치 날씨정보를 알려줌
- api-key를 선언해서 key를 넣자
- 이제부터 url을 부를는 방법을 알아보자 js에서
- url 변수를 만들고 ``백틱으로 감싸자

- url 변수로 만들시, lat, lon, api_key 3개값은 반드시 있어야한다

```js
https://api.openweathermap.org/data/2.5/weather?lat=37.4988&lon=126.7824&appid=1fa0cfe4dd95fafefb3480dca50d2cf5

const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`;

console.log(url);
//콘솔에서 url 확인후 사이트 이동되는지 안되는지 확인 필요
```

- fetch(url)를 이용하여 url을 열자
- js에서 fetch를 사용하여 url을 요청해서 현재위치 날씨정보를 가져온다
- 온도를 섭씨로 바꾸자
- url 끝부분에 &units=metric 을 추가해주자

```js
const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
```

- fetch(url) 로 요청하고 정보를 받았으면 js에 알려줘야지
- fetch는 promise(약속) 이다. 당장 일어나지않고 시간이좀 걸린뒤에 일어난다
- 서버가 응답시간이 5분이라 가정하면, 서버의 응답을 기다려야 하기에 then 을 사용해라

```js
fetch(url).then(response => response.json());
```

- 현재 위치정보를 추출했으면 data를 얻을것이다

```js
fetch(url).then(response => response.json()).then(data => {
  console.log(json 데이터 내부 데이터 좌표 )
});
```

- json 데이터 내부

```js
{coord: {lon: 126.7753, lat: 37.5025},…}
base: "stations"
clouds: {all: 45}
cod: 200
coord: {lon: 126.7753, lat: 37.5025}
dt: 1649607178
id: 1838716
main: {temp: 286.09, feels_like: 285.14, temp_min: 286.05, temp_max: 286.09, pressure: 1017, humidity: 65,…}
name: "Bucheon-si"
sys: {type: 1, id: 8093, country: "KR", sunrise: 1649624658, sunset: 1649671404}
timezone: 32400
visibility: 10000
weather: [{id: 802, main: "Clouds", description: "scattered clouds", icon: "03n"}]
wind: {speed: 0.87, deg: 93, gust: 0.89}
```
