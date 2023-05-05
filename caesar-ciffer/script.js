
// Write a function called caesarCipher that takes in two arguments: a string to
// encode and a number representing the shift. The function should shift each letter
// of the string by the shift amount to the right in the alphabet. For example, if the
// shift is 3, then "a" becomes "d", "b" becomes "e", "c" becomes "f", and so on




// function encrypt(str,shift){
//     var letter=str.split("");

//     for(let i=0;i<letter.length;i++){
//         let charCode=letter[i].charCodeAt(0); //converts into ascii value A-65

//         if(charCode>=65 && charCode<=90) { // for upper case
           
//             charCode=((charCode-65+shift)%26)+65;
//             letter[i]=String.fromCharCode(charCode);
//         }
//         if(charCode>=97 && charCode<=122) { // for lower case
           
//             charCode=((charCode-97+shift)%26)+97;
//             letter[i]=String.fromCharCode(charCode);
//         }
//     }
//     return letter.join("");
// }
// console.log(encrypt("abc",3))

