const models =require('../models');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


exports.login = async(req, res, next)=>{
    try {
        const user = await models.User.findOne({email:req.body.email});

        if(user){
            const passwordIsValid = bcrypt.compareSync(req.body.password, user.password);

            if(passwordIsValid){
                const token = jwt.sign({
                    id: user.id,
                    username: user.username,
                    userlastname: user.userlastname,
                    email: user.email,

                }, 'config.secret',{
                    expiresIn: 86400, //Duración del token, 1 día
                });
                res.status(200).send({
                    auth: true,
                    tokenReturn: token,
                    user: user
                });    
            }else{
                res.status(401).json({
                    error: 'Error en el usuario o contraseña'
                });
            }   
        }else{
            res.status(404).json({
                error: 'Error en el usuario o contraseña'
            });  
        }  
    } catch(error){
        res.status(500).send({
            message: 'Error->'
        });
        next(error);
    }
};



// exports.register = async(req, res)=>{
//     req.body.password = bcrypt.hashSync(req.body.password, 10);
//     const user = await User.create(req.body);
//     res.status(200).json(user);
// }

// exports.listar = async(req, res, next){
//     try {
        
//     } catch (error) {
        
//     }
// }
