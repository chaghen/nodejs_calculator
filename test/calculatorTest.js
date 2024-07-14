/** 
 * Testing operations and validation functions
 * with Mocha and Node.js Assert module.
 *
 */

import assert from 'assert';
import { addition,
    multiply,
    soustraction,
    division
   } from '../public/calculatorOperation.js'



it('correctly calculates the sum of 5 and 1', () => {
  const result = addition(5,1);

assert.equal(6,result);

});

it('correctly calculates the soustraction of 20 and 8 ', () => {
    const result = soustraction(20,8);
  
  assert.equal(12,result);
  
  });

  it('correctly calculates the multiplication of 9 and 3', () => {
    const result = multiply(9,3);
  
  assert.equal(27,result);
  
  });

  it('correctly calculates the division of 15 and 3', () => {
    const result = division(15,3);
  
  assert.equal(5,result);
  
  });
