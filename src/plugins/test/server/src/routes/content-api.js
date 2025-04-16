export default [
  {
    method: 'GET',
    path: '/',
    // name of the controller file & the method.
    handler: 'controller.index',
    auth: false,
    config: {
      policies: [],
    },
  },

  {
    method: 'GET',
    path: '/recipes',
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
    method: 'POST',
    path: '/recipes',
    handler: 'recipe.create',
    config: {
      auth: false,
    },
  },
  {
    method: 'PUT',
    path: '/recipes/:id',
    handler: 'recipe.update',
    config: {
      auth: false,
    },
  },
  {
    method: 'DELETE',
    path: '/recipes/:id',
    handler: 'recipe.delete',
    config: {
      auth: false,
    },
  },

    // Meal Type Routes
    {
      method: 'GET',
      path: '/meal-types',
      handler: 'meal-type.findAll',
      config: {
        auth: false,
      },
    },
    {
      method: 'GET',
      path: '/product-types',
      handler: 'product-type.findAll',
      config: {
        auth: false,
      },
    },
];
