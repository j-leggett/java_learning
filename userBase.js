class UserBase{

  constructor(users) {
    this.users = users;
  }

  getNames() {
    return this.users.map((name) => {
      return name.name
    })
  }

  getIntroductions() {
    return this.users.map((name) => {
      return `Hi, my name is ${name.name}`
    })
  }

  count() {
    return this.users.length
  }

}

module.exports = UserBase