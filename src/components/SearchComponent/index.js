import React from "react";
import RecipeList from "../RecipeList";
import Search from "../Search";
import {useParams} from "react-router-dom";

const SearchScreen = () => {
    const params = useParams();
    const query = params.query ? params.query : '';

    return (
        <div className="p-3 mt-3">
        {/*<>*/}
            <h3 className="text-center mt-3">Search Recipes</h3>
            <Search query={query}/>
            {/*<RecipeList />*/}
        {/*</>*/}
        </div>
    );
}
export default SearchScreen;