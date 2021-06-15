function Movie(title, director, genre, releaseYear,rating){
    this.title = title;
    this.director=director;
    this.genre=genre;
    this.releaseYear=releaseYear;
    this.rating=rating;
}

Movie.prototype.getOverview = function(){
    console.log(`${this.title}, a ${this.genre} film directed by ${this.director}`
                `was released in ${this.releaseYear}. It recieved a rating of ${this.rating}.`);
}

