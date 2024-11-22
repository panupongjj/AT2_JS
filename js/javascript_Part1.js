
// create array 
let arraryNum = [11, 5, 8, 3, 25, 16, 31, 45, 14, 20]
console.log("Default Array: "+ arraryNum);

// sort the array 
arraryNum.sort(function(a, b){return a - b}) ;
console.log("Sorted array: "+ arraryNum);

//insert the number to existing array
arraryNum.push(19,23,30);
arraryNum.sort(function(a, b){return a - b}) ;
console.log("Inserted value: "+ arraryNum);

// remove the number from existing array
// spplice( *index , count Of deleteItems ,addData1 on *index, addData 2, AddData3, ... )
arraryNum.splice(arraryNum.indexOf(8),1)
arraryNum.splice(arraryNum.indexOf(31),1)
console.log("Romoved value: "+ arraryNum);

console.log('\n');

function sequentialSearch(arr,value) {
    //loop tgrough array 
    for (let index = 0; index < arr.length; index++) {
        if (arr[index] == value){
            return index; // return index of array if found
        }
    }
    return -1;// return -1  if value not found in the array
}

console.log("Array: "+ arraryNum);
let number = 14 ;
let result = sequentialSearch(arraryNum,number);
console.log(number+" "+(result == -1? 'is not found':'is found')); //Conditional (ternary) operator.

console.log("Array: "+ arraryNum);
let number2 = 46 ;
let result2 = sequentialSearch(arraryNum,number2);
console.log(number2+" "+(result == -1? 'is not found':'is found'));//Conditional (ternary) operator.


function binarySearch(arr,value) {
    //Make sure the input array is storted ascending order
    arr.sort(function(a, b){return a - b}) ;
    
    let leftIndex = 0;
    let rightIndx = arr.length -1;

    while(leftIndex <= rightIndx ){
        let middleIndex = Math.floor((leftIndex + rightIndx) / 2);

        // check if the value is at the middle index.
        if (arr[middleIndex] == value){
            return middleIndex; // return index of array if found
        }
        // check if value < middleValue, cut the all the RIGHT start at middel (search LEFT half)
        if(arr[middleIndex] > value){
            rightIndx = middleIndex-1;
        }else{
            /// if value > middleValue, cut the all the LEFT start at middel (search RIGHT half)
            leftIndex = middleIndex + 1;
        }
    }
    return -1 // return -1 if not found.
}

console.log("Array: "+ arraryNum);
let number3 = 14 ;
let result3 = binarySearch(arraryNum,number3);
console.log(number3+" "+(result3 == -1? 'is not found':'is found')); //Conditional (ternary) operator.

console.log("Array: "+ arraryNum);
let number4 = 46 ;
let result4 = binarySearch(arraryNum,number4);
console.log(number4+" "+(result4 == -1? 'is not found':'is found'));//Conditional (ternary) operator.

console.log("\nArray Test case1 : "+ arraryNum);
let number5 = -3 ;
let result5 = sequentialSearch(arraryNum,number5);
console.log(number5+" "+(result5== -1? 'is not found':'is found'));//Conditional (ternary) operator.

console.log("\nArray Test case2 : "+ arraryNum);
let number6 = 0 ;
let result6 = binarySearch(arraryNum,number6);
console.log(number6+" "+(result6== -1? 'is not found':'is found'));//Conditional (ternary) operator.
// // random value generated
// var y = Math.floor(Math.random() * 10 + 1);

// // counting the number of guesses
// // made for correct Guess
// var guess = 1;

// document.getElementById("submitguess").onclick = function () {
//   // number guessed by user
//   var x = document.getElementById("guessField").value;

//   if (x == y) {
//     alert("CONGRATULATIONS!!! YOU GUESSED IT RIGHT IN " + guess + " GUESS ");
//   } else if (x > y) {
//     /* if guessed number is greater 
//   than actual number*/
//     guess++;
//     alert("OOPS SORRY!! TRY A SMALLER NUMBER");
//   } else {
//     guess++;
//     alert("OOPS SORRY!! TRY A GREATER NUMBER");
//   }
// };
