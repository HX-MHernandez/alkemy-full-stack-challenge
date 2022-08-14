const { User, Session } = require('../../models');

class UserProvider {
  constructor() {}
  async CreateUser(attributes) {
    try {
      const userCreated = await User.create(attributes);
      return userCreated;
    } catch (err) {
      throw new Error(err);
    }
  }
}

module.exports = UserProvider;
