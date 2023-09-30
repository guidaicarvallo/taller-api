let listaPelis = [];

// función que muestra peliculas más populares en HOME
function showCasita(array) {
  let htmlContentToAppend = '<div class="row row-cols-2 row-cols-md-5">';

  array.forEach(movie => {
    htmlContentToAppend += `
      <div class="col mb-4">
        <div class="card" data-movie-id="${movie.id}">
          <a href="#"></a>
          <img src="${IMG_PATH}${movie.poster_path}" class="card-img-top" alt="poster-película">
          <div class="card-body text-center">
            <h5 class="card-title text-center">${movie.title}</h5>
          </div>
        </div>
        </a>
      </div>
    `;
  });

  htmlContentToAppend += '</div>';

  document.getElementById("casita").innerHTML += htmlContentToAppend;
}

// evento para funcionamiento del buscador
document.getElementById("searchForm").addEventListener("submit", function(event) {
  event.preventDefault();

  const searchTerm = document.getElementById("navBusqueda").value.trim();

  if (searchTerm !== '') {
    fetch(`${API_URL}${SEARCH_URL}${encodeURIComponent(searchTerm)}`)
    .then(response => response.json())
    .then(data => {
      const pelis = data.results;
      let listaPelis = [];
      const busquedaExacta = pelis.filter(peli => peli.title.includes(searchTerm));

      if (busquedaExacta.length > 0) {
        listaPelis = busquedaExacta;
      } else {
        listaPelis = pelis;
      }
      document.getElementById("casita").innerHTML = `<h3>RESULTADOS DE "${searchTerm.toUpperCase()}"</h3>`
      showCasita(listaPelis)
      console.log(listaPelis)
    })
  }
});


document.addEventListener("DOMContentLoaded", function(e) {
  const peliculasURL = `${API_URL}${HOME_URL}`;

  getJSONData(peliculasURL)
    .then(data => {
      const results = data.results; 
      document.getElementById("casita").innerHTML = "<h3>POPULAR RECIENTEMENTE</h3>"
      showCasita(results);
      listaPelis = results;

  });
});