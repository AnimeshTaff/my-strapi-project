// src/plugins/receipe/services/meal-type.js
'use strict';

module.exports = {
  async findAll(query = {}) {
    return await strapi.entityService.findMany('plugin::receipe.meal-type', query);
  },

  async findOne(id, query = {}) {
    return await strapi.entityService.findOne('plugin::receipe.meal-type', id, query);
  },
};
