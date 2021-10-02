//Eliminate the Negatives
//Given an array X, write a program that will remove all negative
// numbers and replace them with a 0.
// For example, for array X = [2,-1,4,-3] the output of your program should be [2,0,4,0].

// pseudo code 
// 1- make a variable x  for array
// 2- for loop to count the elements of the array. 
// 3- if statement to find the x[i]=0 then replace it with 0
// 4- print the result

//code

var x=[1,-4,66,-8,55];
for (let i = 0; i < x.length; i++) {
    if (x[i]< 0) {
        x[i]= 0;

    }
 } 
  console. log(x);
