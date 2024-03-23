function getSum() {
  let counter = 0;
  return function(num) {
    return counter += num;
  }
}
const count = getSum(); 
console.log(count(3));   
console.log(count(5));   
console.log(count(20));