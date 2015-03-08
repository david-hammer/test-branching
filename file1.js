(function(){
  var fib = function(N) {
    if (N <= 1){
      return 1;
    } else {
      return N * fib(N-1);
    }
  };
  console.log(fib(5));
})()