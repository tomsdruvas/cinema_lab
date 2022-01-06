const Cinema = function (films) {
  this.films = films;
};


Cinema.prototype.getTitles = function () {
  const filmTitles = this.films.map((film)=>{
    return film.title

  })
 return filmTitles
}

Cinema.prototype.findByTitle = function (title) {
  const foundFilm = this.films.filter((film)=>{
    return film.title === title

  })
  return foundFilm
}

Cinema.prototype.findByGenre = function (genre){
  const foundFilm = this.films.filter((film)=>{
    return film.genre === genre

  })
  return foundFilm

}
module.exports = Cinema;
