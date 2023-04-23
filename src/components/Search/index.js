import {useDispatch, useSelector} from "react-redux";
import React, {useEffect, useState} from "react";
import {searchThunk} from "../../services/search-thunk";
import {Row} from "react-bootstrap";
import {resetSearch} from "../../reducers/search-reducer";
import {hideRecipes} from "../../reducers/recipes-reducer";
import {recipesThunk} from "../../services/recipes-thunk";
import SearchResults from "../SearchResults";
import {useNavigate} from "react-router";

const Search = ({query}) => {
    const [searchQuery, setSearchQuery] = useState(query)
    const navigate = useNavigate();
    const {searchList, loading} = useSelector(state => state.searchRecipes)
    const dispatch = useDispatch()
    console.log(query)
    useEffect(() => {
        const load = async () => {
            if (query !== '') {
                await dispatch(hideRecipes());
                await dispatch(searchThunk(query));
                setSearchQuery(query)
            }
        }
        load();
    },[query])
    return (
        <>
            <div className="row mx-auto">
                <div className="col-10 col-md-11">
                    <input placeholder="Search recipes"
                           className="form-control "
                           onChange={(e) => {

                               // if (searchList.length > 0 && e.target.value === '') {
                               //     dispatch(resetSearch());
                               //     dispatch(recipesThunk())
                               // }
                               setSearchQuery(e.target.value)
                           }}
                           value={searchQuery}/>
                </div>

                <div className="col-2 col-md-1">
                    <button
                        className="btn btn-dark "
                        onClick={() => {
                            navigate(`/search/${searchQuery}`)
                            // dispatch(hideRecipes())
                            // dispatch(searchThunk(searchQuery))
                        }}>
                        Search
                    </button>
                </div>
            </div>

            <div >
                <Row className="mt-3 justify-content-center">
                    {
                        (query!=='') && searchList && searchList.map((r, a) =>
                            <SearchResults recipes={r} index={a}/>
                        )}
                </Row>
            </div>
        </>
    )
}

export default Search