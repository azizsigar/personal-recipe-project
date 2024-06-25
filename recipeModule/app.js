import { getApi, } from "./api.js";
import { clearResults, displayMeal, displayNoMealsMessage } from "./dom.js";

document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("search-button");
  const searchBox = document.getElementById("search-box");
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
});
