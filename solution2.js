/*Find all the numbers in a string and sum them up
For Example...
 sumNumbers(‘1weudh56jdnbfskjn788sdhkfbs90’) to return (935)*/

 function findSumOfNumbers (str) {
     var sum = 0;

    //  var splitedStr = str.split("");
    //  console.log(splitedStr);
     for (var j = 0; j<str.length; j++){
         if(!isNaN(str[j])) {
             sum += Number(str[j]);
         }
     }
     return sum;
 }
 console.log(findSumOfNumbers('sgdt4h6j8k9'));


