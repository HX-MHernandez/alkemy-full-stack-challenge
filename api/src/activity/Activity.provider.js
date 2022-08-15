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
  async ModifyActivity(attributes) {
    try {
      const modifiedActivity = await Activity.findByPk(attributes.activity.id);
      await modifiedActivity.update(attributes.activity, {
        where: {
          id: attributes.activity.id,
        },
      });
      if (attributes.categoryId) await modifiedActivity.setCategory(attributes.categoryId);
      return modifiedActivity;
    } catch (err) {
      throw new Error(err);
    }
  }
};

module.exports = ActivityProvider;
