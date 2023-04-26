

const fizzbuzz = (a) => {

if ((a % 3 === 0) && (a % 5 === 0)) {
  return console.log('FizzBuzz')
} else if ( a % 3 === 0) {
  return console.log('Fizz')
} else if (a % 5 === 0) {
  return console.log('Buzz')
} else {
  return console.log(a)
}
}

module.exports = fizzbuzz