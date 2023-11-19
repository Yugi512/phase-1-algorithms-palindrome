function isPalindrome(word) {
  if( word === word.split("").reverse().join("")){
    return true;
  } else if( word !== word.split("").reverse().join("") ){
    return false
  }
}

/* 
  // function has to rewrite the arg baackwards and if it is readable forward and backwards we return true if it doesn we return false
  // write code to reverse the word passed through 
*/

/*
  so I learned how to use built in functions and I used the .split('') to split up the string and then use the .reverse() to then reverse the array that was created by the .split() then i used the .join('') to combine them into one word 
  i used that and the passsed in arguement and compared them and if they matched it would return true and if it didnt the else if would catch it and then if that was true it would then return false
  
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
