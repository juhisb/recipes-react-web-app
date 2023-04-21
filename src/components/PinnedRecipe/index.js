import { Card, Row, Col} from "react-bootstrap";
import React, { useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {findAllPinnedRecipeThunk} from "../../services/pinned-recipe-thunk";
import APP_URL from "../../constants";
import {Link} from "react-router-dom";
import CurrentUser from "../CurrentUser";
import {current} from "@reduxjs/toolkit";

const LikedRecipe = () => {
    const {currentUser} = useSelector((state) => state.userData)
    const {pinnedRecipeList} = useSelector((state) => state.pinnedRecipe)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(findAllPinnedRecipeThunk(currentUser._id))
    }, [])

    return (
        <div>
            <Row className="mt-5 justify-content-center align-items-stretch">
                {pinnedRecipeList?.map((recipe) => (
                    <Col key={recipe.recipeId} xs={12} md={4} lg={3} sm={6}>
                        <Card className="shadow p-0 mb-5 bg-white rounded">
                            <Card.Img src={recipe.recipeImage} />
                            <Card.Body>
                                <Link to={`/detail/${recipe.recipeId}`}  className="stretched-link" >
                                    <Card.Title>{recipe.recipeTitle}</Card.Title>
                                </Link>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
                {
                    pinnedRecipeList.length == 0 &&
                    <p>Nothing Liked!!</p>
                }
            </Row>
        </div>
    )
}
export default LikedRecipe;
