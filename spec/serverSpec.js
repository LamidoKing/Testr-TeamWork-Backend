const request = require('request');

const base_url = 'http://localhost:3000/api/v1';

describe('Hello World Server', () => {
  describe('GET /', () => {
    it('returns status code 200', (done) => {
      request.get(base_url, (error, response, body) => {
        expect(response.statusCode).toBe(200);
        done();
      });
    });

    it('returns Hello World', (done) => {
      request.get(base_url, (error, response, body) => {
        expect(body).toBe('Hello World');
        done();
      });
    });
  });
});
