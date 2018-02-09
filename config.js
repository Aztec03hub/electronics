module.exports = {
  production: (process.env.NODE_ENV === 'production'),
  watch : (process.env.NODE_ENV === 'watch'),
  test : (process.env.NODE_ENV === 'test'),

  ports: {
    httpServer: 3002,
    devServer: 9002
  }
};
