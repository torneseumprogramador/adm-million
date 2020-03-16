const axios = require('axios').default;
const host = "http://localhost:3000";
const Adm = require('../../app/models/adm');


describe("AdmController", () => {
  beforeEach(async()=>{
    await Adm.deleteMany()
    await Adm.create([{ nome: "Danilo1", senha: '123456', email: 'danilo1@torneseumprogramador.com.br' },{ nome: "Danilo2", senha: '123456', email: 'danilo2@torneseumprogramador.com.br' }])
    })
  describe("GET /adm.json - deve retornar uma lista de administradores", () => {
    it("deve retornar o status code de 200", async(done) => {
    const response = await axios.get(`${host}/adm.json`)
    expect(response.status).toBe(200)
      done();
    });

    it("deve dados na API", async(done) => {
       const response = await axios.get(`${host}/adm.json`)
        const itens = response.data;
        expect(itens[0].nome).toBe("Danilo1");
        expect(itens[1].nome).toBe("Danilo2");
        done()
      })
  });
// 

  describe("POST /adm.json - administrador", () => {
    it("deve cadastrar um administrador", async(done) => {
      let nome = `teste ${new Date().getTime()}`;
        const body = { 
          nome,
          senha: '123456',
          email: nome + '@torneseumprogramador.com.br' 
        }
        const response = await axios.post(`${host}/adm.json`, body)
        expect(response.status).toBe(201)
      done();
    });
  });
// 
  describe("PUT /adm.json - administrador", () => {
    it("deve alterar um administrador", async(done) => {
      let nome = `teste ${new Date().getTime()}`;
     const adm = await Adm.create({ nome: nome, senha: '123456', email: nome + '@torneseumprogramador.com.br' }) 
          body = { 
            nome,
            senha: '123456',
            email: nome + '@torneseumprogramador.com.br' 
          }
        const response = await axios.put(`${host}/adm/${adm._id}.json`)
        expect(response.status).toBe(204);
        done();
      });
    });

  describe("DELETE /adm.json - administrador", () => {
    it("deve apagar um administrador", async(done) => {
      let nome = `teste ${new Date().getTime()}`;
      const adm = await Adm.create({ nome: nome, senha: '123456', email: nome + '@torneseumprogramador.com.br' })        // let options = {
        const response = await axios.delete(`${host}/adm/${adm._id}.json`)
        expect(response.status).toBe(204)
        done();
    });
  });
})