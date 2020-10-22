const express = require('express');
const router = express.Router();

router.get('/',(req, res)=>{
  res.render('index',{titulo: 'Mi titulo dinamico'});
});

router.get('/nosotros',(req, res)=>{
  res.render('nosotros',{titulo: 'Nosotros'});
});

router.get('/servicios',(req, res)=>{
  res.render('servicios',{titulo: 'Servicios'});
});

router.get('/contacto',(req, res)=>{
  res.render('contacto',{titulo: 'Contacto'});
});

module.exports = router;