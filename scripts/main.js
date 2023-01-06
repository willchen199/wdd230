let date= new Date();
let year = date.getFullYear();

document.querySelector('.year').innerHTML = '&copy;'+ year;

let currentate = document.lastModified

document.querySelector('span').textContent =`Last Updated: ${currentate}`;