

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
        //Get temp
        let temp = data.main.temp;
        temp = (temp * (9/5)) + 32;
        temp= Math.round(temp);
        console.log(temp);
        document.querySelector('.temp').innerHTML = `${temp} °F`;

        // Get windspeed
        let windspeed = data.wind.speed;
        console.log(windspeed);
        document.querySelector('.windspeed').innerHTML=`${windspeed} km/h`;

        //Get windchill
        let windchill = data.main.feels_like;
        windchill = (windchill * (9/5)) + 32;
        windchill = Math.round(windchill);
        document.querySelector('.windchill').innerHTML=`${windchill} °F`;

        // Get description
        let description = data.weather[0].description;
        document.querySelector('.description').innerHTML= description;

        // Get weather icon
        const weatherImg  = document.querySelector('.weathersign');
        const icon        = data.weather[0].icon.toString();
        (async () => {
            const imageUrl = 'http://openweathermap.org/img/wn/' + icon + '@4x.png';
            const response = await fetch(imageUrl);
            const imageBlob = await response.blob();
            const reader = new FileReader();
            reader.readAsDataURL(imageBlob);
            reader.onloadend = () => {
                const base64data = reader.result;
                weatherImg.src = base64data;
            };

        })();

    })
    
} weatherApi();







// document.querySelector('.year').innerHTML = '&copy;'+ year;

// let currentdate = document.lastModified; this is the lastmofidied last time it change content.

// document.querySelector('.Update').textContent = `Last Updated: ${currentdate}`;

