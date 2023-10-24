const router = require('express').Router();
const {Film} = require('../../models');
// const bcrypt = require('bcryptjs');



//api/film
router.get('/', async (req, res)=>{
    const film = await Film.find({});
    res.status(200).json(film);
});

//api/film/register
router.post('/register', async(req, res)=>{
    const film = await Film.create(req.body);
    res.status(200).json(film);
});


module.exports = router;
