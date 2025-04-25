// 'use strict';

// module.exports = {
//   async sendEmail(ctx) {
//     try {
//       const { to, subject, text } = ctx.request.body;

//       await strapi.plugins['email'].services.email.send({
//         to,
//         from: 'animesh.kumar@taffinc.com',
//         subject,
//         text,
//       });

//       ctx.send({ message: 'Email sent successfully' });
//     } catch (err) {
//       ctx.send({ error: 'Email failed to send', details: err }, 500);
//     }
//   },
// };

// module.exports = {
//   async sendEmail(ctx) {
//     try {
//       const { recipeId, to } = ctx.request.body;

//       if (!recipeId || !to) {
//         return ctx.badRequest('Missing recipeId or recipient email');
//       }

//       const recipe = await strapi.entityService.findOne(
//         'plugin::receipe.recipe',
//         recipeId
//       );

//       if (!recipe) {
//         return ctx.notFound('Recipe not found.');
//       }

//       const emailBody = `
//         <h3>You've got a new recipe!</h3>
//         <p><strong>Recipe Title:</strong> ${recipe.title}</p>
//         <p>Check it out now and give it a try!</p>
//       `;

//       await strapi.plugins['email'].services.email.send({
//         to,
//         from: 'animesh.kumar@taffinc.com',
//         subject: `New Recipe: ${recipe.title}`,
//         html: emailBody,
//       });

//       ctx.send({ message: 'Email sent successfully.' });
//     } catch (err) {
//       console.error('❌ EMAIL ERROR:', err);
//       ctx.internalServerError('Failed to send email.');
//     }
//   },
// };

// 'use strict';

// module.exports = {
//   async sendEmail(ctx) {
//     try {
//       const { recipeId, to } = ctx.request.body;

//       if (!recipeId || !to) {
//         return ctx.badRequest('Missing recipeId or recipient email');
//       }

//       const recipe = await strapi.entityService.findOne('plugin::receipe.recipe', recipeId);

//       if (!recipe) {
//         return ctx.notFound('Recipe not found.');
//       }

//       const title = recipe.title || 'Untitled';

//       await strapi.plugins['email'].services.email.send({
//         to,
//         from: 'animesh.kumar@taffinc.com', // make sure it's verified
//         subject: `New Recipe: ${title}`,
//         text: `Check out this new recipe: ${title}`,
//       });

//       ctx.send({ message: 'Email sent successfully' });
//     } catch (err) {
//       console.error('EMAIL ERROR:', err);
//       ctx.internalServerError('Failed to send email.');
//     }
//   },
// };

'use strict';

module.exports = {
  async sendEmail(ctx) {
    try {
      const { recipeId, to } = ctx.request.body;

      if (!recipeId || !to) {
        return ctx.badRequest('Missing recipeId or recipient email');
      }

      const recipe = await strapi.entityService.findOne('plugin::receipe.recipe', recipeId, {
        populate: ['image'],
      });

      if (!recipe) {
        return ctx.notFound('Recipe not found.');
      }

      const title = recipe.title || 'Untitled';

      const extractTextFromParagraphs = (blocks = []) => {
        return blocks.map(block => {
          if (block.children && Array.isArray(block.children)) {
            return block.children
              .map(child => child.text)
              .filter(text => typeof text === 'string' && text.trim() !== '')
              .join(' ');
          }
          return '';
        }).filter(Boolean).join('\n');
      };

      const ingredients = extractTextFromParagraphs(recipe.ingredients);
      const instructions = extractTextFromParagraphs(recipe.instructions);

      await strapi.plugins['email'].services.email.send({
        to,
        from: 'animesh.kumar@taffinc.com',
        subject: `New Recipe: ${title}`,
        text: `Check out this new recipe: ${title}\n\nIngredients:\n${ingredients}\n\nInstructions:\n${instructions}`,
      });

      ctx.send({ message: 'Email sent successfully' });
    } catch (err) {
      console.error('EMAIL ERROR:', err);
      ctx.internalServerError('Failed to send email.');
    }
  },
};
