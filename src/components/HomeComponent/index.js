import React, {useEffect, useState} from "react";
import RecipeList from "../RecipeList";
import {useDispatch, useSelector} from "react-redux";
import UserReview from "../UserReview";
import PinnedRecipe from "../PinnedRecipe";
import {findApprovedReviewerThunk} from "../../services/reviewer-thunk";
import TopRecipes from "./top-recipes";
import {resetSearch} from "../../reducers/search-reducer";
import {recipesThunk} from "../../services/recipes-thunk";
import {useNavigate} from "react-router";
import {getPendingReviewers} from "../../services/reviewer-service";

const HomeScreen = () => {
    const [searchQuery, setSearchQuery] = useState('')
    const [pendingList, setPendingList] = useState([]);
    const navigate = useNavigate();
    const { currentUser } = useSelector(state => state.userData);
    const { currentReviewer } = useSelector(state => state.reviewer);
    const {currentAdmin} = useSelector(state => state.adminData)
    const dispatch = useDispatch();
    useEffect(() => {
        if (currentUser) {

            dispatch(findApprovedReviewerThunk(currentUser.username))
            console.log(currentReviewer)
        }
        if(currentAdmin) {
            const getPendingList = async () => {
                const pendingListResponse = await getPendingReviewers()
                setPendingList(pendingListResponse)
            }
            getPendingList();
        }
    }, [])
    console.log(currentReviewer)
    return (
        <div>
            <div className="text-center p-2"><h2 >Meal Planning Simplified!</h2></div>
            {
                currentAdmin &&  <div className={`alert ${pendingList.length > 0 ? "alert-danger" : "alert-success"}`} role="alert">
                    You have {pendingList.length} user(s) left to review!
                </div>
            }

            <div className="row mx-auto p-2 ">
                <div className="col-10 col-md-11">
                    <input placeholder="Search recipes"
                           className="form-control "
                           onChange={(e) => {
                               setSearchQuery(e.target.value)
                           }}
                           value={searchQuery}/>
                </div>

                <div className="col-2 col-md-1 float-end">
                    <button
                        className="btn btn-dark "
                        onClick={() => {
                            navigate(`/search/${searchQuery}`)
                        }}>
                        Search
                    </button>
                </div>
            </div>
            <TopRecipes/>
            {
                currentUser ? <>
                    {currentUser.accountType === 'USER' ? <div className="p-3 mt-3">
                        <h3 className="title mt-3"> Recipes Pinned </h3>

                        <PinnedRecipe/>
                    </div> : null}

                    { currentReviewer && <div className="p-3 mt-3">
                        <h3 className="title mt-3"> Reviews Posted </h3>
                        <UserReview/>
                    </div> }
                </> : null
            }
        </div>
    );
}
export default HomeScreen;