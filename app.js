const express = require("express");
const app = express();

// Motor de plantillas
app.set('view engine', 'ejs');
app.set('views', __dirname+'/views');
app.use(express.static(__dirname + "/public"));

//Rutas Web
app.use('/', require('./router/RutasWeb'));

app.use((req,res,next)=>{
  res.status(404).render('404', {
    titulo: '404',
    msj: 'Página no encontrada'
  });
}); 

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Our app is running on port ${ PORT }`);
});