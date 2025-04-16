'use strict';

module.exports = {
  async findAll(ctx) {
    try {
      const mealTypes = await strapi
        .plugin('receipe')
        .service('meal-type')
        .findAll(ctx.query);
      ctx.body = mealTypes;
    } catch (err) {
      ctx.throw(500, err);
    }
  },

  async findOne(ctx) {
    try {
      const { id } = ctx.params;
      const mealType = await strapi
        .plugin('receipe')
        .service('meal-type')
        .findOne(id, ctx.query);
      ctx.body = mealType;
    } catch (err) {
      ctx.throw(500, err);
    }
  },
};
