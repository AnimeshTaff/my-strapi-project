'use strict';

module.exports = {
  async findAll(ctx) {
    try {
      const recipes = await strapi.entityService.findMany('plugin::receipe.recipe', {
        populate: '*',
      });
      ctx.body = recipes;
    } catch (err) {
      ctx.throw(500, err);
    }
  },

  async findOne(ctx) {
    const { id } = ctx.params;
    try {
      const recipe = await strapi.entityService.findOne('plugin::receipe.recipe', id, {
        populate: '*',
      });
      ctx.body = recipe;
    } catch (err) {
      ctx.throw(500, err);
    }
  },

  async create(ctx) {
    try {
      const data = await strapi.entityService.create('plugin::receipe.recipe', {
        data: ctx.request.body,
      });
      ctx.body = data;
    } catch (err) {
      ctx.throw(500, err);
    }
  },

  async update(ctx) {
    const { id } = ctx.params;
    try {
      const data = await strapi.entityService.update('plugin::receipe.recipe', id, {
        data: ctx.request.body,
      });
      ctx.body = data;
    } catch (err) {
      ctx.throw(500, err);
    }
  },

  // async delete(ctx) {
  //   const { id } = ctx.params;
  //   try {
  //     await strapi.entityService.delete('plugin::receipe.recipe', id);
  //     ctx.body = { message: 'Deleted successfully' };
  //   } catch (err) {
  //     ctx.throw(500, err);
  //   }
  // },
  async delete(ctx) {
    const { id } = ctx.params;
    const user = ctx.state.user;
  
    try {
      // Make sure the recipe exists
      const recipe = await strapi.entityService.findOne('plugin::receipe.recipe', id);
  
      if (!recipe) {
        return ctx.notFound('Recipe not found');
      }
  
      // Perform soft delete by updating deletedAt and deletedBy
      const updatedRecipe = await strapi.entityService.update('plugin::receipe.recipe', id, {
        data: {
          deletedAt: new Date(),
          deletedBy: user?.id || null,
        },
      });
  
      ctx.body = {
        message: 'Soft deleted successfully',
        recipe: updatedRecipe,
      };
    } catch (err) {
      ctx.throw(500, err);
    }
  }
  
};
