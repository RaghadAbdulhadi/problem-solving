'use strict';

// 1) ---------------------
// 
//  using the (findMax) function; return the maximum value in the provided array
//  without using build-in functions.
//  EX:
//  [12, 32, 22, 45, 78, 12, 50] ==> 78
//  
// ------------------------


let arr1 = [12, 32, 22, 45, 78, 12, 50];
const findMax = (arr1)=>{
    let max = arr1[0];
    for(let i = 0; i < arr1.length; i++){ //iterate over each index in the array 
        if (max <= arr1[i+1]){
            max = arr1[i+1];
        }
    }
    return max;
}
console.log(findMax(arr1));

// 2) ---------------------
// 
//  using the (sumNums) function; return the Sum value of the numeric values
//  inside the array (there could be strings inside), without using build-in functions
//  EX:
//  [20, '234', 'car', 41, 20, 'chair'] ==> 81
//  
// ------------------------


let arr2 = [20, '234', 'car', 41, 20, 'chair'];
const sumNums = (arr2)=>{
    let sum = 0;
    for(let i = 0; i < arr2.length; i++){
      if(typeof(arr2[i]) === 'number'){
        sum = sum + arr2[i]
      }
    }
    return sum;
}
console.log(sumNums(arr2));

// 3) ---------------------
// 
//  using the (reverseArray) function; return provided array reversed
//  without using build-in functions
//  EX:
//  ['C#', 'JS', 'Ruby','Python' ] ==> ['Python','Ruby','JS','C#']
// 
// ------------------------
// let arr3 = ['C#', 'JS', 'Ruby','Python'];


/* Using .length
let arr3 = ['C#', 'JS', 'Ruby','Python'];
let newArr = [];
const reverseArray = (arr3)=>{
    for(let i = 0; i < arr3.length; i++){
        newArr[i] = arr3[(arr3.length-1) - i];
    }
    return newArr;
}
reverseArray(arr3);
console.log(newArr);*/

/*Using push method
let arr3 = ['C#', 'JS', 'Ruby','Python'];
let newArr = [];
const reverseArray = (arr3)=>{
    for(let i = 0; i < arr3.length; i++){
        newArr.unshift(arr3[i])
    }
    return newArr;
}
reverseArray(arr3);
console.log(newArr);
*/

//Using reverse array
let arr3 = ['C#', 'JS', 'Ruby','Python'];
let reverseArr;
const reverseArray = (arr3)=>{
    for(let i = 0; i < arr3.length; i++){
        reverseArr = [...arr3].reverse();
    }
    return reverseArr;
}
reverseArray(arr3);
console.log(reverseArr);



module.exports = {findMax , sumNums, reverseArray};