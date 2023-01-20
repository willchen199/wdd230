let date = new Date();
let year = date.getFullYear();

document.querySelector('.year').innerHTML = '&copy;'+ year;

let currentdate = document.lastModified;

document.querySelector('.update').textContent = `Last Updated: ${currentdate}`;