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
const modal = document.getElementById("help-container");
const close = document.getElementById("help-button");
const help_text = document.getElementById("help-text");

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
  let movie_id = Math.round(Math.random() * 1000);
  let response = await fetch(
    `https://api.themoviedb.org/3/movie/${movie_id}?api_key=${movie_api_key}&language=es-MX`
  );
  let json = await response.json();
  let movie_title = json.title;
  let sinopsis = json.overview;
  let year = json.release_date;
  setHelpMovie(year, sinopsis);
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
  var capital = country[0][1]["capital"];
  var region = country[0][1]["subregion"];
  setHelpCountry(capital, region);
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

const setHelpCountry = (capital, region) => {
  help_text.innerHTML = `<strong>Capital:</strong>${capital}<br><strong>Region:</strong>${region}`;
};

const setHelpMovie = (year, sinopsis) => {
  sinopsis != ""
    ? (help_text.innerHTML = `<strong>Movie Year:</strong>${year}<br><strong>Sinopsis:</strong>${sinopsis}`)
    : (help_text.innerHTML = `<strong>Movie Year:</strong>${year}<br><strong>Sinopsis:</strong> Sorry, this movie don't have sinopsis`);
};

const setScore = () => {
  score = document.getElementById("score");
  if (score.dataset.score != 0) {
    score.innerHTML = parseInt(score.dataset.score) + 1;
  } else {
    score.innerHTML = score.dataset.score;
  }
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
  main_container.innerHTML = game_main_view;
  switch (theme.value) {
    case "countries":
      getCountry();
      break;
    case "movies":
      getMovie();
      break;
  }
  setScore();
};

const createLines = (letters) => {
  const word_container = document.getElementById("word-container");
  let arr_word = letters.split("");
  console.log(arr_word);
  for (let i = 0; i < arr_word.length; i++) {
    let node = document.createElement("span");
    let textnode = document.createTextNode("_");
    let spacenode = document.createTextNode("  ");
    arr_word[i] != " "
      ? node.appendChild(textnode)
      : node.appendChild(spacenode);
    word_container.appendChild(node);
  }
};

const closeModal = () => {
  if (modal.classList.contains("modal-close")) {
    modal.classList.remove("modal-close");
    modal.classList.add("modal-open");
  } else {
    modal.classList.remove("modal-open");
    modal.classList.add("modal-close");
  }
};

button.addEventListener("click", gameView);

close.addEventListener("click", closeModal);
