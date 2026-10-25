document.querySelector("#search").addEventListener("submit", async (event) => {
  event.preventDefault();

  const cityName = document.getElementById("city-name").value;

  if (!cityName) {
    document.querySelector("#weather").classList.remove;
    showAlert("Digite a cidade que deseja buscar!");
    return;
  }

  const apiKey = "34c0b3c62858eb3d69dc0d27876c0f55";
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURI(cityName)}&appid=${apiKey}&units-metric&lang=pt_br`;

  const results = await fetch(apiUrl);
  const json = await results.json();

  if (json.cod === 200) {
    showInfo({
      city: json.name,
      country: json.sys.country,
      temp: json.main.temp / 10,
      tempMax: json.main.temp_max / 10,
      tempMin: json.main.temp_min / 10,
      description: json.weather[0].description,
      icon: json.weather[0].icon,
      wind: json.wind.speed,
      humidity: json.main.humidity,
    });
  } else {
    document.querySelector("#weather").classList.remove("show");
    showAlert(`
      Não foi possível localizar a cidade que digitou, tente novamente!

      <img src="./images/undraw_question_vqsl.svg" />
    `);
  }
});

function showInfo(json) {
  showAlert("");

  document.querySelector("#weather").classList.add("show");

  document.querySelector("#title").innerHTML = `${json.city}, ${json.country}`;
  document.querySelector("#temp-value").innerHTML =
    `${json.temp.toFixed(1).toString().replace(".", ",")} <sup>°C</sup>`;
  document.querySelector("#temp-desc").innerHTML = `${json.description}`;
  document
    .querySelector("#temp-img")
    .setAttribute(
      "src",
      `https://openweathermap.org/payload/api/media/file/${json.icon}.png`,
    );
  document.querySelector("#temp-max").innerHTML =
    `${json.tempMax.toFixed(1).toString().replace(".", ",")} <sup>°C</sup>`;
  document.querySelector("#temp-min").innerHTML =
    `${json.tempMin.toFixed(1).toString().replace(".", ",")} <sup>°C</sup>`;
  document.querySelector("#humidity").innerHTML = `${json.humidity}%`;
  document.querySelector("#wind").innerHTML = `${json.wind.toFixed(1)}km/h`;
}

function showAlert(msg) {
  document.querySelector("#alert").innerHTML = msg;
}
