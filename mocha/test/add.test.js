/*
 * @Author: knb
 * @Date:   2018-11-26 11:04:55
 * @Last Modified by:   kangning1206
 * @Last Modified time: 2018-11-26 18:42:35
 */

var add = require('../src/add.js');
var expect = require('chai').expect;

describe('加法函数的测试', function() {
  it('1 加 1 应该等于 2', function() {
    expect(add(1, 1)).to.be.equal(2);
  });

  it('1 加 1 应该等于 2', function() {
    expect(add(2, 2)).to.be.equal(4);
  });

  // it('0.1 加 0.2 应该等于 0.3', function() {
  //   expect(add(0.1, 0.2)).to.be.equal(0.3);
  // });


  before(function() {
    // 在本区块的所有测试用例之前执行
    console.log('before');
  });

  after(function() {
    // 在本区块的所有测试用例之后执行
    console.log('after');
  });

  beforeEach(function() {
    // 在本区块的每个测试用例之前执行
    console.log('beforeEach');
  });

  afterEach(function() {
    // 在本区块的每个测试用例之后执行
    console.log('afterEach');
  });



});
