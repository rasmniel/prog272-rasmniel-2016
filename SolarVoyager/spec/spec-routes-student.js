var request = require('supertest');
var app = require('../app');

describe('Spec Routes Student Suite', function() {
    'use strict';

    it('shows we can run tests', function() {
        expect(true).toBe(true);
    });

    it('shows renewables route returns an object array with length set to 12', function(done) {
        request(app)
            .get('/renewables')
            .expect(200)
            .expect('Content-Type', /json/)
            .expect(function(response) {
                expect(response.body.result).toBe('Success');
                expect(response.body.renewables.length).toBe(12);
            })
            .end(function(err, res) {
                if (err) throw err;
                done();
            });
    });

    it('call renewables route and show first object contains 2017', function(done) {
        request(app)
            .get('/renewables')
            .expect(200)
            .expect('Content-Type', /json/)
            .expect(function(response) {
                expect(response.body.result).toBe('Success');
                expect(response.body.renewables[0].Year).toBe('2017');
            })
            .end(function(err, res) {
                if (err) throw err;
                done();
            });
    });

});
