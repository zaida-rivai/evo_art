const proxy = require('http-proxy-middleware');
module.exports = function(app) {
  app.use(
    '/api',
    proxy({
      pathRewrite: {
        '/api': '/'
      },
      target: 'http://localhost:5000',
      changeOrigin: true,
    })
  );
};