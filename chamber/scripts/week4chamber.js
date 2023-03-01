

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
let months =["January","February","March","April", "May","June","July","August","September","October","November","December"];
month = months[month];

document.querySelector('#date').innerHTML = `${day}, ${month} ${dayofmonth} ${year}`

let string1 = "Trevor";
let string2 = "Will";
let formattedString = `${string1} and ${string2} are best buddies.`;

async function weatherApi (){
    await fetch("https://api.openweathermap.org/data/2.5/weather?lat=22.326&lon=114.164&appid=d10fd5d0017bbcf8e6a91168cde9ae7c&units=metric")
    .then(response => response.json())
    .then(data => {
        data.coord.lon;
        data.weather.id;
        data.main.temp;
        data.wind.deg;
    })
    
}






// document.querySelector('.year').innerHTML = '&copy;'+ year;

// let currentdate = document.lastModified; this is the lastmofidied last time it change content.

// document.querySelector('.Update').textContent = `Last Updated: ${currentdate}`;

