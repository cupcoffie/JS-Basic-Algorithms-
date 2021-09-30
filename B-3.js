//3. Sum of Printed Numbers

//Write a program that will print all the numbers from 1 to 135 AND the sum of the numbers that have been printed so far. Your output should look similar to this:

//Number is: 0 Sum: 0, Number is: 1 Sum: 1, Number is: 2 Sum: 3, Number is: 3 Sum: 6
// pseudo code 
//1- make a variable sum with value 0
// 2- for loop to count the numbers then add one to increase until 135
// 3- sum is the number +  sum so the two variable 
// 4- print the result  
//diagram  
// 

//code
let sum =0;
for (let i = 0; i <= 135; i++) {
   sum =i+sum;
  console.log('number is =', i, 'sum =', sum,);
    
}
