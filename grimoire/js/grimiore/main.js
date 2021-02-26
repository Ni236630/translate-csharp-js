// Put your code here

console.log("Do you belive in magic?")
console.log("------------------------")

let allSpells = [
    {
        Name : "Turn enemy into a newt",
        IsEvil : true,
        EnergyReqired : 5.1
    },
    {
        Name : "Conjure some gold for a local charity",
        IsEvil : false,
        EnergyReqired : 2.99
    },
    {
        Name : "Give a deaf person the ability to heal",
        IsEvil : false,
        EnergyReqired : 12.2
    },
    {
        Name : "Make yourself emperor of the universe",
        IsEvil : true,
        EnergyReqired : 100.0
    },
    {
        Name : "Convince your relatives your political views are correct",
        IsEvil : false,
        EnergyReqired : 2921.5
    }
]

let goodBook = []
let evilBook = []

const makeSpellBooks = (spells) => {
   spells.forEach(spell => {
       if(spell.IsEvil === false){
          return  goodBook.push(spell)
        } else {
          return  evilBook.push(spell)
        }
   });   
}   

makeSpellBooks(allSpells)

console.log("Good Book")
goodBook.forEach(spell => {
    console.log(spell.Name)
})
console.log("")
console.log("Evil Book")
evilBook.forEach(spell => {
    console.log(spell.Name)
})