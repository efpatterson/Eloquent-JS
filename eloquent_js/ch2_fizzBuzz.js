for (let current = 1; current <= 100; current += 1) {
  if (current % 3 === 0) {
    console.log('Fizz')
  } else if (current % 5 === 0) {
    console.log('Buzz')
  } else {
    console.log(current)
  }
}
