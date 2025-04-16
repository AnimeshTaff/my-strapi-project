'use strict';

module.exports = {
  async findAll(query) {
    return await strapi.entityService.findMany('plugin::receipe.product-type', query);
  },

  async findOne(id, query) {
    return await strapi.entityService.findOne('plugin::receipe.product-type', id, query);
  },
};
