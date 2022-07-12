const city = document.querySelector("#city");
const weather = document.querySelector("#weather");
const temp = document.querySelector("#temp");

const API_KEY = "9d7e8d61b78f7ceb762f24f2a3f114de";

// 위도 경도 가저오는 방법.
function getGeo(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  // url 로드
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const cityName = data.name;
      const nowWeather = data.weather[0].main;
      const nowTemp = data.main.temp;
      city.innerText = cityName;
      weather.innerText = nowWeather;
      temp.innerText = nowTemp;
      console.log(city);
    });
}

function getGeoErr() {
  alert("위치 정보를 찾을 수 없습니다.");
}

// 위치정보 찾기 (getGeo, getGeoErr); 앞에는 찾았을경우 뒤에는 에러의 경우 실행할 함수
navigator.geolocation.getCurrentPosition(getGeo, getGeoErr);
