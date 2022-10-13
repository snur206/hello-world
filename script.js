function addTwoNumbers(firstNumber, secondNumber){
    let sum= firstNumber + secondNumber;
    console.log(sum) 
}

addTwoNumbers(6, 1);

function greetUser(){
    let usersName = prompt ("What is your name?");
    // if(usersName == ""){
    //   usersName = prompt ("What is your name again?");
    // }
    while (usersName == ""){
        usersName = prompt("What was your name???")
}
    document.write("Hello " + usersName + ", Welcome to the spot."); 

}

function guessFavic(){
    let userGuess = prompt("Guess the my favorite flavor?");
    while (userGuess !== "cookies and cream"){
        userGuess = prompt("Nope! Keep guessing.");
    }
}



    function icfan(){
        let icAnswer = prompt("Are you a fan of ice cream?");
    if (icAnswer == "yes"){
        document.write("Me too!!");
        } else if (icAnswer == "no"){
        document.write("You are at the wrong spot.");
    }
}

            
    function scoop(){    
let guess = prompt("How many scoops of ice cream is perfect?");
    if(guess == '3' ){
        console.log("Great answer");
    } else if (guess < 3){
        console.log("hotter");
     } else if (guess > 3){
        console.log("Colder");
     } else {
        console.log("Do not know what that is?");
     }
    }

    function rateMyPage(){
        let rating = prompt("Rate my webpage from 1-5");

        for (let i = 0; i < rating; i++){
            document.write("<img class='cone-pic' src='cone.jpg' alt='pink ice cream cone' />");
        }
    }