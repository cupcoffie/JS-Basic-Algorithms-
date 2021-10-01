//Get Average

//Given an array X, write a program that will return the average
// value of all elements in the array. 
//For example, for array X = [2,1,3] your output should be 2.

// pseudo code
// 1- first we will create array name x and set element in it.
// 2-name variable Average and Avr = [0].
// 3-for loop to read the elements.




//code
let x= [1, 3, 5, 7, 9, 11];
let Avr= 0;

for (let i = 0; i < x.length; i++) {
   Avr += x[i];
  
    
}
Avr /= x.length;
console. log (Avr);