function onGeoOk(position) {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  console.log("you live in", latitude, longitude);
}

function onGeoError() {
  alert("Can not find current location");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
