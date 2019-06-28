function getAll(req, res, next) {
    var db = require("../models/db");
    db.executarQuery('SELECT * FROM Clientes', res);
};

function getPorId(req, res, next) {
    var db = require("../models/db");
    let filter = '';
    if (req.params.id) filter = ' WHERE ID=' + parseInt(req.params.id);
    db.executarQuery('SELECT * FROM Clientes' + filter, res);
}

function criarCliente(req, res, next) {
    var db = require("../models/db");
    const nome = req.body.nome.substring(0, 150);
    const cpf = req.body.cpf.substring(0, 11);
    db.executarQuery(`INSERT INTO Clientes(Nome, CPF) VALUES('${nome}','${cpf}')`, res);
}

function updateCliente(req, res, next) {
    var db = require("../models/db");
    const id = parseInt(req.params.id);     
    const nome = req.body.nome.substring(0,150);     
    const cpf = req.body.cpf.substring(0,11);     
    db.executarQuery(`UPDATE Clientes SET Nome='${nome}', CPF='${cpf}' WHERE ID=${id}`, res);
}

function deletarCliente(req, res, next) {
    var db = require("../models/db");   
    db.executarQuery('DELETE Clientes WHERE ID=' + parseInt(req.params.id), res); 
}

module.exports = { getAll, getPorId, criarCliente, updateCliente, deletarCliente };
