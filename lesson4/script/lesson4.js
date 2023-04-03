function toggleMenu() {console.log("inside");
    document.getElementById("primaryNav").classList.toggle("open");
    document.getElementById("hamburgerBtn").classList.toggle("open");

}

const x = document.getElementById('hamburgerBtn')
x.onclick = toggleMenu;

let date = new Date();
let year = date.getFullYear();
let day = date.getDay();

document.querySelector('#copyright').innerHTML = '&copy;' + year + "| Hong Kong Kowloon Chamber of Commerce";

let currentdate = document.lastModified;

document.querySelector('#year').textContent = `Last Updated: ${currentdate}`;

const datefield = document.querySelector(".date");
const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
	now
);

datefield.innerHTML = `<em>${fulldate}</em>`;


if (day == 1 || day == 2){
    document.querySelector('#banner').innerHTML = ' Welcome to Hong Kong our Champer party start at 8:00 p.m.';
}





/* storage and local session */

localStorage.setItem('name', 'Will Chen - Permanent');
sessionStorage.setItem('class', 'WDD230- not Permanent');