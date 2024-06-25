import { URL_API } from './data.js';

export  async function getApi(query) { 
    try {
        const response = await fetch(`${URL_API}${query}`);
        const data = await response.json();
        return data

    } catch (error) {
      console.error("An error occurred while fetching the API:", error);
        
    }}