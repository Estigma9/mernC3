const router = require('express').Router();
const apiRouterUser = require('./api/user.js');
const apiRouterFilm = require('./api/films.js');

router.use('/user', apiRouterUser);
router.use('/film', apiRouterFilm);


module.exports = router;


