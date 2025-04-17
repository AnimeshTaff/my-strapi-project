'use strict';

module.exports = {
  async findAll(ctx) {
    try {
      const productTypes = await strapi.entityService.findMany('plugin::receipe.product-type', {
        populate: '*',
      });
      ctx.body = productTypes;
    } catch (err) {
      ctx.throw(500, err);
    }
  },

  async findOne(ctx) {
    const { id } = ctx.params;
    try {
      const productType = await strapi.entityService.findOne('plugin::receipe.product-type', id, {
        populate: '*',
      });
      ctx.body = productType;
    } catch (err) {
      ctx.throw(500, err);
    }
  },
};
