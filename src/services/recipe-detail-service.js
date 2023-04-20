import axios from "axios";
import APP_URL from "../constants";
export const recipeDetail = async (id) => {
    const url = `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/${id}/information`;
    const response = await axios.get(url,
        {
            headers: {
                'x-rapidapi-host': APP_URL.x_rapidapi_host,
                'x-rapidapi-key': APP_URL.x_rapidapi_key
            }
        }
    )
    console.log(response.data)
    return response.data;
}