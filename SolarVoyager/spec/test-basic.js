/**
 * Created by charlie on 10/7/15.
 */

define(['home'], function(home) {

    'use strict';

    describe('Home Page Suite', function() {

        it('expects true to be true', function() {
            expect(true).toBe(true);
        });

        // I like capital first letters :)
        it('expects home.color to be red', function() {
            expect(home.color).toBe('Red');
        });

        it('expects home.size to be big', function() {
            expect(home.size).toBe('Big');
        });

    });

});
