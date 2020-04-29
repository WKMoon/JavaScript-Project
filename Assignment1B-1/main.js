var string1 = "Triscuit";

var string2 = "Cracker";


function reverse(string){

    var Upper =string.toUpperCase();
    var first = Upper.charAt(0);
    var last = Upper.charAt(Upper.length - 1);
    if(first == last)
    {
        var reversed = string.split("").reverse().join("");
    }
    else{
        reversed = string.split("");
        reversed.pop();
        reversed.shift();
        reversed = reversed.join("");
    }

    return reversed;
}//end function//

console.log(reverse(string2));

// https://www.freecodecamp.org/learn/
// https://medium.com/better-programming/5-ways-to-reverse-a-string-in-javascript-466f62845827


