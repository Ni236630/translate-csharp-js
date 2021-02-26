// Put your code here

let names = ["Nashville", "Hong Kong", "The back yard", "Earth",
"London", "The mall", "Ryman Auditorium", "The Great Wall of China"]

console.log("All Place Names")

names.forEach( name => {
   return console.log(name)
})

console.log("")

let theNames = []

names.forEach(name => {
    if(name.includes('The'))
    theNames.push(name)
});

console.log("'The' Place Names")

theNames.forEach(name => {
    console.log(name)
});