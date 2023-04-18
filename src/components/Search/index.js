import {useDispatch, useSelector} from "react-redux";
import React, {useState} from "react";
import {searchThunk} from "../../services/search-thunk";
import {Row} from "react-bootstrap";
import {resetSearch} from "../../reducers/search-reducer";
import {hideRecipes} from "../../reducers/recipes-reducer";
import {recipesThunk} from "../../services/recipes-thunk";
import SearchResults from "../SearchResults";

const Search = () => {
    const [searchQuery, setSearchQuery] = useState('')
    const {searchList} = useSelector((state) => state.search)
    const dispatch = useDispatch()
    return (
        <>
            <div className="row mx-auto">
                <div className="col-11">
                    <input placeholder="Search recipes"
                           className="form-control "
                           onChange={(e) => {
                               if (e.target.value === '') {
                                   dispatch(resetSearch());
                                   dispatch(recipesThunk())
                               }
                               setSearchQuery(e.target.value)
                           }}
                           value={searchQuery}/>
                </div>

                <div className="col-1 float-end">
                    <button
                        className="btn btn-dark "
                        onClick={() => {
                            dispatch(hideRecipes())
                            dispatch(searchThunk(searchQuery))
                        }}>
                        Search
                    </button>
                </div>
            </div>

            <div className="d-flex justify-content-end mt-5">
                <Row>
                    {
                        (searchQuery!=='') && searchList && searchList.map((r, a) =>
                            <SearchResults recipes={r} index={a}/>
                        )}
                </Row>
            </div>
        </>
    )
}

export default Search