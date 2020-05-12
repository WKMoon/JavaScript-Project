async function axiosData() {
    const {data:{data: {movies}}} = await axios.get("https://yts.mx/api/v2/list_movies.json?sort_by=rating");
    const movieCollections = movies.map(movie => [movie.title, movie.year, movie.genres, movie.summary, movie.medium_cover_image]);
    movieCollections.forEach(movie => printMovie(movie));
}


function printMovie(movieCollection) {
    const body = document.querySelector("body");
    const h3 = document.createElement("h3");
    const img = document.createElement("img");
    const h4 = document.createElement("h4");
    const ul = document.createElement("ul");
    const li = document.createElement("li");
    const p = document.createElement("p");
    const div = document.createElement("div");

    h3.innerText = movieCollection[0];
    div.appendChild(h3);

    img.src = movieCollection[4];
    img.setAttribute("alt", movieCollection[0]);
    img.setAttribute("title",movieCollection[0]);
    div.appendChild(img);

    h4.innerText = movieCollection[1];
    div.appendChild(h4);

    li.innerText = movieCollection[2];
    ul.appendChild(li);
    div.appendChild(ul);

    p.innerText = `${movieCollection[3].slice(0,120)}...`;
    div.appendChild(p);
    
    body.appendChild(div);
    
}


function init(){
    axiosData();
}

init();