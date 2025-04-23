module.exports = ({ env }) => ({
  // Existing plugin
  'receipe': {
    enabled: true,
    resolve: './src/plugins/test'
  },

  // SendGrid Email plugin
  email: {
    config: {
      provider: 'sendgrid',
      providerOptions: {
        apiKey: env('SENDGRID_API_KEY'),
      },
      settings: {
        defaultFrom: 'animesh.kumar@taffinc.com',
        defaultReplyTo: 'animesh.kumar@taffinc.com',
      },
    },
  },
});
