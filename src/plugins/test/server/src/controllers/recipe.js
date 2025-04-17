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

  async findByMealTypeName(ctx) {
    const { mealTypeName } = ctx.params;
  
    try {
      const recipes = await strapi.entityService.findMany('plugin::receipe.recipe', {
        filters: {
          meal_types: {
            name: mealTypeName,
          },
        },
        populate: '*',
      });
  
      ctx.body = recipes;
    } catch (err) {
      ctx.throw(500, err);
    }
  },

  async findByProductTypeName(ctx) {
    const { productTypeName } = ctx.params;

    try {
      const recipes = await strapi.entityService.findMany('plugin::receipe.recipe', {
        filters: {
          receipe_product_type: {
            name: productTypeName,
          },
        },
        populate: '*',
      });

      ctx.body = recipes;
    } catch (err) {
      ctx.throw(500, err);
    }
  },

  // Updated findByText method (Only filter by recipe name/title)
  async findByText(ctx) {
    const { text } = ctx.params; // The search text passed in the URL parameter
  
    try {
      const recipes = await strapi.entityService.findMany('plugin::receipe.recipe', {
        filters: {
          // Only filtering by the recipe's title (name)
          title: {
            $contains: text,  // Filters recipes where the title contains the text
          },
        },
        populate: '*',
      });

      ctx.body = recipes;
    } catch (err) {
      ctx.throw(500, err);
    }
  }
};
