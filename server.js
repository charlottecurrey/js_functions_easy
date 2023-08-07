// Run node server.js to start

//Some vocalubary

//Construction of a function example

function myFunction(myVar /* #1a */, myOtherVar = 2 /* #1b */) {
  //local scope i know what myVar is /* #2 *
  return myVar + myOtherVar;
}
//out here i dont know what myVars is /* #2 *
//myVar //returns undefined error here

//a function call/ execution
myFunction(1, 2); /* #3a */
myFunction(7); /* #3b */

//myVar and myOtherVar are called arguments these are values that get passed in they have a local scope see note /* #1 */
//A local scope meaning they can only be access in here see note /* #2 */
//Notice My function is called in two different ways see note /* #3 */
/* #3b */ //3b only has one argument because #1b has a default value making an optional value

//Try to use these tools to solve the below

const data = require("./data");

console.log(data);

/*
 * create a function that returns the first person in the array first name
 * */

function hi(data) {
  return data[0].firstName;
}

/*
 * create a function that loops through the dataset and adds it to a string and return that
 * */

function hiAll(data) {
  let str = "";
  data.map((d) => {
    str += d.firstName + " ";
  });
  return str;
}

/*
 * Create a function that will combined the first name and last name into a new object key
 * "fullName" and return the object
 * */

function addFullName(data) {
  for (let i = 0; i < data.length; i++) {
    data[i].fullName = data[i].firstName + " " + data[i].lastName;
  }
  return data;
}

console.log(typeof addFullName(data));

/* Create a function that returns the person matching the id as arguments */

/* Create a function that add a new person as an argument to the dataset and returns that array */

/* Create a function that reorganizes the data and adds a person as a child based on the parent key */

/* creates a function that organizes people by their last name */

/* creates a function that removes a person from their by passing an id as an argument */

module.exports = { hi, hiAll, addFullName };
