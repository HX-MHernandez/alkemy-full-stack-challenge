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
  async ModifyUser(attributes) {
    try {
      const userModified = await User.update({
        username: attributes.username,
        password: attributes.password,
      }, {
        where: {
          userId: attributes.userId,
        },
      });
      return userModified;
    } catch (err) {
      throw new Error(err);
    }
  }
  async GetUser(id) {
    try {
      const foundUser = await User.findByPk(id);
      if (!foundUser) return 'User not found';
      return foundUser;
    } catch (err) {
      throw new Error(err);
    }
  }
}

module.exports = new UserProvider();
