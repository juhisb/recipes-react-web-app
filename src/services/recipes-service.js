import axios from "axios";
import APP_URL from "../constants";
export const recipes = async () => {
    const url = 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/random';
    const response = await axios.get(url,
        {
            params: {number: '5'},
            headers: {
                'x-rapidapi-host': APP_URL.x_rapidapi_host,
                'x-rapidapi-key': APP_URL.x_rapidapi_key
            }
        }
        )
    return response.data.recipes;
}