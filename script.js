let cards = ['♥', '♣', '♦', '♠'];
let numbers = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K']; 


function displayCard() {
  let singleCard = cards[Math.floor(Math.random() * cards.length)];
  let singleNumber = numbers[Math.floor(Math.random() * numbers.length)];
  
  let showCard = ` ${singleCard}`;
  document.getElementById("superior").innerHTML = showCard;
  
  let showCard2 = `${singleNumber} `;
  document.getElementById("medio").innerHTML = showCard2;
  
  let showCard3 = ` ${singleCard} `;
  document.getElementById("inferior").innerHTML = showCard3;

}
