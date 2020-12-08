function throwCoin() {
  return new Promise((res, rej) => {
    // 0 will represent tail
    // 1 will represent heads
    const side = Math.floor(Math.random() * 2); // 1 or 0
    const randomTime = Math.floor((Math.random() * 4) + 1) * 1000 // 1000/2000/3000/4000
    if (randomTime > 3000) {
      rej(new Error('Coin was thrown too high!'));
    } else {
      setTimeout(() => {
        if (side) {
          res('heads');
        } else {
          res('tails');
        }
      }, randomTime)
    }
  });
}

console.time('timer');
throwCoin()
  .then((a) => {
    console.log('the coin is', a);
    console.timeEnd('timer');
  })
  .catch((err) => {
    console.log(err);
  })