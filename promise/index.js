const promise1 = new Promise(function(resolve, reject) {
    setTimeout(function() {
        console.log(Date.now());
        resolve('foo');
    }, 3000);
  });
  
  promise1.then(function(value) {
    console.log(1, value);
    // expected output: "foo"
  });
  
  console.log(Date.now());
  console.log(2, promise1);
  // expected output: [object Promise]
  
  