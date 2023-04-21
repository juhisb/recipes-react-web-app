import React from "react";
import RecipeList from "../RecipeList";
import Search from "../Search";
import {useParams} from "react-router-dom";

const SearchScreen = () => {
    const params = useParams();
    const query = params.query ? params.query : '';

    return (
        <div>
            {/*<h2>Welcome to Recipe Recommender!!</h2>*/}
            <Search query={query}/>
            <RecipeList />
        </div>
    );
}
export default SearchScreen;