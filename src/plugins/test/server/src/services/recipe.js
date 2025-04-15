'use strict';

module.exports = {
  async findAll(query) {
    return await strapi.entityService.findMany('plugin::dishes.recipe', query);
  },

  async findOne(id) {
    return await strapi.entityService.findOne('plugin::dishes.recipe', id, {
      populate: ['image'], // adjust populate as needed
    });
  },

  async create(data) {
    return await strapi.entityService.create('plugin::dishes.recipe', {
      data,
    });
  },

  async update(id, data) {
    return await strapi.entityService.update('plugin::dishes.recipe', id, {
      data,
    });
  },

  async delete(id) {
    return await strapi.entityService.delete('plugin::dishes.recipe', id);
  },
};
