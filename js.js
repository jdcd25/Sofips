//Print
console.log("HELLO WORLD");

//var = whole | let = within scope | const = value never changing
const name = "Joshua";
var age = 21;
var address;  //DECLARATION
address = "tibag"; //ASSIGNMENT

//OPERATIONS
var sum = 1+1;
var difference = 1-1;
var product = 2*5;
var quotient = 10/5;
var remainder = 10%3;
//Display total
console.log("The total values are ", sum, difference,  product,  quotient, remainder);
//Increment & Decrement
sum++;
product--;
console.log("For the increment and decrement ", sum, product);

/**COMPOUND ASSINMENT WITH AUGMENTED
 * +=, -=, *=, /=
 * EXAMPLE instead of a = a + 12, we can just do a+=12
 */

//Display "" in a print method using \
var Str = "I said \"Hello World\" in my first print method";
console.log(Str);

//Use .lenth to find length of a string
lengthOfName = name.length;
console.log("This is the length of name ", lengthOfName);

//Arrays
var myArray = "Hello World";
var firstLetter = myArray[0];
console.log(firstLetter);

//Word Blank
function wordBlanks(myNoun, myAdjective, myVerb, myAdverb){
    var result = " ";
    return result; 
}
console.log(wordBlanks("dog", "big", "ran", "quickly"));

//https://www.youtube.com/watch?v=PkZNo7MFNFg&ab_channel=freeCodeCamp.org 32:34