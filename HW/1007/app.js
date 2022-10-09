let day = "";
let weather = "";

function dayWeather() {
  if (day !== "" && weather !== "") {
    const text = document.querySelector(".text");
    text.innerHTML = `날씨가 <strong>${weather}</strong>인 <strong>${day}요일</strong> 이네요!`;

    if (weather === "맑음") {
      document.body.style.backgroundColor = "skyblue";
    } else if (weather === "흐림") {
      document.body.style.backgroundColor = "lightgray";
    } else if (weather === "비옴") {
      document.body.style.backgroundColor = "gray";
    }
  }
}

const week = document.querySelectorAll(".week");

week.forEach((elm) => {
  elm.addEventListener("click", () => {
    day = elm.innerText;
    dayWeather();
  });
});

const weat = document.querySelectorAll(".weather");

weat.forEach((elm) => {
  elm.addEventListener("click", () => {
    weather = elm.innerText;
    dayWeather();
  });
});
