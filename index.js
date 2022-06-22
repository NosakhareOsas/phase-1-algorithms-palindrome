
  // Write your algorithm here
  /**
   * 1. create and array of the input string
   * 2. enter each value of the string in reverse order
   * 3. convert the array to string
   * 4. compare the new string to the input string
   * 5. return result
   */



  //Add your pseudocode here
  /**
   * initialize array
   * iterate through string
   *   unshift each value to array
   * join all values to new string
   * if input string === new string
   *    return true
   * else return false
   * 
   */


/*
  Add written explanation of your solution here
*/

const isPalindrome = (inputStr) => {
  const strArray = []
  for (let letter of inputStr){
    strArray.unshift(letter)
  }
  newStr = strArray.join('')
  if (inputStr === newStr){
    return true
  }else{
    return false
  }
}

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
