import { getApi } from "./api.js";

document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("search-button");
  const searchBox = document.getElementById("search-box");
  const recipeContainer = document.getElementById("recipe-container");

  const initApp = async () => {
    try {
      getApi;
      const response = await data.json();
      console.log(response);

      // Clear previous search results
      recipeContainer.innerHTML = "";

      if (response.meals) {
        response.meals.forEach((meal) => {
          console.log(meal);

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
          mealImage.alt = meal.strMeal; // Optional: Add alt text for accessibility
          mealContainer.appendChild(mealImage);

          // Create and append the meal instructions (initially hidden)
          const mealInstructions = document.createElement("p");
          mealInstructions.classList.add("meal-instructions");
          mealInstructions.textContent = meal.strInstructions;
          mealContainer.appendChild(mealInstructions);

          // Create and append the meal category
          const mealCategory = document.createElement("p");
          mealCategory.textContent = `Category: ${meal.strCategory}`;
          mealContainer.appendChild(mealCategory);

          // Append the meal container to the recipe container
          recipeContainer.appendChild(mealContainer);

          // Toggle meal instructions visibility on image click
          mealImage.addEventListener("click", () => {
            mealInstructions.classList.toggle("show");
          });
        });
      } else {
        // Handle case when no meals are found
        const noMealsMessage = document.createElement("p");
        noMealsMessage.textContent = "No meals found for this query.";
        recipeContainer.appendChild(noMealsMessage);
        console.log("No meals found for this query.");
      }
    } catch (error) {
      console.error("An error occurred while fetching the API:", error);
    }
  };

  button.addEventListener("click", (e) => {
    e.preventDefault();
    const searchValue = searchBox.value.trim();
    if (searchValue) {
      initApp(searchValue);
    } else {
      console.log("please type something in the search box");
      // add enhancement to show a message to the user
    }
  });
});
