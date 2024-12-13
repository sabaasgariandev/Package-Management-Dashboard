const { createProxyMiddleware } = require('http-proxy-middleware');
//for cords problem on browsers
module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://api.tanzibfit.com',
      changeOrigin: true,
      pathRewrite: {
        '^/api': '/api', // remove /api prefix when forwarding to the target
      },
    })
  );
};
