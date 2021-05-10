// Code your solutions in this file
/*
for (let age = 30; age < 40; age++) {
    console.log(`I'm ${age} years old. Happy birthday to me!`);
} 

  const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
    for (let i = 0; i < gifts.length; i++) {
      console.log(`Wrapped ${gifts[i]} and added a bow!`);
    }
  
    return gifts;
}
  
wrapGifts(gifts); 
*/
    const name = ['Lisa', 'Kaitlin' , 'Jan' ]
    const occasion = ['surprise']
    const cardsCollection = [];
function writeCards(name,occasion) {
    for (let i = 0; i < name.length; i++) {
        cardsCollection.push(`Thank you, ${name[i]}, for the wonderful ${occasion} gift!`)
    }
    return cardsCollection;
}

function countDown(){
    let countDown=10;
    while (countDown >= 0) {
        console.log(countDown--);
    }
}