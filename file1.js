(function(){
  var fib = function(N) {
    var ret = 1;
    for (var i = 2; i <= N; i++) {
      ret *= i;
    }
    return ret;
  };
  console.log(fib(3));
})()