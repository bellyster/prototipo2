//
//imports
//
var express = require('express');
var app= express();
app.disable('x-powered-by'); //por seguridad, no transmite info del server

//handlebars y configuración Layout
var handlebars = require('express-handlebars').create({defaultLayout:'main'});
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');


//Define Puerto y carpeta raiz para acceder elementos
app.set('port', process.env.PORT||3000);
//Scope del proyecto. :3
app.use(express.static(__dirname +'/public'));

//
//Direccionamiento de vistas: RUTEO
//

//HOME
app.get('/', function(req, res){
    res.render('home');
});

//Direccionamiento en caso de error
app.use(function (req, res) {
    res.type('text/html');
    res.status(404);
    res.render('404');
});

//Mantener el server activo.
app.listen(app.get('port'), function(){
    console.log('Ctrl+C to quit');
});
