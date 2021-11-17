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
  // only do detection once
  const isFizz = index % 3 === 0
  const isBuzz = index % 5 === 0

  // store result in one place
  let result;

  if (isFizz && isBuzz ) {
    result = ('FizzBuzz')
  } else if (isFizz) {
    result = ('Fizz')
  } else if (isBuzz) {
    result = ('Buzz')
  } else {
    result = (index)
  }

  console.log(index, result)
}

export default ''
