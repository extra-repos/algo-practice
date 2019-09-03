//isPrime - Returns true or false, indicating whether the given number is prime.

isPrime(0)                          // false
isPrime(1)                          // false
isPrime(17)                         // true
isPrime(10000000000000)             // false

function isPrime (num){
  for (let i=num-1; i>1; i--){
  if (num % i === 0 ){
    return false
    } 
  } return true
}
isPrime(8)


//factorial - Returns a number that is the factorial of the given number.

factorial(0)                        // 1
factorial(1)                        // 1
factorial(6)                        // 720

function factorial (num){
  let sum = 1
  for (let i = num; i > 0; i--){
    sum *= i
  } return sum
}
factorial(6)

//fib - Returns the nth Fibonacci number.

fib(0)                              // 0
fib(1)                              // 1
fib(10)                             // 55
fib(20)                             // 6765

function fib (num){
  if (num === 0){
    return 0
  } else if(num === 1){
    return 1
  } else {
    return fib(num-1) + fib(num-2)
  }
}
fib(10)

//isSorted - Returns true or false, indicating whether the given array of numbers is sorted.
function isSorted (arr){

  for (let i =0; i<arr.length; i++){
  for (let j = i+1; j<arr.length; j++){
    if (arr[i]> arr[j]){
      return false
    } 
  }
  } return true
}
isSorted([])                        // true
isSorted([-Infinity, -5, 0, 3, 9])  // true
isSorted([3, 9, -3, 10])            // false

//filter - Implement the filter function.
function filter(arr, arg) {
  let lessThan = [];
  for (let i = 0; i < arr.length; i++) {
    if (arg(arr[i])) {
      lessThan.push(arr[i]);
    }
  }
  return lessThan;
}
filter([1, 2, 3, 4], n => n < 3); // [1, 2]


//
