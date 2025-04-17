export default [
  {
    method: 'GET',
    path: '/',
    handler: 'controller.index',
    auth: false,
    config: {
      policies: [],
    },
  },

  // Recipe Routes
  {
    method: 'GET',
    path: '/allrecipes',
    handler: 'recipe.findAll',
    config: {
      auth: false,
    },
  },
  {
    method: 'GET',
    path: '/recipes/:id',
    handler: 'recipe.findOne',
    config: {
      auth: false,
    },
  },
  {
    method: 'GET',
    path: '/recipe/getby-meal/:mealTypeName',
    handler: 'recipe.findByMealTypeName',
    config: {
      auth: false,
      policies: [],
    },
  },
  {
    method: 'GET',
    path: '/recipe/getby-product/:productTypeName',
    handler: 'recipe.findByProductTypeName',
    config: {
      auth: false,
      policies: [],
    },
  },

  // New route for filtering by recipe name (title)
  {
    method: 'GET',
    path: '/recipe/getby-text/:text',
    handler: 'recipe.findByText',
    config: {
      auth: false,
      policies: [],
    },
  },

  // Meal Type Routes
  {
    method: 'GET',
    path: '/allmeal-types',
    handler: 'meal-type.findAll',
    config: {
      auth: false,
    },
  },
  {
    method: 'GET',
    path: '/meal-types/:id',
    handler: 'meal-type.findOne',
    config: {
      auth: false,
    },
  },

  // Product Type Routes
  {
    method: 'GET',
    path: '/allproduct-types',
    handler: 'product-type.findAll',
    config: {
      auth: false,
    },
  },
  {
    method: 'GET',
    path: '/product-types/:id',
    handler: 'product-type.findOne',
    config: {
      auth: false,
    },
  },
];
