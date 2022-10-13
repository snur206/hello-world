function addTwoNumbers(firstNumber, secondNumber){
    let sum= firstNumber + secondNumber;
    console.log(sum) 
}

addTwoNumbers(6, 1);

function greetUser(){
    let usersName = prompt ("What is your name?");
    if(usersName == ""){
        usersName = prompt ("What is your name again?");
    }
    document.write("Hello " + usersName + ", You are at the right spot."); 

}
greetUser()

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