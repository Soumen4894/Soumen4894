const input = document.querySelector("#input");
const city = document.querySelector("#city");

const cityName = document.querySelector("#cityName");
const Temp = document.querySelector("#temp");
const weather = document.querySelector("#weather");

input.onsubmit = (e) => {
  e.preventDefault();
  weatherUpdate(city.value);
  city.value = "";
};

weatherUpdate = (city) => {
  const xhr = new XMLHttpRequest();
  xhr.open(
    "GET",
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=05ee5a021177b1edf17f47d21106ea74`);

  xhr.send();
  xhr.onload = () => {
    if (xhr.status === 404) {
      alert("Please Enter a Valid city !");
    } else {
      var data = JSON.parse(xhr.response);
      cityName.innerHTML = data.name;
      Temp.innerHTML = `${Math.round(data.main.temp - 273.15)}°C`;
      weather.innerHTML = data.weather[0].main;
    }
  };
};
btn.onclick = function () {
  var images = ['Images1.jpg', 'Images2.jpg', 'Images3.jpg'];
  var image = images[Math.floor(Math.random() * images.length)];
  document.getElementsByTagName('body')[0].style.backgroundImage = "url('" + image + "')";
  document.getElementsByTagName('body')[0].style.backgroundRepeat = "no-repeat";
  document.getElementsByTagName('body')[0].style.backgroundSize = "cover";
}
