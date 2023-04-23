import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {addPinnedRecipeThunk, removePinnedRecipeThunk} from "../../services/pinned-recipe-thunk";
import {getPinCount, getUserPinnedRecipe} from "../../services/pinned-recipe-service";

const PinDetail = ({
                       recipeId,
                       recipeInfo
                   }) => {
    const { currentUser } = useSelector(state => state.userData);
    const { currentAdmin } = useSelector(state => state.adminData);
    const [userPinsRecipe, setUserPinsRecipe] = useState(false);
    const [recipePins, setRecipePins] = useState(0);
    const dispatch = useDispatch();
    const pinRecipeHandler = async () => {
        if (!currentUser && !currentAdmin) {
            alert('You need to login to perform this action!')
            return;
        }
        const userPinnedRecipe = {
            userId: currentAdmin? currentAdmin._id : currentUser._id,
            recipeId: recipeId,
            recipeImage: recipeInfo.image,
            recipeTitle: recipeInfo.title
        }
        if (userPinsRecipe) {
            dispatch(removePinnedRecipeThunk(userPinnedRecipe))
            setRecipePins(recipePins - 1)
            setUserPinsRecipe(false)
            return;
        }
        dispatch(addPinnedRecipeThunk(userPinnedRecipe))
        setRecipePins(recipePins + 1)
        setUserPinsRecipe(true)
    }

    useEffect(() => {
        const getTotalPins = async () => {
            const recipePins = await getPinCount(recipeId)
            setRecipePins(recipePins)
        }

        const checkIfUserPinnedRecipe = async () => {
            if(!currentUser) {
                return;
            }
            const userPinsRecipe = await getUserPinnedRecipe(
                {
                    userId: currentUser._id,
                    recipeId: recipeId
                });
            setUserPinsRecipe(userPinsRecipe)
        }

        getTotalPins();
        checkIfUserPinnedRecipe();
    }, []);

    return(
        <div className="card-body mt-3">
            <h5 className="card-title   p-2"><a
                > {!userPinsRecipe ?
                <span className="border rounded p-2" onClick={pinRecipeHandler} ><i className="bi bi-pin-angle" ></i> PIN RECIPE</span> :
                <span className="border rounded p-2" onClick={pinRecipeHandler}><i className="bi bi-pin-fill" ></i> REMOVE PIN</span> }
            </a>
                </h5>
            <h6 className="mt-2"><span className="star-text mt-3 ms-2">{} {recipePins} Pin(s)</span></h6>

        </div>
    )
}

export default PinDetail;