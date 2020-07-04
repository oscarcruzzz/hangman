import "../styles/main.css";
import { randomCountry } from "./countries";

const name = document.getElementById("name");
const button = document.getElementById("button");
const movie_api_key = "70f79402b06d82129f61aeb55a1a2a97";

const showButton = () => {
  if (name.value != "") {
    button.classList.add("show-button");
  } else {
    button.classList.remove("show-button");
  }
};
name.addEventListener("focusout", showButton);

const movies = async () => {
  let movie_id = Math.round(Math.random() * 10000);
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${movie_id}?api_key=${movie_api_key}&language=es-MX`
  );
  const json = await response.json();
  const movie = Object.entries(json);
  const movie_title = movie[9][1];
  createLines(movie_title);
};

const countryName = async () => {
  const random_country = randomCountry();
  const response = await fetch(
    `https://restcountries.eu/rest/v2/name/${random_country}`
  );
  const json = await response.json();
  const country = Object.entries(json);
  const country_name = country[0][1]["name"];
  createLines(country_name);
};

const createLines = (movie_title) => {
  for (let i = 1; i <= movie_title.length; i++) {
    console.log(i);
  }
};
