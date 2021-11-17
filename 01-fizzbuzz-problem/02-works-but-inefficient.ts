/**
 * Write a program that prints the integers from 1 to 100 (inclusive).
 * But:
 *  - for multiples of three, print Fizz (instead of the number)
 *  - for multiples of five, print Buzz (instead of the number)
 *  - for multiples of both three and five, print FizzBuzz (instead of the number)
 */

/**
 * 1
 * 2
 * 3 Fizz
 * 4
 * 5 Buzz
 * 6 Fizz
 */

for (let index = 1; index < 101; index++) {
  if (index % 3 === 0 && index % 5 ===0 ) {
    console.log(index, 'FizzBuzz')
  } else if (index % 3 === 0) {
    console.log(index, 'Fizz')
  } else if (index % 5 === 0) {
    console.log(index, 'Buzz')
  } else {
    console.log(index);
  }
}

export default ''
