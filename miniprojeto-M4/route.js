
const { dicas, receitas, estatisticas } = require('./banco.js');
const express = require('express');
const router = express.Router();

router.get('/dicas', (req, res) => {
 return res.json(dicas);
});

router.get('/receitas', (req, res) => {
 return res.json(receitas);
});

router.get('/estatisticas', (req, res) => {
    console.log(estatisticas);
 return res.json(estatisticas);
});

module.exports = router;


