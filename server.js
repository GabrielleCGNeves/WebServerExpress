const app = require('./app.js');

require('dotenv').config({path:'variable.env'});

app.set('port', process.env.port);
const server = app.listen(app.get('port'), () =>{
    console.log("Servidor executado no end: " + server.address())
})