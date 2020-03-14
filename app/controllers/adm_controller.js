const Adm = require('../models/adm');

const AdmController = {
  index: (req, res, next) => {

    Adm.find().then(dado => res.send(dado) );
    
    // const adm = new Adm({ nome: 'Suporte', senha: '123456', email: 'suporte@torneseumprogramador.com.br' });
    // adm.save(error => {
    //   if(error){
    //     res.send(error);
    //     return
    //   }
      
    //   Adm.find().then(dado => {
    //     res.send(dado);
    //   });
    // });
  },
  create: (req, res, next) => {
    const adm = new Adm({ nome: req.body.nome, senha: req.body.senha, email: req.body.email });
    adm.save(error => {
      if(error){
        res.status(401).send(error)
        return
      }
      
      res.status(201).send({});
    });
  },
  change: async(req, res, next) => {
    console.log(req.params.adm_id)
    try{
    await Adm.findOneAndUpdate({_id: req.params.adm_id}, {nome: req.body.nome, senha: req.body.senha, email: req.body.email})
    res.status(204).send(`Alterado com o id ${req.params.adm_id}`)
  }
  catch(err){
    res.status(401).send(`Erro: ${err}`)
  }
},
  delete: async(req, res, next) => {
    try{
      await Adm.findByIdAndDelete(req.params.adm_id)
      res.status(204).send({});

    }
    catch(err){
      res.status(401).send({})
    }
}
}
module.exports = AdmController;
