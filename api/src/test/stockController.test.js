const axios = require('axios');
const { expect } = require('chai');
const app = require('../../app');
const serverUrl = 'http://localhost:8000'; 

describe('Ações API', function() {
    let server;

    before(function(done) {
      server = app.listen(8000, () => {
        done();
      });
    });
  
    after(function(done) {
      server.close(() => {
        done();
      });
    });

  describe('POST /compare', function() {
    it('Deve comparar preços de ações', async function() {
      const data = {
        symbols: ['AAPL', 'MSFT', 'GOOGL'],
      };
  
      const response = await axios.post(`${serverUrl}/compare`, data);
  
      expect(response.status).to.equal(200);
      expect(response.data).to.be.an('object');
      expect(response.data).to.have.property('AAPL');
      expect(response.data).to.have.property('MSFT');
      expect(response.data).to.have.property('GOOGL');
    });
  });
  

  describe('GET /price/:symbol', function() {
    it('Deve retornar o preço atual de uma ação', async function() {
      const symbol = 'AAPL';
      const response = await axios.get(`${serverUrl}/price/${symbol}`);

      expect(response.status).to.equal(202);
      expect(response.data).to.be.an('object');
      expect(response.data).to.have.property('symbol');
      expect(response.data).to.have.property('price');
    });
  });
});
