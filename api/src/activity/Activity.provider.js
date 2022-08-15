const { Activity, Category } = require('../../models');

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
  async GetActivity(id) {
    try {
      const foundCategory = await Activity.findByPk(id, {
        include: [{ model: Category }],
      });
      return foundCategory;
    } catch (err) {
      throw new Error(err);
    }
  }
  async GetActivities(options) {
    try {
      if (!options.categoryId) {
        const activities = await Activity.findAll({
          where: {
            userId: options.userId,
          },
          include: [{ model: Category }],
        });
        return activities;
      }
      const activities = await Activity.findAll({
        where: {
          categoryId: options.categoryId,
        },
        include: [{ model: Category }],
      });
      return activities;
    } catch (err) {
      throw new Error(err);
    }
  }
  async DeleteActivity(id) {
    try {
      // eslint-disable-next-line no-unused-vars
      const deletedActivity = await Activity.destroy({
        where: {
          id,
        },
      });
      return 'Activity succesfully deleted';
    } catch (err) {
      throw new Error(err);
    }
  }
};

module.exports = ActivityProvider;
