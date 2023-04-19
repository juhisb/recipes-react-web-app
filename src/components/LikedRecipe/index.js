import { Card, Row, Col} from "react-bootstrap";
import React, { useEffect} from 'react'
import "./index.css"
import {useDispatch, useSelector} from "react-redux";
import {findAllLikedRecipeThunk} from "../../services/liked-recipe-thunk";
import APP_URL from "../../constants";
import {Link} from "react-router-dom";
import CurrentUser from "../CurrentUser";

const LikedRecipe = () => {
    const {currentUser} = useSelector((state) => state.userData)
    const {likedRecipeList} = useSelector((state) => state.likedRecipe)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(findAllLikedRecipeThunk(CurrentUser._id))
    }, [])
    return (
        <div>
            <Row class="mt-5 justify-content-center align-items-stretch">
                {likedRecipeList?.map((recipe) => (
                    <Col key={recipe.id} xs={12} md={4} lg={3} sm={6}>
                        <Card className="shadow p-0 mb-5 bg-white rounded">
                            <Card.Img src={recipe.image} />
                            <Card.Body>
                                <Link to={`/detail/${recipe.id}`}  className="stretched-link" >
                                    <Card.Title>{recipe.name}</Card.Title>
                                </Link>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    )
}
export default LikedRecipe;
