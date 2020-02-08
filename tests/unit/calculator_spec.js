var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('it has a sample test', function(){
    assert.equal(true, true)
  })

  it('can add two integers correctly', function(){
    calculator.numberClick(1)
    calculator.operatorClick('+')
    calculator.add(4)
    assert.equal(calculator.runningTotal, 5)
  })

  it('can subtract two integers correctly', function(){
    calculator.numberClick(7)
    calculator.operatorClick('-')
    calculator.subtract(4)
    assert.equal(calculator.runningTotal, 3)
  })

  it('can multiply two integers correctly', function(){
    calculator.numberClick(3)
    calculator.operatorClick('*')
    calculator.multiply(5)
    assert.equal(calculator.runningTotal, 15)
  })

});
