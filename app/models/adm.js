var mongoose = require('../../db/conexao'); 

const Adm = mongoose.model('user', { 
  nome: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  senha: { type: String, required: true },
});

module.exports = Adm;