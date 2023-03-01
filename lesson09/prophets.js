const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';

async function getProphetData() {
    const response = await fetch(url);
    console.log(response);
    const data = await response.json();
    console.table(data.prophets);  // note that we reference the prophet array of the data object given the structure of the json file
    displayTable(data.prophets);
}
    
  getProphetData();

  const displayProphets = (prophets) => {
    const cards = document.querySelector('div.cards'); // select the output container element
  
    prophets.forEach((prophet) => {
      // Create elements to add to the div.cards element
      let card = document.createElement('section');
      let h2 = document.createElement('h2');
      let portrait = document.createElement('img');
  
      // Build the h2 content out to show the prophet's full name - finish the template string
      h2.textContent = `${prophet.name} ${prophet.lastname}`;
  
      // Build the image portrait by setting all the relevant attribute
      portrait.setAttribute('src', prophet.imageurl);
      portrait.setAttribute('alt', `Portait of ${prophet.name} ${prophet.lastname}`);
      portrait.setAttribute('loading', 'lazy');
      portrait.setAttribute('width', '340');
      portrait.setAttribute('height', '440');
  
      // Append the section(card) with the created elements
      card.appendChild(h2);
      card.appendChild(portrait);
  
      cards.appendChild(card);
    } // end of forEach loop
  )} // end of function expression

  function displayTable(prophets){

    let row = document.querySelectorAll('tr');
        row.forEach((item)=>{
          item.remove();
        })

    let section = document.querySelectorAll('section');
        section.forEach((item)=> {
          item.remove();
        });
    

    prophets.forEach((prophet)=> {
      let tr = document.createElement('tr');
      let td_name = document.createElement('td');
      let td_birthplace = document.createElement('td');
      let td_birthdate = document.createElement('td');

      td_name.textContent = `${prophet.name} ${prophet.lastname}`;
      td_birthplace.textContent = prophet.birthplace
      td_birthdate.textContent = prophet.birthdate;
      
      tr.appendChild(td_name);
      tr.appendChild(td_birthdate);
      tr.appendChild(td_birthplace);

      document.querySelector('table').appendChild(tr);
    })
  }

