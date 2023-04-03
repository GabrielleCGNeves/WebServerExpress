const app = require('./app.js');

app.set('port', 3000);
const server = app.listen(app.get('port'), () =>{
    console.log("Servidor executado no end: " + server.address())
})