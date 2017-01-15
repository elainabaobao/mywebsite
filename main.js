//Create an alert box that alerts the user in the browser. It should say "Hello World". 

alert("Hello World")


//Create two variables assigned to two numbers. Add them together and output the result to the console.

var vone= 2;
var vtwo= 4;

var total = vone + vtwo;
console.log (total);

//Create two variables assigned to two strings. Concatenate them together and output the result to an alert. (e.g. when we concatenate the string "great" and the string "student" you get "greatstudent")

var wordone= "Hi";
var wordtwo="People!";

var words = wordone+" "+ wordtwo;
alert(words);

//Create an object that holds information about you! This object should have a firstName, lastName, city, state and zip key with appropriate values matching . Print each property out to the console.

var me= {firstName:"ling", lastName:"chen", city:"nyc", state:"ny", zip:10004};
console.log(me);

//Write a conditional that checks if a variable is less than 10. If it is, alert the user that the variable is less than 10. If it is not, let the user know what the variable was and that it was greater than 10.

function check(num){
   if(num<10){
       console.log("The variable is less than 10.")
   } else{
       console.log(num +" "+"is greater than 10")
   }
}

//Create a while loop that counts down from 100 to (including) 0. Log each number to console.

var num=100
while (num>=0){
    console.log(num);
    num--;
}
