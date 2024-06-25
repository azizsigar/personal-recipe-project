export const clearResults = (container) => {
    container.innerHTML = "";
  };
  
  export const displayMeal = (container, meal) => {
    // Create and append the meal container
    const mealContainer = document.createElement("div");
    mealContainer.classList.add("meal-container");
  
    // Create and append the meal name
    const mealName = document.createElement("h3");
    mealName.textContent = meal.strMeal;
    mealContainer.appendChild(mealName);
  
    // Create and append the meal image
    const mealImage = document.createElement("img");
    mealImage.src = meal.strMealThumb;
    mealImage.alt = meal.strMeal;
    mealContainer.appendChild(mealImage);
  
    // Create and append the meal instructions (initially hidden)
    const mealInstructions = document.createElement("p");
    mealInstructions.classList.add("meal-instructions");
    mealInstructions.textContent = meal.strInstructions;
    mealInstructions.style.display = "none"; // Initially hidden
    mealContainer.appendChild(mealInstructions);
  
    // Create and append the meal category
    const mealCategory = document.createElement("p");
    mealCategory.textContent = `Category: ${meal.strCategory}`;
    mealContainer.appendChild(mealCategory);
  
    // Append the meal container to the recipe container
    container.appendChild(mealContainer);
  
    // Toggle meal instructions visibility on image click
    mealImage.addEventListener("click", () => {
      if (mealInstructions.style.display === "none") {
        mealInstructions.style.display = "block";
      } else {
        mealInstructions.style.display = "none";
      }
    });
  };
  
  export const displayNoMealsMessage = (container) => {
    const noMealsMessage = document.createElement("p");
    noMealsMessage.textContent = "No meals found for this query.";
    container.appendChild(noMealsMessage);
  };
  