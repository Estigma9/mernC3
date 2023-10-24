const router = require('express').Router();
const {User} = require('../../models');
const userController = require('../../controllers/UserController.js');
const bcrypt = require('bcryptjs');



//api/user
router.get('/', async (req, res)=>{
    const user = await User.find({});
    res.status(200).json(user);
});

//api/user/register
router.post('/register', async(req, res)=>{
    req.body.password = bcrypt.hashSync(req.body.password, 10);
    const user = await User.create(req.body);
    res.status(200).json(user);
});
// router.post('/register', userController.register);

//api/user/login
router.post('/login', userController.login);



module.exports = router;
