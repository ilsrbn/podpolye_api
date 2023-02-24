module.exports = {
  apps: [
    {
      name: 'podpolye_back',
      exec_mode: 'cluster',
      instances: 'max',
      script: './dist/src/main.js',
      env: {
        NODE_ENV: 'production',
        PORT: 3000,
      },
    },
  ],
};
