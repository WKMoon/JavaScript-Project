var numbers = [];



function primeChecker(arr) {


    let result =[];
    let resultElem;

    for(var a = 0; a < 10; a++){
        arr.push(Math.floor(Math.random() * 20));
        console.log(arr);
    }//end for
    
    
    for( var i =0; i <arr.length; i++){
        var checkBool = false;
        if(arr[i] < 2){
            checkBool = true;
        }
            for(var j =2; j <arr[i]; j++){
                if(arr[i] % j === 0){
                    checkBool = true;
                    break;     
                }//end if
            }//end for
    
        if(checkBool == true){
            resultElem = arr[i]+ "-no";
            result.push(resultElem);

        }
        else{
            resultElem = arr[i]+ "-yes";
            result.push(resultElem);

        }
    }//end for
    return result.toString();
}//end function

console.log(primeChecker(numbers));

// https://www.freecodecamp.org/learn/
