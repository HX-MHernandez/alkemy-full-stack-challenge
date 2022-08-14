const { Activity, Category, User, Session } = require('../../models');

class ActivityProvider {
  constructor() {}
  async CreateActivity(attributes) {
    try {
      const createdActivity = await Activity.create(attributes.activity);
      await createdActivity.setCategory(attributes.categoryId);
      await createdActivity.setUser(attributes.userId);
      return createdActivity;
    } catch (err) {
      throw new Error(err);
    }
  }
};

module.exports = ActivityProvider;
