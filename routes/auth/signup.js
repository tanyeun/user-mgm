const { Router } = require('express');

const router = Router();

module.exports = () => {
  /**
   * GET route to display the registration form
   */
  router.get('/signup', (req, res) => {
    res.render('auth/signup', { page: 'signup' });
  });

  return router;
};
