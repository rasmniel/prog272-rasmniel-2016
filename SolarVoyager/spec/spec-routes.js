var request = require('supertest');
var app = require('../app');

describe('Jasmine tests', function() {
    'use strict';

    it('proves true is true', function() {
        expect(true).toBe(true);
    });

    it('renewables', function(done) {
        request(app)
            .get('/renewables')
            .expect(200)
            .expect('Content-Type', /json/)
            .end(function(err, res) {
                if (err) throw err;
                done();
            });
    });

    it('shows we can call renewables route without error and get a 200 back', function(done) {
        request(app)
            .get('/renewables')
            .expect(200)
            .expect('Content-Type', /json/)
            .end(function(err, res) {
                if (err) {
                    throw err;
                }
                done();
            });
    });

    it('renewables first object body', function(done) {
        request(app)
            .get('/renewables')
            .expect(200)
            .expect('Content-Type', /json/)
            .expect(function(response) {
                expect(response.body.result).toBe('Success');
                // console.log(response.body.renewables);
                expect(response.body.renewables[0].Year).toBe('2017');
            })
            .end(function(err, res) {
                if (err) throw err;
                done();
            });
    });

    it('call renewables routes and see that first object body has Year set to 2017', function(done) {
        request(app)
            .get('/renewables')
            .expect(200)
            .expect('Content-Type', /json/)
            .expect(function(response) {
                expect(response.body.result).toBe('Success');
                //console.log(response.body.renewables);
                expect(response.body.renewables[0].Year).toBe('2017');
            })
            .end(function(err, res) {
                if (err) {
                    throw err;
                }
                done();
            });
    });

    it('shows we can call renewableByIndex route and can get a single renewable object by Index', function(done) {
        request(app)
            .get('/renewableByIndex/1')
            .expect(200)
            .expect('Content-Type', /json/)
            .expect(function(response) {
                expect(response.body.result).toBe('Success');
                // console.log(response.body.renewables);
                expect(response.body.renewable.Year).toBe('2016');
            })
            .end(function(err, res) {
                if (err) {
                    throw err;
                }
                done();
            });
    });

    it('can call renewablesByIndexSorted route with an index and gets energy object as sorted array', function(done) {
        request(app)
            .get('/renewablesByIndexSorted/1')
            .expect(200)
            .expect('Content-Type', /json/)
            .expect(function(response) {
                expect(response.body.result).toBe('Success');
                var powers = response.body.sortedEnergy;
                for (var i = 0; i < powers.length - 1; i++) {
                    // console.log(powers[i]);
                    expect(powers[i][1]).toBeLessThan(powers[i + 1][1]);
                }
            })
            .end(function(err, res) {
                if (err) {
                    throw err;
                }
                done();
            });
    });

    it('call renewableByYear and get renewable object with specific year', function(done) {
        request(app)
            .get('/renewableByYear/2016')
            .expect(200)
            .expect('Content-Type', /json/)
            .expect(function(response) {
                // console.log('expect called');
                expect(response.body.result).toBe('Success');
                // console.log(response.body.renewable);
                var renewable = response.body.renewable;
                expect(renewable.Year).toBe('2016');
            })
            .end(function(err, res) {
                if (err) {
                    throw err;
                }
                done();
            });
    });
});