const dateOfBirth=document.querySelector("#date-of-birth");
const luckNumber=document.querySelector("#lucky-number");
const checkNumberBtn=document.querySelector("check-number");



function checkNumberIsLucky(){

const date=dateOfBirth.value;
const sum=calculateSum(date);
console.log(sum);


}



checkNumberBtn("click",function getvalues(){
    
    console.log(dateOfBirth.value,luckyNumber.value);

 })