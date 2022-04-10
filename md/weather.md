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
- 다음영상에서..

- API 계정 열기
- https://openweathermap.org/ 사이트 이동한 후에
- 계정생성
- API 찾기
