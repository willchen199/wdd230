let date = new Date();
let year = date.getFullYear();

document.querySelector('.year').textContent = '&copy;'+ year;

let currentdate = document.lastModified;

document.querySelector('.Update').textContent = `Last Updated: ${currentdate}`;