//8. Number to String

//Write a program that takes an array of numbers and turns the negative
// values to strings. For example, for array X = [1,-4,0,-1] the output
// should be [1,'Turing,0,'Turing'].

// pseudo code 
// 1- make a variable x  for array
// 2- for loop to count the elements of the array. 
// 3- if statement to find the x[i]=-x[i] then replace it with turning.
// 4- print the result.

//code
let x= [1,-3,8,5,-40];
for (let i = 0; i < x.length; i++) {
   if(x[i]< 0){
    x[i]= 'turing';
   }
}
console. log(x);
