module.exports = {
  apps: [{
    name: 'joboufra-portfolio',
    script: 'npm',
    args: 'start',
    watch: true,
    env: {
      RESEND_API_KEY: 'RESEND_API_KEY_PLACEHOLDER',
      FROM_EMAIL: 'FROM_EMAIL_PLACEHOLDER',
      TO_EMAIL: 'TO_EMAIL_PLACEHOLDER',
    },
    env_production: {
      NODE_ENV: 'production',
    }
  }]
};