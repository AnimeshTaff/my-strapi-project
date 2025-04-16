'use strict';

module.exports = {
  async findAll(ctx) {
    try {
      const productTypes = await strapi
        .plugin('receipe')
        .service('product-type')
        .findAll(ctx.query);
      ctx.body = productTypes;
    } catch (err) {
      ctx.throw(500, err);
    }
  },

  async findOne(ctx) {
    try {
      const { id } = ctx.params;
      const productType = await strapi
        .plugin('receipe')
        .service('product-type')
        .findOne(id, ctx.query);
      ctx.body = productType;
    } catch (err) {
      ctx.throw(500, err);
    }
  },
};
