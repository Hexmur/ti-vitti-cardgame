class Card{
  #rank = 0;
  #suit = "";
  constructor(rank, suit){
    this.#rank = rank;
    this.#suit = suit;
  }

  printCardValues(){
    console.log(this.#rank + " " + this.#suit);
  }
}

let cardsArray = [];
suitArray = ["oro", "spade", "mazze", "coppe"];
tmpSuit = suitArray[0];

let count = 0;

for(i=0; i<4; i++){
  //console.log(i);
  if(i===1) tmpSuit = suitArray[1];
  else if(i===2) tmpSuit = suitArray[2];
  else if(i===3) tmpSuit = suitArray[3];

  for(j=0; j<10; j++){
    //console.log(j+1 + " " + tmpSuit);
    cardsArray[count] = new Card(j, tmpSuit);
    //cardsArray[count].printCardValues();
    count++;
  }

}

console.log(cardsArray.length);

for(i=0; i<cardsArray.length; i++){
  cardsArray[i].printCardValues();
}