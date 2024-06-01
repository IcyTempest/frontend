for (let i = 1; i <= 5; i++) {
  for (let j = 1; j <= i; j++) {
    // eslint-disable-next-line no-undef
    process.stdout.write(`${j}`)
  }
  console.log('')
}
