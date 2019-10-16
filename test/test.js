/*jshint esversion: 8 */
const expect = require('chai').expect;
const request = require('supertest');
// Include your express app 
const app = require('../app');

// Test for the rendering of home page route
describe('GET the main page', function (){
    it('renders the main page', (done) =>{
        request(app).get('/').expect(200, done);
    });
});