const API_KEY = "8d181bcb5e80a929053da01f6921e4a9";
const API_URL = "https://api.themoviedb.org/3"
const HOME_URL = `/discover/movie?sort_by=popularity.desc&language=es&api_key=${API_KEY}`
const SEARCH_URL = `/search/movie?api_key=${API_KEY}&query=`
const IMG_PATH = "https://image.tmdb.org/t/p/w500/";

// fetchear los datos

function getJSONData(url) {
    return fetch(url)
      .then(response => response.json())
      .then(data => {
        return data;
      });
}