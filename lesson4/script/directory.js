

let cards = document.querySelector( '.cardb');
let list = document.querySelector( '.listb');
let table = document.querySelector( '.table');
let cardlist = document.querySelector( '.bus-cards');




const url = 'https://raw.githubusercontent.com/willchen199/wdd230/main/chamber/data/data.json';

async function getBusinessesData() {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    cards.addEventListener('click',showcard);
    list.addEventListener('click',showtable);
    function showcard(){

        cardlist.style.display="grid";
        table.style.display="none";
    data.Businesses.forEach(binfo => {
        let card            = document.createElement("div");
        let card_container  = document.createElement("div");
        let image           = document.createElement("img");
        let title           = document.createElement('h4');
        let address         = document.createElement("p");
        let phone           = document.createElement("p");
        let url             = document.createElement('a');  

        card_container.classList .add("card_container")
        card.classList           .add("card");
        image.classList     .add("cardimage");
        title.classList     .add("business_name");
        address.classList   .add("busaddress");
        phone.classList     .add("phone");
        url.classList       .add("website");

        image.src           = binfo.imageurl;
        console.log(binfo.name)
        url.textContent     = "Website";
        url.href            = binfo.website;
        title.textContent   = binfo.name;
        address.textContent = binfo.address;
        phone.textContent   = binfo.phone;
        console.log("working");

        // But first, we need to put all the puzzle pieces together using more
        // appends
        // append the title to its parent
        card_container.appendChild(title);
        card_container.append(address);
        card_container.append(phone);
        card_container.append(url);


        // append the card_container to its parent
        card.append(image)
        card.append(card_container);
        // this sends the entire card to html
        document.querySelector('.bus-cards').append(card);



        
        
    });
    }
    function showtable(){
        cardlist.style.display="none";
        table.style.display="block";
    // let section = document.querySelectoraAll('bus-cards');
    //     section.forEach((item) => {
    //         item.remove();
    //     });
    //     let row = document.querySelectorAll('table');
    //         row.forEach((item) => {
    //             item.remove();
    //     });
    data.Businesses.forEach(binfo => {
    let list_row = document.createElement('tr');
    let td_name = document.createElement('td');
    td_name.textContent = `${binfo.name}`;

    let td_address = document.createElement('td');
    td_address.textContent = `${binfo.address}`;

    let td_number = document.createElement('td');
    td_number.textContent = `${binfo.phone}`;

    let td_web = document.createElement('td');
    let web_p = document.createElement('a')
    web_p.setAttribute('href', binfo.website);
    web_p.textContent = `${binfo.website}`;

    td_web.appendChild(web_p)
    list_row.appendChild(td_name)
    list_row.appendChild(td_address)
    list_row.appendChild(td_number)
    list_row.appendChild(td_web)
    document.querySelector('table').appendChild(list_row);
        
    })};
    showcard();
    
    
    
} getBusinessesData();