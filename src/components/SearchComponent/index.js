import React from "react";
import Header from "../Header";
import RecipeList from "../RecipeList";
import Search from "../Search";

const SearchScreen = () => {

    return (
        <div>
            {/*<h2>Welcome to Recipe Recommender!!</h2>*/}
            <Search/>
            <RecipeList/>
        </div>
    );
}
export default SearchScreen;