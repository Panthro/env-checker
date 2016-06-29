'use strict';
var envChecker = require('./env-checker');

var assert = require('assert');

describe('Initialization', ()=> {
    it('should return error when bad params are passed', ()=> {
        try {
            envChecker(null);
        } catch (err) {
            assert(err);
        }

        try {
            envChecker('');
        } catch (err) {
            assert(err);
        }

        try {
            envChecker({});
        } catch (err) {
            assert(err);
        }
    });
});
