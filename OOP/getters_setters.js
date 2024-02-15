class User {
  constructor(username, password) {
    this.username = username;
    this.password = password;
  }

  get username() {
    return this._username.toUpperCase();
    // return `${this._password}tanu`
  }

  set username(value) {
    this._username = value;
  }

  get password() {
    // return this._password.toUpperCase()
    return `${this._password}tanu`;
  }

  set password(value) {
    this._password = value;
  }
}

const mahima = new User("mahima", "pqr");
console.log(mahima.username);
console.log(mahima.password);
