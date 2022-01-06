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


Cinema.prototype.haveFilmsFromYear = function (year){
  let result = this.films.some((film)=>{
    return film.year === year
  })
  return result
}



Cinema.prototype.overLength = function (length) {
  let result = this.films.every((film)=>{
    return film.length > length

  })
  return result
}

Cinema.prototype.totalTime = function () {
  let result = this.films.reduce((runningTotal, film)=>{
    return runningTotal+film.length
  }, 0)
  return result
}

Cinema.prototype.filmsByProperty = function (property, value){
  const foundFilm = this.films.filter((film)=>{
    return film[property] === value

  })
  return foundFilm

}




module.exports = Cinema;
