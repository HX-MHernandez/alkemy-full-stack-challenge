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
  async ModifyCategory(attributes) {
    try {
      const modifiedCategory = await Category.update(attributes.changes, {
        where: {
          userId: attributes.userId,
          id: attributes.categoryId,
        },
      });
      return modifiedCategory;
    } catch (err) {
      throw new Error(err);
    }
  }
}

module.exports = CategoryProvider;
