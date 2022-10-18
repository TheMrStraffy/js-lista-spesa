//componenti HTML
let itemGrocery = document.getElementsByClassName('itemGrocery');
const firstList = document.querySelector('.firstList');
const secondList = document.querySelector('.secondList');
//Creare array alimenti
const arrayGroceries = [
  "Pomodori",
  "Mele",
  "Spaghetti",
  "Pancetta",
  "Farina",
  "Latte",
  "Olio Extravergine",
  "Sale",
  "Zucchero",
  "Tortellini ricotta e spinaci"
]
itemGrocery='';
// FOR Loop
for(let i = 0; i < arrayGroceries.length; i++){
  itemGrocery += `
  <tr><td class="itemGrocery">${arrayGroceries[i]}</td></tr>
  `;
}

firstList.innerHTML = itemGrocery;

// WHILE Loop
itemGrocery='';
let c = 0;
while ( c < arrayGroceries.length){
  itemGrocery += `
  <tr><td class="itemGrocery">${arrayGroceries[c]}</td></tr>
  `;
  c++;
}
secondList.innerHTML = itemGrocery;


