/**
 * Created by charlie on 10/7/15.
 */

define(['jquery', 'renewables', 'clientRenewables'], function($, renewables, clientRenewables) {
    'use strict';

    describe('Renewables Suite', function() {

        it('expects true to be true', function() {
            expect(true).toBe(true);
        });

        it('expects control.init to be defined', function() {
            expect(renewables.init).toBeDefined();
        });

        // This is not what the test actually does.
        // It checks whether the getRenewable method fills up the renewablesList array...
        it('expects getRenewable to be defined', function() {
            spyOn($, 'getJSON').and.callFake(function(url, success) {
                success({
                    renewables: clientRenewables
                });
                return {
                    fail: function() {
                        return {
                            done: function() {
                                return {
                                    always: function() {}
                                };
                            }
                        };
                    }
                };
            });
            renewables.getRenewable();
            // console.log('Keys: ' + Object.keys(renewables));
            // console.log('renewableslist ' + renewables.renewablesList);
            expect(renewables.renewablesList[0].Year).toBe('2017');
        });

    });

});
