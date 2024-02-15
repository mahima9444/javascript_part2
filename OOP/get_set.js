function User(username, score){
    this.username = username
    this.score = score
}

Object.defineProperty(this, 'username', {
    get: function() {
        return this._username.toUpperCase()
    },
    set: function(value) {
        this._username = value
    }
})

Object.defineProperty(this, 'score', {
    get: function() {
        return this._score.toUpperCase()
    },
    set: function(value) {
        this._score = value
    }
})

const abc =  new User("tanu", "abcd")
console.log(abc.username);
console.log(abc.score);