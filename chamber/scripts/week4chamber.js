

//Hamburger Button JS

const mainnav = document.querySelector(".navigation");
const hambutton = document.querySelector('.ham');

hambutton.addEventListener("click", ()=>{
    mainnav.classList.toggle('responsive');
})




let date = new Date();
let year = date.getFullYear();
let day = date.getDay();
let days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
day = days[day];
let dayofmonth = date.getDate();
let month =date.getMonth();

document.querySelector('#date').innerHTML = day+"    " +dayofmonth+month+year

let string1 = "Trevor";
let string2 = "Will";
let formattedString = `${string1} and ${string2} are best buddies.`;






// document.querySelector('.year').innerHTML = '&copy;'+ year;

// let currentdate = document.lastModified; this is the lastmofidied last time it change content.

// document.querySelector('.Update').textContent = `Last Updated: ${currentdate}`;

