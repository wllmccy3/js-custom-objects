class Movie{
    title;
    rating;
    director;
    releaseDate;
    poster;

    constructor(title, rating, director, releaseDate, poster) {
        this.title = title;
        this.rating = rating;
        this.director = director;
        this.releaseDate = releaseDate;
        this.poster = poster;
    }

    getHTML(){
        let card = document.createElement('div');
        card.classList.add('card');
        
        let titleElement = document.createElement('h3');
        titleElement.innerText = this.title;
        card.appendChild(titleElement);

        let posterElement = document.createElement('img');
        posterElement.src = this.poster;
        posterElement.alt = `Poster: ${this.title}`;
        card.appendChild(posterElement);

        let directorElement = document.createElement('p');
        directorElement.innerText = this.director;
        card.appendChild(directorElement);

        let releaseDateElement = document.createElement('span');
        releaseDateElement.innerText = this.releaseDate;
        card.appendChild(releaseDateElement);

        let ratingElement = document.createElement('span');
        ratingElement.innerText = this.rating;
        card.appendChild(ratingElement)

        return card;
    }
}

//Animated movies start here
let animatedMovies = [
    new Movie("Treasure Planet","PG","Ron Clements and John Musker", 2002,""),
    new Movie("Finding Nemo","G","Andrew Stanton and Lee Unkrich", 2003,""),
    new Movie("Atlantis: The Lost Empire","PG","Gary Trousdale and Kirk Wise", 2001,""),
    new Movie("Monsters Inc.","G","Pete Docter, David Silverman and Lee Unkrich", 2001,""),
    new Movie("Kung Fu Panda","PG","Mark Osborne and John Stevenson", 2008,""),
    new Movie("Titan A.E","PG","Don Bluth and Gary Goldman", 2000,""),
    new Movie("The Transformers: the Movie","PG","Nelson Shin", 1986,""),
    new Movie("Your Name","TV-PG","Makoto Shinkai", 2016,""),
    new Movie("Kiki's Delivery Service","G","Hayou Miyazaki", 1989,""),
    new Movie("Bee Movie","PG","Simon J. Smith and Steven Hickner", 2007,""),
    new Movie("Ponyo","G","Hayao Miyazaki", 2008,""),
    new Movie("The Last Unicorn","G","Jules Bass and Arthur Rankin Jr.", 1982,"")
];

for (let movie of animatedMovies){
    let ul = document.querySelector('ul');
    let li = document.createElement('li');
    let spanOne = document.createElement('span');
    let spanTwo = document.createElement('span');
    spanOne.innerHTML = movie.title;
    spanTwo.innerHTML = movie.director;
    spanTwo.style.float = "right";
    li.appendChild(spanOne);
    li.appendChild(spanTwo);
    ul.appendChild(li);
}

//Live Action movies start here
let liveActionMovies = [
    new Movie("Iron Man", "PG-13", "Jon Favreau", 2008, "https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_.jpg"),
    new Movie("Scott Pilgrim vs. The World", "PG-13", "Edgar Wright", 2010, "https://m.media-amazon.com/images/I/51oQ+6P1vuL._AC_.jpg"),
    new Movie("George of the Jungle", "PG", "Sam Wiseman", 1997, "https://upload.wikimedia.org/wikipedia/en/f/f8/George_Of_The_Jungle.jpg"),
    new Movie("The Mummy", "PG-13", "Steven Sommers", 1999, "https://m.media-amazon.com/images/M/MV5BOTJiYjBhZDgtMjhiOC00MTIzLThlNGMtMmI1NjIwM2M3YTI5XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg"),
    new Movie("Batman", "PG-13", "Tim Burton", 1989, "https://ogden_images.s3.amazonaws.com/www.lockhaven.com/images/2020/06/17135516/batman1989-559x840.jpg"),
    new Movie("Ghostbusters", "PG", "Ivan Reitman", 1984, "https://upload.wikimedia.org/wikipedia/en/2/2f/Ghostbusters_%281984%29_theatrical_poster.png"),
    new Movie("The Princess Bride", "PG", "Rob Reiner", 1987, "https://m.media-amazon.com/images/I/51pYRivXpBL._AC_.jpg")
];

for(let movie of liveActionMovies){
    let container = document.querySelector('.container');
    container.appendChild(movie.getHTML());
}

//navigation
let navButtons = document.querySelectorAll('nav a');

for(let button of navButtons){
    button.addEventListener('click', (ev) => {
        let sections = document.querySelectorAll('section');
        for(let section of sections){
            section.removeAttribute('style');
        }
        document.querySelector(ev.target.getAttribute('href')).style.display = "initial";
    });
}

//Page init
console.log(window.location.hash);
if(window.location.hash == ""){
    window.location.hash == "#home";
    document.querySelector('#home').style.display = "initial";
} else {
    document.querySelector(window.location.hash).style.display = "initial";
}

//form
let form = document.getElementById('movieForm');
form.addEventListener('submit',(ev)=>{
    ev.preventDefault();
    let formData = new FormData(form);
    let newMovie = new Movie(formData.get('title'),formData.get('rating'),formData.get('director'),parseInt(formData.get('releaseDate')),formData.get('poster'),);
    document.querySelector('#form .container').appendChild(newMovie.getHTML());
    form.reset;
});