const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const redis = require('redis');

//Set Port
const port = 3000;

//Set app
const app = express();

//Set View Engine
app.engine('handlebars',exphbs({defaultLayout:'main'}));
app.set('view engine','handlebars');

//body-Parser
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}));

//mwthodOverride
app.use(methodOverride('method'));

app.get('/',(req, res, next)=>{
    res.render('searchusers');
});

app.listen(port, ()=>{
    console.log("Server started at "+port);
})