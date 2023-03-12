
//------------- handle search button-----------
const searchFood = () => {
    const errorMessage = document.getElementById('errorMessage')
    const searchField = document.getElementById('mealInput'); 
    const mealContainer = document.getElementById('mealCard');
    const searchData = searchField.value
    if(searchData.length === 0) {
        errorMessage.innerText = 'তুমি কিছু লিখো নাই '
        mealContainer.innerHTML = ''
    }
    else{
        errorMessage.innerText = ''
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchData}`;
        fetch(url)
        .then(res => res.json())
        .then(data => displayMealInfo(data.meals))
    }
  
}

const displayMealInfo = mealData => {
    const errorMessage = document.getElementById('errorMessage')
    if(mealData == null){
        errorMessage.innerText = 'আজাইরা খোঁজা-খুঁজি বাদ দিয়া ঘুমাও '
    }else{
        errorMessage.innerText = ''
        const mealContainer = document.getElementById('mealCard');
        mealContainer.innerHTML = ''
        mealData.forEach(item => {
            const foodItemName = document.createElement('div');
            foodItemName.className = 'meal-items';
            itemPosition = item.idMeal;
            const mealInformation = `
            <img src ="${item.strMealThumb}">
            <h3>${item.strMeal}</h3>
            `
            foodItemName.innerHTML = mealInformation;
            foodItemName.addEventListener('click', function () {
                mealIngredientsInfo(item.idMeal);
            });
            mealContainer.appendChild(foodItemName);
        });
    }
   
}


//API Call by fetch for meal ingredients 

const mealIngredientsInfo = mealItemName => { 
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealItemName}`;
fetch(url)
        .then(response => response.json())
        .then(data => displayDetails(data))
}

//meal ingredients details information

const displayDetails = mealItemDetails => {
    const mealItemsInformation = document.getElementById('mealItemsInfo');
    mealItemDetails.meals.forEach(items => {
        const mealItemsInformations = document.createElement('div');
        mealItemsInformations.className = 'ingredients-info';
        console.log(items.strMeal);
        const itemsName = document.createElement('h1');
        const ingredients = document.createElement('h5');
        ingredients.innerText = 'Ingredients';
        itemsName.innerText = items.strMeal;
        const ul = document.createElement('ul');
        const imgUrl = document.createElement('img');
        imgUrl.src = items.strMealThumb;
        mealItemsInformations.appendChild(imgUrl);
        const li = `
        
         <li ${items.strIngredient1 ? items.strIngredient1 : 'class="d-none"'}>${items.strIngredient1}</li>
         <li ${items.strIngredient2 ? items.strIngredient2 : 'class="d-none"'}>${items.strIngredient2}</li>
         <li ${items.strIngredient3 ? items.strIngredient3 : 'class="d-none"'}>${items.strIngredient3}</li>
         <li ${items.strIngredient4 ? items.strIngredient4 : 'class="d-none"'}>${items.strIngredient4}</li>
         <li ${items.strIngredient5 ? items.strIngredient5 : 'class="d-none"'}>${items.strIngredient5}</li>
         <li ${items.strIngredient6 ? items.strIngredient6 : 'class="d-none"'}>${items.strIngredient6}</li>
         <li ${items.strIngredient7 ? items.strIngredient7 : 'class="d-none"'}>${items.strIngredient7}</li>
         <li ${items.strIngredient8 ? items.strIngredient8 : 'class="d-none"'}>${items.strIngredient8}</li>
         <li ${items.strIngredient9 ? items.strIngredient9 : 'class="d-none"'}>${items.strIngredient9}</li>
         <li ${items.strIngredient10 ? items.strIngredient10 : 'class="d-none"'}>${items.strIngredient10}</li>
         <li ${items.strIngredient11 ? items.strIngredient11 : 'class="d-none"'}>${items.strIngredient11}</li>
         <li ${items.strIngredient12 ? items.strIngredient12 : 'class="d-none"'}>${items.strIngredient12}</li>
         <li ${items.strIngredient13 ? items.strIngredient13 : 'class="d-none"'}>${items.strIngredient13}</li>
        `
        ul.innerHTML = li;
        mealItemsInformations.appendChild(itemsName);
        mealItemsInformations.appendChild(ingredients);
        mealItemsInformations.appendChild(ul);
        mealItemsInformation.appendChild(mealItemsInformations);

    });

}


