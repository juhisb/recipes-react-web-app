import {useDispatch, useSelector} from "react-redux";
import React, {useEffect} from "react";
import {Card, Row} from "react-bootstrap";
import SearchResults from "../SearchResults";
import {recipeDetailThunk} from "../../services/recipe-detail-thunk";
import {Link, useParams} from "react-router-dom";
import NewReview from "../NewReview";
import ReviewList from "../ReviewComponent";

const Detail = () => {
    const params = useParams();
    const { currentUser } = useSelector(state => state.userData);
    const { currentReviewer } = useSelector(state => state.reviewer);
    const {recipeData, loading} = useSelector(state => state.recipeData)
    const dispatch = useDispatch()
    console.log(currentUser)
    useEffect(() => {
        dispatch(recipeDetailThunk(params.id))
    }, [])

    return (
        <>
            {
                loading &&
                <div className="list-group-item">
                    Loading...
                </div>
            }

                <div className="container">
                    <h1>{recipeData.title}</h1>
                    <img className="w-50" src={recipeData.image} />
                    <Card.Body>

                        {/*<Link to={'/detail/' + recipe.id}  className="stretched-link" >*/}

                        {/*</Link>*/}
                        {/*<Card.Text>{recipe.summary.substring(0, 100)} {recipe.summary.length >= 200 && '...'}</Card.Text>*/}
                    </Card.Body>
                    <h2 className="title">Reviews</h2>
                    {
                        (!currentUser || currentUser.accountType === 'REVIEWER') &&
                        <NewReview recipeId={params.id} recipeInfo={recipeData}  />
                    }
                    <ReviewList recipeId={params.id}/>
                </div>



        </>
    )
}

export default Detail;