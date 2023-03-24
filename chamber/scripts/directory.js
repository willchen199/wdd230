console.log("working")

let currentdate = document.lastModified;

document.querySelector('.update').textContent = `Last Updated: ${currentdate}`;


const url = 'https://raw.githubusercontent.com/willchen199/wdd230/main/chamber/data/data.json';

async function getBusinessesData() {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
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
} getBusinessesData();