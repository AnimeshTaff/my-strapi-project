'use strict';

module.exports = {
  // Fetch all meal types
  async findAll(ctx) {
    try {
      const mealTypes = await strapi.entityService.findMany('plugin::receipe.meal-type', {
        populate: '*', // Populate all related data
      });
      ctx.body = mealTypes;
    } catch (err) {
      ctx.throw(500, err);
    }
  },

  // Fetch a single meal type by ID
  async findOne(ctx) {
    const { id } = ctx.params;
    try {
      const mealType = await strapi.entityService.findOne('plugin::receipe.meal-type', id, {
        populate: '*', // Populate all related data
      });
      ctx.body = mealType;
    } catch (err) {
      ctx.throw(500, err);
    }
  },

  // Create a new meal type
  async create(ctx) {
    try {
      const data = await strapi.entityService.create('plugin::receipe.meal-type', {
        data: ctx.request.body, // The data to create the meal type
      });
      ctx.body = data;
    } catch (err) {
      ctx.throw(500, err);
    }
  },

  // Update an existing meal type
  async update(ctx) {
    const { id } = ctx.params;
    try {
      const data = await strapi.entityService.update('plugin::receipe.meal-type', id, {
        data: ctx.request.body, // The data to update the meal type
      });
      ctx.body = data;
    } catch (err) {
      ctx.throw(500, err);
    }
  },

  // Soft delete a meal type (set deletedAt and deletedBy)
  async delete(ctx) {
    const { id } = ctx.params;
    const user = ctx.state.user; // Get the user performing the delete action
    
    try {
      // Check if the meal type exists
      const mealType = await strapi.entityService.findOne('plugin::receipe.meal-type', id);

      if (!mealType) {
        return ctx.notFound('Meal type not found');
      }

      // Perform soft delete by updating deletedAt and deletedBy
      const updatedMealType = await strapi.entityService.update('plugin::receipe.meal-type', id, {
        data: {
          deletedAt: new Date(), // Set the deletion timestamp
          deletedBy: user?.id || null, // Set the user who performed the delete action
        },
      });

      ctx.body = {
        message: 'Soft deleted successfully',
        mealType: updatedMealType,
      };
    } catch (err) {
      ctx.throw(500, err);
    }
  },
};
