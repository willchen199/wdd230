
let x = document.querySelector("#fruits");
let y = document.querySelector("#fruits2");
let z = document.querySelector("#fruits3");

form = document.querySelector("form");
info = document.querySelector("#info");

const url2 = "https://andejuli.github.io/wdd230/fruit.json";

const getFruit = async () => {
    const response = await fetch(url2);
    const data = await response.json();
    console.log(data);

    
    

    
    
    


    function Display(){



        view = document.querySelector("#view");
        view.style.backgroundColor = "#F5DEB3";

        document.querySelector("#fresh-main").style.justifyContent = "space-around";
        
        document.querySelector("#submitBtn2").style.display = "block";

        view.style.display = "block";
        
        

        info.replaceChildren();

        let fruit = x.value;
        let fruit2 = y.value;
        let fruit3 = z.value;

        console.log(data[fruit]);
        console.log(data[fruit2]);
        console.log(data[fruit3]);

        console.log("tet");

        h2 = document.createElement("h2");

        orderDate = document.createElement("p");

        firstName = document.createElement("p");

        email = document.createElement("p");

        phone = document.createElement("p");

        let fruit11 = document.createElement("p");

        let fruit22 = document.createElement("p");

        let fruit33 = document.createElement("p");

        let instructions = document.createElement("p");

        let carbs = document.createElement("p");

        let protein = document.createElement("p");

        let fat = document.createElement("p");

        let sugar = document.createElement("p");

        let calories = document.createElement("p");









        h2.textContent = 'Order Information:';

        let date = new Date();

        let month = date.getMonth() + 1;
        let day = date.getDate();
        let year = date.getFullYear();


        orderDate.textContent =  `Order Date: ${month}/${day}/${year}`;

        first = document.querySelector("#fname").value;
        firstName.textContent = `First Name: ${first}`;

        emailInput = document.querySelector("#email").value;
        email.textContent = `Email: ${emailInput}`;

        phoneInput = document.querySelector("#phone").value;
        phone.textContent = `Phone Number: ${phoneInput}`;
        
        fruit2Input = document.querySelector("#fruits2").value;
        fruit22.textContent = `Fruit #2: ${data[fruit2Input].name}`;
        
        fruit1Input = document.querySelector("#fruits").value;
        fruit11.textContent =  `Fruit #1: ${data[fruit1Input].name}`;
        
        fruit3Input = document.querySelector("#fruits3").value;
        fruit33.textContent = `Fruit #3: ${data[fruit3Input].name}`;

        message = document.querySelector("#message").value;
        instructions.textContent = `Instructions: ${message}`;

        totalCarbs = data[fruit2Input].nutritions.carbohydrates + data[fruit1Input].nutritions.carbohydrates + data[fruit3Input].nutritions.carbohydrates;
        carbs.textContent =  `Total Carbohydrates: ${totalCarbs.toFixed(2)}`;

        totalProtein = data[fruit2Input].nutritions.protein + data[fruit1Input].nutritions.protein + data[fruit3Input].nutritions.protein;
        protein.textContent =  `Total Protein: ${totalProtein.toFixed(2)}`;

        totalFat = data[fruit2Input].nutritions.fat + data[fruit1Input].nutritions.fat + data[fruit3Input].nutritions.fat;
        fat.textContent =  `Total Fat: ${totalFat.toFixed(2)}`;

        totalSugar = data[fruit2Input].nutritions.sugar + data[fruit1Input].nutritions.sugar + data[fruit3Input].nutritions.sugar;
        sugar.textContent =  `Total Sugar: ${totalSugar.toFixed(2)}`;

        totalCalories = data[fruit2Input].nutritions.calories + data[fruit1Input].nutritions.calories + data[fruit3Input].nutritions.calories;
        calories.textContent =  `Total Calories: ${totalCalories.toFixed(2)}`;

        info.appendChild(h2);
        info.appendChild(orderDate);
        info.appendChild(firstName);
        info.appendChild(phone);
        info.appendChild(email);
        info.appendChild(fruit11);
        info.appendChild(fruit22);
        info.appendChild(fruit33);
        info.appendChild(instructions);
        info.appendChild(carbs);
        info.appendChild(protein);
        info.appendChild(fat);
        info.appendChild(sugar);
        info.appendChild(calories);


        //test();

        


        
    
      }
      

      document.querySelector("#submitBtn").addEventListener("click", Display)


    
  };


  //function test(){


        //h2 = document.createElement("h2");


        //h2.textContent = 'Summary Information:';

        //form.appendChild(h2);
//}



getFruit();

function count(){
    if (!localStorage.getItem('numDrinks')){
    localStorage.setItem('numDrinks', 1);
    }
    else{
        
        let new_count = localStorage.getItem('numDrinks')+1 
        localStorage.setItem('numDrinks', new_count);
        console.log(new_count)
    
    }
   
    
}
document.querySelector("#submitBtn2").addEventListener("click",count);



