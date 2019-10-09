const request = require('supertest');
const express = require('express');
const path = require('path');
const server = 'http://localhost:3000';
const fs = require('fs');

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

    describe('/getUser', () => {
        describe('GET', () => {
            it('responds with 200 status and application/json content type', () => {
                return request(server)
                .get('/')
                .expect('Content-Type', /json/)
                .expect(200);
            });
        });
    });
})