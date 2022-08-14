const { Category, User } = require('../../models');

class CategoryProvider {
  constructor() {}
  async CreateCategory(attributes) {
    try {
      const createdCategory = await Category.create(attributes.category);
      await createdCategory.setUser(attributes.userId);
      return createdCategory;
    } catch (err) {
      throw new Error(err);
    }
  }
}

module.exports = CategoryProvider;
