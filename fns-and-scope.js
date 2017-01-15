//////////////////PROBLEM 1////////////////////

var name = 'Tyler';
//Create a function called isTyler that accepts name as it's only parameter.
//If the argument you passed in is equal to 'Tyler', return true. If it's not, return false.
function isTyler(name) {
if (name === 'Tyler') {
  return true;
} else {
  return false;
}
}
  //Code Here

//////////////////PROBLEM 2////////////////////


//Create a function called getName that uses prompt() to prompt the user for their name, then returns the name.

function getName(){
  var name = prompt("what is your name");
   return name;
}
  //Code Here


//////////////////PROBLEM 3////////////////////



//Create a function called welcome that uses your getName function you created in the previous problem to get the users name,
//then alerts "Welcome, " plus whatever the users name is.

  //Code Here
  function welcome(){
    var name = getName();
    alert("Welcome, " + name);
  }


//////////////////PROBLEM 4////////////////////




//What is the difference between arguments and parameters?
 // A parameter is a variable in a method definition. When a method is called, the arguments are the data you pass into the method's parameters.



//////////////////PROBLEM 5////////////////////



// //What are all the falsy values in JavaScript and how do you check if something is falsy?
// if (false)
// if (null)
// if (undefined)
// if (0)
// if (NaN)
// if ('')
// if ("")
// if (document.all) [1]
//
//   //Answer Here
// console.log and or try to return false/true
//var c = (false == 0); // true
// var c = (false == 0); // true
// var d = (false == ""); // true
// var e = (0 == ""); // true


//////////////////PROBLEM 6////////////////////



//Create a function called myName that returns your name
  //Code Here
function myName (){
  return 'ryan';
}


//Now save the function definition of myName into a new variable called newMyName

  var newMyName = myName;

//Now alert the result of invoking newMyName
  var result = newMyName();
  alert(result);


//////////////////PROBLEM 7////////////////////



//Create a function called outerFn which returns an anonymous function which returns your name.

  function outerFn(){
    return function () {
      return "ryan";
    }
}
//Now save the result of invoking outerFn into a variable called innerFn.
var innerFn = outerFn();



//Now invoke innerFn.
innerFn();
