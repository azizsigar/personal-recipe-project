import { getApi, getRandomMeal } from "./api.js";
import { clearResults, displayMeal, displayNoMealsMessage } from "./dom.js";

document.addEventListener("DOMContentLoaded", () => {
  const startButton = document.getElementById("start-button");
  const welcomeContainer = document.getElementById("welcome-container");
  const appContainer = document.getElementById("app-container");
  const button = document.getElementById("search-button");
  const searchBox = document.getElementById("search-box");
  const surpriseButton = document.getElementById("surprise-button");
  const recipeContainer = document.getElementById("recipe-container");

  const initApp = async (query) => {
    try {
      const response = await getApi(query);

      // Clear previous search results
      clearResults(recipeContainer);

      if (response.meals) {
        response.meals.forEach((meal) => {
          displayMeal(recipeContainer, meal);
        });
      } else {
        // Handle case when no meals are found
        displayNoMealsMessage(recipeContainer);
        console.log("No meals found for this query.");
      }
    } catch (error) {
      console.error("An error occurred while fetching the API:", error);
    }
  };

  const showRandomMeal = async () => {
    try {
      const response = await getRandomMeal();

      // Clear previous search results
      clearResults(recipeContainer);

      if (response.meals) {
        const meal = response.meals[0];
        displayMeal(recipeContainer, meal);
      } else {
        displayNoMealsMessage(recipeContainer);
        console.log("No meals found.");
      }
    } catch (error) {
      console.error("An error occurred while fetching the API:", error);
    }
  };

  startButton.addEventListener("click", () => {
    welcomeContainer.style.display = "none";
    appContainer.style.display = "block";
  });

  button.addEventListener("click", (e) => {
    e.preventDefault();
    const searchValue = searchBox.value.trim();
    if (searchValue) {
      initApp(searchValue);
    } else {
      console.log("Please type something in the search box");
      // Add enhancement to show a message to the user
    }
  });

  surpriseButton.addEventListener("click", (e) => {
    e.preventDefault();
    showRandomMeal();
  });
});
