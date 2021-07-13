var express = require('express');
var app = express();
//var PORT = 3000;
//Para usar heroku:
var PORT = process.env.PORT || 3000;

var middleware = require('./middleware')


app.use(middleware.logger);

//middle ware para toda a aplicação
//app.use(middleware.requireAuthentication);

//para um end point específico, coloca como 2. argumento !
app.get('/about', middleware.requireAuthentication,  function (req, res) {
    res.send('Sobre nós !!!')
})

app.use(express.static(__dirname + '/public'));

app.listen(PORT, function() {
    // função chamada ao iniciar o servidor
    console.log('Servidor Express foi iniciado na porta: ' + PORT);
});