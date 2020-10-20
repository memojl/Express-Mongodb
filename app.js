const express = require("express");
const app = express();
const port = 3000;

// Motor de plantillas
app.use(express.static(__dirname + "/public"));

app.use((req,res,next)=>{
   res.status(404).sendFile(__dirname + '/public/404.html');
}); 

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});