
const request = require('supertest');
const expect = require('expect');
const app = require('./server').app;

describe('server', () => {

    it('should return hello world response', (done) => {
        request(app)
            .get('/')
            .expect(200)
            .expect('Hello, Wolrd!')
            .end(done);
    });

    it('should return users response', (done) => {
        request(app)
            .get('/users')
            .expect(200)
            .expect((res) => {
                expect(res.body)
                    .toBeA('array')
                    .toInclude({ name: 'daniel', age: 45 })

            })
            .end(done);
    });
});
