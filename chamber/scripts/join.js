let date = new Date();
let year = date.getFullYear();
let day = date.getDay();
let days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
day = days[day];
let dayofmonth = date.getDate();
let month =date.getMonth();
let months =["January","February","March","April", "May","June","July","August","September","October","November","December"];
month = months[month];

document.querySelector("#datetime").innerHTML = `${day}, ${month} ${dayofmonth} ${year}`;


function openWeb(){
    window.open("https://willchen199.github.io/wdd230/chamber/thanyou.html");
}
document.querySelector('#datetime').addEventListener('click',openWeb);


