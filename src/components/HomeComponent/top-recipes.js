import recipes from "./top-recipes.json"
import {Row} from "react-bootstrap";
import SearchResults from "../SearchResults";
const TopRecipes = () => {
    console.log(recipes)
    return(<div className="bg-light p-3 mt-3">
        <div className=""><h3>Top Recipes</h3></div>
        <Row className="mt-3 justify-content-center ">
            {recipes.map((r, a) => (
                <SearchResults recipes={r}/>
            ))}
        </Row>

    </div>)
}

export default TopRecipes;