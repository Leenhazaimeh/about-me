  'use strict';
alert ("Hello  ");
let yourname =prompt("what is your name pleas?");
//console.log("welcome"+ yourname);
alert ("welcome _"+ yourname);

alert ("let me tell you about who I am....by gussing game :)");
alert ("do you think you are good at guss !");
alert("lets start use only yes / no or y/n");
let answer1 =prompt ("do you think I am older than you ?" );
//console.log("the answer for Q1 :"+ "my old is 26 ");
answer1=answer1.toLowerCase();
switch (answer1) {
    case'yes':
    case 'y':
        alert("WHAT !! no you are the older :D");
        break;

    case 'no':
        case 'n':
        alert("so you are above than 26 years ");
        break;
}

let answer2 =prompt ("do you think I am singel?");
//console.log("the answer for Q2 :"+ "I am marrid");

answer2=answer2.toLowerCase();
switch (answer2) {
    case 'yes':
        case 'y':
        alert("yes that's rghit I am marrid from 4 years");
        break;

    case 'no':
        case 'n':
        alert("NO I am not singel :D");
        break;
}

let answer3 =prompt ("do you think I have a childs ? can you guss ?")
//console.log("the answer for Q3 :"+ "I have a childs");
answer3=answer3.toLowerCase();
switch (answer3) {
    case 'no':
        case 'n':
        alert("OObS NOo I have 2 childs")
        
        break;

  case 'yes':
      case 'y':
        alert("yes I have 2 childs")
        break;
}

let answer4 =prompt ("do you think they are girls?");
//console.log("the answer for Q4 :"+ "2 girls");
answer4=answer4.toLowerCase();
switch (answer4) {
    case 'no':
        case 'n':
        alert("NOO they are girls");
        break;

    case 'yes':
        case 'y':
        alert ("YES tow beautiful girls");
        break;
}
let answer5 =prompt ("do you think I prefares shawerma on the pitza?")
//console.log("the answer for Q5s :"+ "i like both");
answer5=answer5.toLowerCase();
switch (answer5) {
    case'yes':
    case 'y':
        alert("yes , I  like both ;D");
        break;

    case 'no':
        case 'n':
        alert ("yes , I like both");
        break;
}
alert("nice to meet you-" +yourname)