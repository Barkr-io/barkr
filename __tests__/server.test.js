const request = require('supertest');
const server = 'http://localhost:3000';
const fs = require('fs');
const path = require('path');

describe('Route integration', () => {
    describe('/', () => {
        describe('GET', () => {
            it('responds with 200 status and text/html content type', () => {
                return request(server)
                .get('/')
                .expect('Content-Type', /text\/html/)
                .expect(200);
            });
        });
    });

    describe('/users', () => {
        describe('GET', () => {
            it('responds with 200 status and application/json content type', () => {
                return request(server)
                .get('/user')
                .expect('Content-Type', /json/)
                .expect(200);
            });
    
            const mockUsers = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../server/db/user.test.json')));

            it('users from database json are in body of response', () => {
                return request(server)
                .get('/user')
                .then(res => expect(res.body).toEqual(mockUsers))
            });
        });

        describe('POST', () => {
            it('responds with 200 status and application/json content type', () => {
                return request(mockUsers)
                .post('/user')
                .send({
                    email: "fake@email.com",
                    first_name: "fake",
                    last_name: "user",
                    password:"12345678"
                })
                .expect('Content-Type', /json/)
                .expect(200);
            });
        });
    });
})