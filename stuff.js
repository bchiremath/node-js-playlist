var counter = function(arr){
  return "There are " + arr.length + " elements in the array";
};

var adder = function(a,b){
  return `${a} + ${b} = ${a+b}`;
};

var pi = 3.142;

module.exports = {
  counter: counter,
  adder:adder,
  pi:pi
};
