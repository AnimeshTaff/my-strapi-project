const recipe = require('./recipe');
const mealType = require('./meal-type');
const productType = require('./product-type');
const service = require('./service');

module.exports = {
  contentTypes: {
    recipe,
    'meal-type': mealType,
    'product-type': productType,
    service,
  },
};
