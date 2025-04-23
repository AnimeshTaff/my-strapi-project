'use strict';

module.exports = {
  async sendEmail(ctx) {
    try {
      const { to, subject, text } = ctx.request.body;

      await strapi.plugins['email'].services.email.send({
        to,
        from: 'animesh.kumar@taffinc.com',
        subject,
        text,
      });

      ctx.send({ message: 'Email sent successfully' });
    } catch (err) {
      ctx.send({ error: 'Email failed to send', details: err }, 500);
    }
  },
};
