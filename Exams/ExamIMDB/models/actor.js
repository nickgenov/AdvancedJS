var imdb = imdb || {};

(function (scope) {
    function Actor(name, bio, born) {
        this.name = name;
        this.bio = bio;
        this.born = born;
    }

    Actor.prototype.method = function () {

    };

    scope.getActor = function(name, bio, born) {
        return new Actor(name, bio, born);
    }
})(imdb);