var request = require('request-promise');
const host = "http://localhost:3000";

describe("AdmController", () => {
  describe("GET /adm.json - deve retornar uma lista de administradores", () => {
    it("deve retornar o status code de 200", (done) => {
      let options = {
        method: 'GET',
        uri: `${host}/adm.json`,
        resolveWithFullResponse: true
      };
      request(options).then(response => {
        expect(response.statusCode).toBe(200);
      })
      .catch(function (err) {
        throw err.message
      });
      done();
    });

    it("deve dados na API", (done) => {
      let options = {
        method: 'GET',
        uri: `${host}/adm.json`,
        resolveWithFullResponse: true
      };
      request(options).then(response => {
        itens = JSON.parse(response.body);
        expect(itens[0].id).toBe(1);
        expect(itens[1].id).toBe(2);
      })
      .catch(function (err) {
        throw err.message
      });
      done();
    });
  });
});