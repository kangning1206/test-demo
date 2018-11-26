/*
* @Author: knb
* @Date:   2018-11-26 11:33:01
* @Last Modified by:   knb
* @Last Modified time: 2018-11-26 11:37:39
*/


var multiply = require('../../src/multiply.js');
var expect = require('chai').expect;

describe('乘法函数的测试', function() {
  it('3 加 9 应该等于 27', function() {
    expect(multiply(3, 9)).to.be.equal(27);
  });
});