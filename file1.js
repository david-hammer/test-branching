(function(){
  var fib = function(N) {
    return (N <= 1) ? 1 : N * fib(N-1);
  };
  console.log(fib(5));
})()