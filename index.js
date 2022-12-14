function hasTargetSum(array, target) {
  // Write your algorithm here
  //iterate trhough the whole array
  for(let i=0; i < array.length; i++){
    //continue iteration to check if number is equal to that of x 
    for (let j= i+1; j < array.length; j++){
      if (array[i]+ array [j] === target){
        return true}
        //if not continue iterating
    }
    }
      //return false if no answer =x
  return false;
  }

/* 
  Write the Big O time complexity of your function here
  Complexity is O(n*) since nested iterations are involved => 0(n)
*/

/* 
  Add your pseudocode here
  Iterate from the begging of the array to and log each item.
  

  
*/

/*
  Add written explanation of your solution here
 Go through the whole array starting at the array initializer index 0 through to when the stopping
  condition is met, if not iteration continues until condition met is a boolean value
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
