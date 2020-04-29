var first = [1,2,3,6,9,34,2,6];
var second = [3,2,7,5,6,7,3,8,9,10,23,2,1,2,3];
var third = [100,101,102,3,4,5,6,9];

function longestStreak(arr){

let stored = [];
let result = [];

    for(let i = 0; i<arr.length; i++){
        let checkRight = arr[i+1] - arr[i];
        let checkLeft = arr[i] - arr[i-1];

        stored.length === 0?
        stored.push(arr[i]):

        stored.length === 1 && checkRight === 1?
        stored.push(arr[i]):

        stored.length > 1 && checkLeft === 1?
        stored.push(arr[i]):

        checkRight === 1?
        (result = stored, stored = [], stored.push(arr[i])):


        result.length < stored.length?
        result = stored:

        result.reduce((a, b) => a + b, 0) < stored.reduce((a, b) => a + b, 0)?
        result = stored: null;

    }//end for
    return result.reduce((a, b) => a + b, 0);
}//end function//


console.log(longestStreak(second));

// https://stackoverflow.com/questions/1230233/how-to-find-the-sum-of-an-array-of-numbers




