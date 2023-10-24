
const mongoose = require('mongoose');
const UserModel = require('./users.js');
const FilmModel = require('./films.js');

//MongoDB Connection
const DB_URL = 'mongodb://mongo:oeHnoYRSj4cVcoCh7dpy@containers-us-west-67.railway.app:7443';

const mongoConnection =  mongoose.connect(DB_URL, {
        keepAlive: true,
        useNewUrlParser:true,
        useUnifiedTopology: true,
        
    },
    // (e)=>{
    //     if(e){
    //         console.error('DB: ERROR !!');
    //     }else{
    //         console.log('Conexión Correcta !!');
    //     }
    // }
);

// Evento de conexión exitosa
mongoose.connection.on('connected', () => {
  console.log('Conexión exitosa a la base de datos MongoDB');
});

// Evento de error de conexión
mongoose.connection.on('error', (err) => {
    console.error('Error de conexión a MongoDB:', err);
  });
  
// Evento de desconexión
mongoose.connection.on('disconnected', () => {
console.log('Desconectado de la base de datos MongoDB');
});

const User = UserModel;
const Film = FilmModel;


module.exports = {
    User,
    Film,
}

