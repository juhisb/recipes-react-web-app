import {useDispatch, useSelector} from "react-redux";
import React, {useEffect} from "react";
import {Card} from "react-bootstrap";
import {recipeDetailThunk} from "../../services/recipe-detail-thunk";
import {useParams} from "react-router-dom";
import NewReview from "../NewReview";
import ReviewList from "../ReviewComponent";
import PinDetail from "../PinComponent";
import detail from "./test.json"
import {faSeedling, faEgg, faWheatAwn} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {findAllReviewsForRecipeThunk, findAverageRatingThunk} from "../../services/review-thunk";
import RecipeList from "../RecipeList";

const Detail = () => {
    const params = useParams();
    const { currentUser } = useSelector(state => state.userData);
    const { currentReviewer } = useSelector(state => state.reviewer);
    const { currentAdmin } = useSelector(state => state.adminData);
    const {recipeData, loading} = useSelector(state => state.recipeData)
    const { reviewList, averageRating } = useSelector(state => state.review);
    const dispatch = useDispatch()
    const renderFull = () => <i
        className={`bi-star-fill`}
        style={{ fontSize: 25, color: '#f1c40f' }}
    />;

    const renderHalf = () => <i
        className={`bi-star-half`}
        style={{ fontSize: 25, color: '#f1c40f' }}
    />;

    const renderIcons = (rating) => {
        const full = Math.floor(rating);
        const half = rating%1;
        console.log(full)
        return (<>
            {[...Array(full)].map(renderFull)}
            {half > 0 ? renderHalf(): <></>}
                <h6 className="mt-2"><span className="star-text mt-3 ms-2">{} Average Rating {averageRating}/5 </span></h6>
            </>
        )
    }
    useEffect(() => {
        console.log("use effect");
        const load = async () => {
            console.log("effect")
            await dispatch(recipeDetailThunk(params.id))
            await dispatch(findAverageRatingThunk(params.id))
            await dispatch(findAllReviewsForRecipeThunk(params.id))
        }
        load();

    }, [params.id])

    return (
        <>
            {
                loading &&
                <div className="list-group-item">
                    Loading...
                </div>
            }

                <div className="container row p-2">
                    <div className="col-12 col-md-9 mt-3">
                        <div className="border border-4 rounded">
                    <div className="text-center border-bottom">

                    <img className="w-75 mt-5" src={recipeData.image} />
                        <h1 className="primary-text mt-3">{recipeData.title}</h1>

                        <div className="mb-2">
                            <span className="me-2"><b>TOTAL TIME:</b> {recipeData.readyInMinutes} minutes</span>
                            <span><b>YIELD:</b> {recipeData.servings} servings </span>
                        </div>

                        <div className="mb-2">
                            {recipeData.vegetarian ? <span className="primary-border  p-1 me-2 primary-text"><FontAwesomeIcon
                                icon={faEgg}/> vegetarian </span> : <></>}
                            {recipeData.vegan ? <span className="primary-border p-1 me-2 primary-text"><FontAwesomeIcon
                                icon={faSeedling}/> vegan</span> : <></>}
                            {recipeData.glutenFree ? <span className="primary-border p-1 primary-text"><FontAwesomeIcon
                                icon={faWheatAwn}/> gluten free</span> : <></>}
                        </div>

                        <>{averageRating === 0 ? "No Rating" : renderIcons(averageRating)}</>
                        <PinDetail recipeId={params.id} recipeInfo={recipeData} />

                    </div>

                        <div className="border-bottom border-top border-1 px-3 pt-3">
                            <h5>Ingredients</h5>
                            <ul>
                                {
                                    recipeData.extendedIngredients && recipeData.extendedIngredients.map((i) =>
                                        (
                                            i.nameClean ? <li>{i.amount} {i.unit} {i.nameClean}</li> : <></>
                                        ))
                                }
                            </ul>
                        </div>
                        <div className="px-3 pt-3">
                            <h5>Instructions</h5>
                            <ol>
                                {
                                    recipeData.analyzedInstructions && recipeData.analyzedInstructions[0].steps.map((i) =>
                                        (
                                            <li>{i.step}</li>
                                        ))
                                }
                            </ol>
                        </div>
                        </div>
                    <div className="p-2">
                        <h4 className="title">Reviews</h4>
                    {
                        (currentAdmin || currentReviewer) &&
                        <NewReview recipeId={params.id} recipeInfo={recipeData}  />
                    }
                    <ReviewList recipeId={params.id} reviewList={reviewList}/>
                    </div>
                </div>
                    <div className="d-none d-sm-none d-md-block col-md-3 mt-3 ">
                        <div className="border rounded">
                        <h4 className="text-center ">You may also like</h4>
                        <RecipeList/>
                        </div>
                    </div>
                </div>

        </>
    )
}

export default Detail;