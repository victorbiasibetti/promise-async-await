function f1() {
    return new Promise(resolve => {
        setTimeout(() => {
          console.log('f1 - ', Date.now())
          resolve();
        }, 2000);
      });
}

function f2(){
    return new Promise(resolve => {
        setTimeout(() => {
          console.log('f2 - ', Date.now())
          resolve();
        }, 2000);
      });
}

(async () => {
    console.log('begin')
    await f1();
    await f2();
    console.log('end')
})();


// (() => {
//     console.log('begin')
//     f1();
//     f2();
//     console.log('end')
// })();