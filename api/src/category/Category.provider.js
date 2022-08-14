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
  async DeleteCategory(id) {
    try {
      // eslint-disable-next-line no-unused-vars
      const deletedCategory = await Category.destroy({
        where: {
          id,
        },
      });
      return 'Category succesfully deleted';
    } catch (err) {
      throw new Error(err);
    }
  }
  async GetCategories(userId) {
    try {
      const categories = await Category.findAll({
        where: {
          userId,
        },
      });
      return categories;
    } catch (err) {
      throw new Error(err);
    }
  }
  async GetCategory(id) {
    try {
      const foundCategory = await Category.findByPk(id);
      return foundCategory;
    } catch (err) {
      throw new Error(err);
    }
  }
}

module.exports = CategoryProvider;
