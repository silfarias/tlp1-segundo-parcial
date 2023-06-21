const express = require('express');
const router = express.Router();
const { usuariosModel } = require('../models/db');

const {
    getIndex,
    createIndex,
    updateIndex,
    deleteIndex
  } = require('../controllers/index.controller');
  
router.get('/', getIndex);
router.post('/', createIndex);
router.put('/', updateIndex);
router.delete('/', deleteIndex);
  

module.exports = router;