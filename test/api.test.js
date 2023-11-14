// const assert = require('chai').assert;
// describe('Simple Test', () => {
//  it('should pass', () => {
//    assert.equal(1, 1);
//  });
// });

// tests/api.test.js
const assert = require('chai').assert;
const request = require('supertest');
const app = require('../server'); // Assurez-vous que le chemin est correct

class APITestSuite {
  constructor() {
    this.app = app;
  }

  run() {
    describe('API', () => {
      it('should return "Hello, World!" when GET /', (done) => {
        request(this.app)
          .get('/')
          .expect(200)
          .end((err, res) => {
            if (err) {
              done(err);
              return;
            }
            assert.equal(res.text, 'Hello, World!');
            done();
          });
      });

      // Add more test cases as needed

      // Add a hook to shut down the server after all tests are completed
      after((done) => {
        request(this.app)
          .get('/shutdown')
          .expect(200)
          .end((err, res) => {
            if (err) {
              done(err);
              return;
            }
            assert.equal(res.text, 'Shutting down the server...');
            done();
          });
      });
    });
  }
}

const apiTestSuite = new APITestSuite();
apiTestSuite.run();









