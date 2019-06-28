var express = require('express');
var router = express.Router();
var controller = require('../controller/clienteController');

//Get All
router.get('/', controller.getAll);

//Get por Id
router.get('/:id?', controller.getPorId);

//Criar Cliente
router.post('/', controller.criarCliente);

//Update
router.patch('/:id', controller.updateCliente);

//Excluir
router.delete('/:id', controller.deletarCliente);

module.exports = router;
