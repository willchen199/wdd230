// if (!localStorage.getItem('numDrinks')){
//     localStorage.setItem('numDrinks', 0);
//   }
 
console.log(localStorage.getItem('numDrinks'));
  
  
document.querySelector("#numDrinks").textContent = localStorage.getItem('numDrinks');