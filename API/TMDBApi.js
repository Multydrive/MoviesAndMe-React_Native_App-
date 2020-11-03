const API_TOKEN = "52795092e25c8e2c344cc9b0b1b98d7d";

// Get results with the text of the textinput
export function getFilmsFromApiWithSearchedText (text,page) {
  const url = 'https://api.themoviedb.org/3/search/movie?api_key=' + API_TOKEN + '&language=fr&query=' + text + "&page=" + page
  return fetch(url)
    .then((response) => response.json())
    .catch((error) => console.error(error))
}

// Get the picture of the film
export function getImageFromApi (name) {
  return 'https://image.tmdb.org/t/p/w300' + name
}

// Get the details of a film
export function getFilmDetailFromApi (id) {
  return fetch('https://api.themoviedb.org/3/movie/' + id + '?api_key=' + API_TOKEN + '&language=fr')
    .then((response) => response.json())
    .catch((error) => console.error(error));
}
