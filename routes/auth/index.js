const { Router } = require('express');

const signupRouter = require('./signup');

const router = Router();

module.exports = (params) => {
  router.use(signupRouter(params));
  return router;
};
