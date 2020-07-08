import "../styles/main.css";
import { randomCountry } from "./countries";
import {
  gameHeaderEasy,
  gameHeaderMedium,
  gameHeaderHard,
  gameMainView,
} from "./fragments";

const name = document.getElementById("name");
const button = document.getElementById("button");
const movie_api_key = "70f79402b06d82129f61aeb55a1a2a97";
const main_container = document.getElementById("main-container");
const top_container = document.getElementById("top-container");
const theme = document.getElementById("theme");
const level = document.getElementsByName("level");

let game_main_view = gameMainView();
let game_header_easy = gameHeaderEasy(name.value);
let game_header_medium = gameHeaderMedium(name.value);
let game_header_hard = gameHeaderHard(name.value);

const showButton = () => {
  if (name.value != "") {
    button.classList.add("show-button");
  } else {
    button.classList.remove("show-button");
  }
};
name.addEventListener("focusout", showButton);

const getMovie = async () => {
  let movie_id = Math.round(Math.random() * 10000);
  let response = await fetch(
    `https://api.themoviedb.org/3/movie/${movie_id}?api_key=${movie_api_key}&language=es-MX`
  );
  let json = await response.json();
  let movie = Object.entries(json);
  let movie_title = movie[9][1];
  createLines(movie_title);
};

const getCountry = async () => {
  let random_country = randomCountry();
  let response = await fetch(
    `https://restcountries.eu/rest/v2/name/${random_country}`
  );
  let json = await response.json();
  let country = Object.entries(json);
  let country_name = country[0][1]["name"];
  createLines(country_name);
};
const startTimer = (duration, display) => {
  let timer = duration,
    minutes,
    seconds;
  setInterval(() => {
    minutes = parseInt(timer / 60, 10);
    seconds = parseInt(timer % 60, 10);

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    display.textContent = minutes + ":" + seconds;

    if (--timer < 0) {
      timer = duration;
    }
  }, 1000);
};

const setTimeOut = (time) => {
  let minutes = 60 * time,
    display = document.getElementById("time-counter");
  startTimer(minutes, display);
};
const gameView = () => {
  for (let i = 0, length = level.length; i < length; i++) {
    if (level[i].checked) {
      var game_level = level[i].value;
      break;
    }
  }
  switch (game_level) {
    case "easy":
      top_container.innerHTML = game_header_easy;
      break;
    case "medium":
      top_container.innerHTML = game_header_medium;
      setTimeOut(2);
      break;
    case "hard":
      top_container.innerHTML = game_header_hard;
      setTimeOut(1);
      break;
  }
  switch (theme.value) {
    case "countries":
      getCountry();
      break;
    case "movies":
      getMovie();
      break;
  }
  main_container.innerHTML = game_main_view;
};

button.addEventListener("click", gameView);

const createLines = (leters) => {
  for (let i = 1; i <= letters.length; i++) {
    console.log(i);
  }
};
