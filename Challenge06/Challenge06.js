'use strict';

// 1) ---------------------
// 
//  using the (findMax) function; return the maximum value in the provided array
//  without using build-in functions.
//  EX:
//  [12, 32, 22, 45, 78, 12, 50] ==> 78
//  
// ------------------------


const findMax = (arr1)=>{
    let max = arr1[0];
    for(let i = 0; i < arr1.length; i++){ //iterate over each index in the array 
        if (max <= arr1[i+1]){
            max = arr1[i+1];
        }
    }
    return max;
}

// 2) ---------------------
// 
//  using the (sumNums) function; return the Sum value of the numeric values
//  inside the array (there could be strings inside), without using build-in functions
//  EX:
//  [20, '234', 'car', 41, 20, 'chair'] ==> 81
//  
// ------------------------

const sumNums = (arr2)=>{
    let sum = 0;
    for(let i = 0; i < arr2.length; i++){
      if(typeof(arr2[i]) === 'number'){
        sum = sum + arr2[i]
      }
    }
    return sum;
}

//  EX:
//  ['C#', 'JS', 'Ruby','Python' ] ==> ['Python','Ruby','JS','C#']
// 
// ------------------------
// let arr3 = ['C#', 'JS', 'Ruby','Python'];

const reverseArray = (arr3)=>{
  let newArr = [];
  let index = 0; 
    for(let i = arr3.length - 1; i >= 0; i--){
        newArr[index++] = arr3[i];
    }
    return newArr;
}

module.exports = {findMax , sumNums, reverseArray};