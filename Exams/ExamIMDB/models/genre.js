var imdb = imdb || {};

(function (scope) {
    function Genre(name) {
        this.name = name;
        this._movies = [];
    }

    Genre.prototype.addMovie = function (movie) {
        this._movies.push(movie);
    }

    Genre.prototype.deleteMovie = function(movie) {
        //this._movies.re
    }

    Genre.prototype.deleteMovieById = function(id) {

    }

    Genre.prototype.getMovies = function () {
        return this._movies;
    }


    scope.getGenre = function(name) {
        return new Genre(name);
    }
})(imdb);