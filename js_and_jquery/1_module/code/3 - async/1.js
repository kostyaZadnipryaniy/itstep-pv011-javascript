(() => {
    let res = 0
    for (let i = 0; i < 1e9; i++) {
      res += i
    }
    console.log('1js: %d', res)
})()