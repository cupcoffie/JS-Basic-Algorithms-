//5. Find Max
//Given an array X, write a program that would find the maximum value of the array.
// Your program should work also work with negative values (eg. X = [2,-3,-1]) and zero.

// pseudo code 
// first we will create array name x and set element in it.
// name value max and max = [0].
// for loop to read the elements.
// then we will have if statement to compere the max with x[i].
// then put the result in max. 
// the result of adding the numbers then we print the result.


//code
let x= [1, 3, -50, 60, 100];
let Max= [0];
for (let i = 0; i < x.length; i++) {
   if (Max < x[i]){
Max = x[i];
   }
}
console. log (Max);
