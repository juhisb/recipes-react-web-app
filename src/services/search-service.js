import axios from "axios";
import APP_URL from "../constants";
export const search = async (query) => {
    const url = 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/complexSearch';
    const response = await axios.get(url,
        {
            params: {
                'query': query,
                'number': 16
            },
            headers: {
                'x-rapidapi-host': APP_URL.x_rapidapi_host,
                'x-rapidapi-key': APP_URL.x_rapidapi_key
            }
        }
    )
    console.log(response.data)
    return response.data.results;
}