var arr1 = [];
var arr2 = [];
var arr3 = [];
var myHash = {}; // New object

var q1 = "What is your favourite class at UBC?";
var q2 = "Which of UBC's majors have the most intelligent students?";
var q3 = "Who is your favourite UBC professor?";

var randNum;
var storeSelectedQ;

myHash[q1] = arr1;
arr1.push("Any History class with Tara Mayer!! SHE IS A GODDESS!");
arr1.push("HIST388");
arr1.push("COMM385");

myHash[q2] = arr2;
arr2.push("Computer Science! No Doubt");
arr2.push("All Engg majors");
arr2.push("Any STEM major lmao");

myHash[q3] = arr3;
arr3.push("Tara Mayer DUHHH");
arr3.push("Sebastian Prange");
arr3.push("Ali Madooi");

(function() {
  randNum = Math.floor(Math.random() * Object.keys(myHash).length); //gives random interger i, 0 <= i < length
}()); //IIFE to automatically invoke this function

for (i = 0; i < Object.keys(myHash).length; i++) {
  if (randNum === i) {
    var currQ = prompt("YOUR QUESTION: " + Object.keys(myHash)[i]);
    document.getElementById("que").innerHTML = Object.keys(myHash)[i];
    document.getElementById("ans").innerHTML = currQ;
    myHash[Object.keys(myHash)[i]].push(currQ);
    showAllAnswers(myHash[Object.keys(myHash)[i]])
  }
}

function showAllAnswers(arr) {
  alert (arr);
        for (var i=0; i < arr.length; i++) {
        document.getElementById("allAns").innerHTML = arr[i];

        //print it during each iteration -- this can be done. figure it out.
        //it should save the answers submitted so far - but how? unless I'm using a DataBase of some sort?
        //since each refresh causes the program to restart again
        }
}
