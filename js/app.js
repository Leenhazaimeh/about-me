  'use strict';

alert ("Hello  ");
let yourname =prompt("what is your name pleas?");
//console.log("welcome"+ yourname);
alert ("welcome _"+ yourname);

alert ("let me tell you about who I am....by gussing game :)");

alert("lets start use only yes / no or y/n");
let scour =0;

function question1 (){
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
            scour++;
            break;
    }
    
}


function question2 (){
    let answer2 =prompt ("do you think I am singel?");
//console.log("the answer for Q2 :"+ "I am marrid");

answer2=answer2.toLowerCase();
switch (answer2) {
    case 'yes':
        case 'y':
        alert("NO I am not singel :D");
        break;

    case 'no':
        case 'n':
        alert("yes that's rghit I am marrid from 4 years:D");
        scour++;
        break;
}



}


function question3 () {

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
            alert("yes I have 2 childs");
            scour++;
            break;
    }
    
}

function question4() {


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
            scour++;
            break;
    }

}

function question5(){
    let answer5 =prompt ("do you think I prefares shawerma on the pitza?")
    //console.log("the answer for Q5s :"+ "i like both");
    answer5=answer5.toLowerCase();
    switch (answer5) {
        case'yes':
        case 'y':
            alert("yes , I  like both ;D");
            scour++;
            break;
    
        case 'no':
            case 'n':
            alert ("yes , I like both");
          
            break;
    }


}

function question6 (){

    let mytall = prompt ('how long I am');
mytall=parseInt(mytall);
console.log(mytall, typeof mytall);
for (let i = 1 ; i <4 ; i++ ){
    console.log(mytall, typeof mytall);
    if (mytall == 160){
      alert ("GREAT you will have an extra point");
      scour++;
      break;
    }else if (mytall>170){
        mytall =prompt('how long Iam?')
        alert("too high , try again")
   

}
else if (mytall <150){
    alert("too low, try again ")
    mytall =prompt('how long Iam?')
}
    else{
      alert('wrong answer try again');
      mytall =prompt('how long Iam?')
  
      }     
  }


  alert("my tall is 160");
  
}
let flag = false;

function question7 () {
    let myluckynum = ['8','7','2'];
    let ans = prompt ('what is my lucky numbers?');
    for(let j=1;j<6;j++){
      
  
        for (let i =0;i<myluckynum.length;i++){
            if (ans ===myluckynum[i]) {
                alert('my lucky numbers is '+ myluckynum);
                scour++;
             flag =true ;
  
                
            }
            
             
           
            
        }if (flag===true){
          break;
  
        }
        ans =prompt('try again what is my lucky numbers?');
       
    }

    
}



//   console.log(myluckynum.includes('2'));
//   console.log(myluckynum.includes('9'));
  
  question1();
  question2();
  question3();
  question4();
  question5();
  question6();
  question7();






 
alert("nice to meet you-" +yourname+"  -your score   :"+ scour);
