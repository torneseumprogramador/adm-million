var Adm = require('../models/adm');

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
  }
}

module.exports = AdmController;
