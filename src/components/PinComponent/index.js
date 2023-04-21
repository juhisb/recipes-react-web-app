import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {addPinnedRecipeThunk, removePinnedRecipeThunk} from "../../services/pinned-recipe-thunk";
import {getPinCount, getUserPinnedRecipe} from "../../services/pinned-recipe-service";

const PinDetail = ({
                       recipeId,
                       recipeInfo
                   }) => {
    const { currentUser } = useSelector(state => state.userData);
    const [userPinsRecipe, setUserPinsRecipe] = useState(false);
    const [recipePins, setRecipePins] = useState(0);
    const dispatch = useDispatch();
    const pinRecipeHandler = async () => {
        if (!currentUser) {
            alert('You need to login to perform this action!')
            return;
        }
        const userPinnedRecipe = {
            userId: currentUser._id,
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
        <div className="card-body">
            <h5 className="card-title"><a
                > {!userPinsRecipe ?
                <i className="bi bi-pin-angle" onClick={pinRecipeHandler}></i> :
                <i className="bi bi-pin-fill" onClick={pinRecipeHandler}></i> }
            </a>
                <span className="star-text ms-2">{} {recipePins} Pin(s)</span></h5>

        </div>
    )
}

export default PinDetail;