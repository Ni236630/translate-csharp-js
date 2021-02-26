// Put your code here

console.log("Let's roll some dice, baby!")
console.log("---------------------------")



for (i = 0; i < 10; i++){
    
    let die1 = Math.floor(Math.random()*5)+1
    
    let die2 = Math.floor(Math.random()*5)+1
    
    let message = `${die1} + ${die2}  = ${die1 + die2}`

   if(die1 === die2){
        console.log( message + " Doubles ")
   } 
   else
   {
        console.log(message)
   }
  
}

