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
          meal_type: {
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

  async findByText(ctx) {
    const { text } = ctx.params;

    try {
      const recipes = await strapi.entityService.findMany('plugin::receipe.recipe', {
        filters: {
          title: {
            $contains: text,
          },
        },
        populate: '*',
      });

      ctx.body = recipes;
    } catch (err) {
      ctx.throw(500, err);
    }
  },

  // Combined Filter (meal_type + product_type)
  async filterByMealAndProductType(ctx) {
    const { mealType, productType } = ctx.query;

    const filters = {};

    if (mealType) {
      filters.meal_type = {
        name: mealType,
      };
    }

    if (productType) {
      filters.receipe_product_type = {
        name: productType,
      };
    }

    try {
      const recipes = await strapi.entityService.findMany('plugin::receipe.recipe', {
        filters,
        populate: '*',
      });

      ctx.body = recipes;
    } catch (err) {
      ctx.throw(500, err);
    }
  },
};
