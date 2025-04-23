const controller = ({ strapi }) => ({
  index(ctx) {
    ctx.body = strapi
      .plugin('test')
      // the name of the service file & the method.
      console.log('test')
      .service('service')
      .getWelcomeMessage();
  },
});

export default controller;
