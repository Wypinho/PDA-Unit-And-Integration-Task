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

  it('can divide two integers correctly', function(){
    calculator.numberClick(21)
    calculator.operatorClick('/')
    calculator.divide(7)
    assert.equal(calculator.runningTotal, 3)
  })

  it('can concatenate number clicks', function(){
    calculator.numberClick(2)
    calculator.numberClick(2)
    calculator.numberClick(5)
    assert.equal(calculator.runningTotal, 225)
  })

  it('can chain operations together', function(){
    calculator.numberClick(2)
    console.log(calculator.previousTotal);
    console.log(calculator.runningTotal);
    calculator.operatorClick('*')
    calculator.multiply(2)
    console.log(calculator.previousTotal);
    console.log(calculator.runningTotal);
    calculator.operatorClick('+')
    console.log(calculator.previousTotal);
    console.log(calculator.runningTotal);
    calculator.add(5)
    console.log(calculator.previousTotal);
    console.log(calculator.runningTotal);
    calculator.operatorClick('=')
    assert.equal(calculator.runningTotal, 9)
  })

});
