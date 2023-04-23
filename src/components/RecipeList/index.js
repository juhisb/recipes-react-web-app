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
    return (
        <>
            {
                loading &&
                <div className="list-group-item">
                    Loading...
                </div>
            }
            <div>
                <ul className="list-group p-2">
                    {recipesList.filter((r, a) => a < 5).map((r, a) => (
                        <li className="list-group-item">
                            <div className="row">
                                <div className="col-xl-4">
                                    <img src={r.image}
                                         height={60}  className="rounded" alt="..."/>
                                </div>
                                <div className="col-xl-8">
                                    <div className="ms-2">
                                        <Link to={'/detail/' + r.id}  className="stretched-link text-decoration-none" >
                                        <h6 className="mt-0 mb-0 primary-text">{r.title}</h6>
                                        </Link>
                                        {/*<p className="mb-0">@{who.handle}</p>*/}
                                    </div>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>

            </div>

        </>
    )
}
export default RecipeList;

