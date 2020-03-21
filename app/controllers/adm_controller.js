const Adm = require('../models/adm');
const TOKEN = "12345213455";

const AdmController = {
  index: (req, res, next) => {

    if(req.headers.token == TOKEN){
      Adm.find().then(dado => res.send(dado) );
    }
    else{
      res.status(401).send({error: "Acesso negado a API, Token invalido"});
    }
  },
  create: (req, res, next) => {
  if(req.headers.token == TOKEN){
    const adm = new Adm({ nome: req.body.nome, senha: req.body.senha, email: req.body.email });
    adm.save(error => {
      if(error){
        res.status(401).send(error)
        return
      }
      
      res.status(201).send({});
    });
  }
  else{
    res.status.send({error: `Acesso negado a API`})
  }
  },
  change: async(req, res, next) => {
  if(req.headers.token == TOKEN){
    try{
      await Adm.findOneAndUpdate({_id: req.params.adm_id}, {nome: req.body.nome, senha: req.body.senha, email: req.body.email})
      res.status(204).send(`Alterado com o id ${req.params.adm_id}`)
    }
    catch(err){
      res.status(401).send(`Erro: ${err}`)
    }
  }
  else{
    res.status(401).send({error:`Acesso negado a API`})
  }
  }
  ,
  delete: async(req, res, next) => {
  if(req.headers.token == TOKEN){
    try{
      await Adm.findByIdAndDelete(req.params.adm_id)
      res.status(204).send({});

    }
    catch(err){
      res.status(401).send({})
    }
  }
  else{
    res.status.send({error: "Acesso negado a API"})
  }
  }
}
module.exports = AdmController;
