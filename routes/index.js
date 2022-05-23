const { Router } = require('express');

const router = Router();

// Returns a function and allows you to pass parameters down the routing chain
module.exports = (params) => {
  /* GET index page. */
  router.get('/', (req, res) => {
    res.render('index', { page: 'index' });
  });

  // Always return the router from such a module.
  return router;
};
