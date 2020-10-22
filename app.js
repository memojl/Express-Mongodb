const express = require("express");
const app = express();
//const port = 3000;

// Motor de plantillas
app.use(express.static(__dirname + "/public"));

app.use((req,res,next)=>{
   res.status(404).sendFile(__dirname + '/public/404.html');
}); 

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Our app is running on port ${ PORT }`);
});