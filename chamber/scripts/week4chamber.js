const button = document.querySelector('.btn');

function show(){
    //button.classList.add('newstyle');
    button.classList.toggle('newstyle')
}

button.addEventListener('click',show)

//Hamburger Button JS

const mainnav = document.querySelector(".navigation");
const hambutton = document.querySelector('.ham');

hambutton.addEventListener("click", ()=>{
    mainnav.classList.toggle('responsive');
})

let date = new Date();
let year = date.getFullYear();

document.querySelector('.year').innerHTML = '&copy;'+ year;

let currentdate = document.lastModified;

document.querySelector('.Update').textContent = `Last Updated: ${currentdate}`;