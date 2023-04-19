import { Card, Row, Col, Container } from "react-bootstrap";
import React, { useEffect, useState } from 'react'
// import "./index.css"
import {useDispatch, useSelector} from "react-redux";
import {recipesThunk} from "../../services/recipes-thunk";
import {Link} from "react-router-dom";
import axios from "axios";
import {recipes} from "../../services/recipes-service";
import SearchResults from "../SearchResults";
const RecipeList = () => {
    const {recipesList, loading} = useSelector(state => state.recipes)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(recipesThunk())
    }, [])

    console.log(recipesList)

    return (
        <>
            {
                loading &&
                <div className="list-group-item">
                    Loading...
                </div>
            }
            <div>
                <Row class="mt-5 justify-content-center align-items-stretch">
                    {recipesList.filter((r, a) => a < 8).map((r, a) => (
                        <SearchResults recipes={r} index={a}/>
                    ))}
                </Row>

            </div>

        </>
    )
}
export default RecipeList;

