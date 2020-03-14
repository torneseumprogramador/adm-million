const axios = require('axios').default;
const host = "http://localhost:3000";
const Adm = require('../../app/models/adm');


describe("AdmController", () => {
  beforeEach(async()=>{
    Adm.deleteMany()
    const adm = await Adm.create([{ nome: "Danilo1", senha: '123456', email: 'danilo1@torneseumprogramador.com.br' },{ nome: "Danilo2", senha: '123456', email: 'danilo2@torneseumprogramador.com.br' }])
    
    })
  describe("GET /adm.json - deve retornar uma lista de administradores", () => {
    it("deve retornar o status code de 200", async(done) => {
    const response = await axios.get(`${host}/adm.json`)
    expect(response.status).toBe(200)
      done();
    });

    it("deve dados na API", (done) => {
      axios(options).then(response => {
        // itens = JSON.parse(response.body);
        // expect(itens[0].nome).toBe("Danilo1");
        // expect(itens[1].nome).toBe("Danilo2");
      // })
      // .catch(function (err) {
        // throw err.message
      // });
      // done();
    // });
  });
// 

  // describe("POST /adm.json - administrador", () => {
    // it("deve cadastrar um administrador", (done) => {
      // let nome = `teste ${new Date().getTime()}`;
      // let options = {
        // method: 'POST',
        // uri: `${host}/adm.json`,
        // body: { 
          // nome: nome,
          // senha: '123456',
          // email: nome + '@torneseumprogramador.com.br' 
        // },
        // json: true
      // };
      // axios(options).then(response => {
        // expect(response.statusCode).toBe(201);
      // })
      // .catch(function (err) {
        // throw err.message
      // });
      // done();
    // });
  // });
// 
  // describe("PUT /adm.json - administrador", () => {
    // it("deve alterar um administrador", (done) => {
      // let nome = `teste ${new Date().getTime()}`;
      // new Adm({ nome: nome, senha: '123456', email: nome + '@torneseumprogramador.com.br' }).save((error, adm) => {
// 
        // let options = {
          // method: 'PUT',
          // uri: `${host}/adm/${adm._id}.json`,
          // body: { 
            // nome: nome,
            // senha: '123456',
            // email: nome + '@torneseumprogramador.com.br' 
          // },
          // json: true
        // };
        // axios(options).then(response => {
          // expect(response.statusCode).toBe(200);
        // })
        // .catch(function (err) {
          // throw err.message
        // });
// 
        // done();
// 
      // });
    // });
  });

  // describe("DELETE /adm.json - administrador", () => {
    // it("deve apagar um administrador", (done) => {
      // let nome = `teste ${new Date().getTime()}`;
      // new Adm({ nome: nome, senha: '123456', email: nome + '@torneseumprogramador.com.br' }).save((error, adm) => {
// 
        // let options = {
          // method: 'DELETE',
          // uri: `${host}/adm/${adm._id}.json`
        // };
        // axios(options).then(response => {
          // expect(response.statusCode).toBe(204);
        // })
        // .catch(function (err) {
          // throw err.message
        // });
// 
        // done();
// 
      // });
    // });
  // });

// });