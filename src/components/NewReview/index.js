import React, { useState } from "react";
import { createReviewThunk }
    from "../../services/review-thunk";
import { useDispatch, useSelector } from "react-redux";
import { Rating } from 'react-simple-star-rating'
const NewReview = (
    {
        recipeId,
        recipeInfo
    }) => {
    let [reviewByUser, setReviewByUser] = useState('');
    const { currentUser } = useSelector(state => state.userData);
    const { currentAdmin } = useSelector(state => state.adminData);
    console.log(recipeInfo)
    const [rating, setRating] = useState(0)
    const dispatch = useDispatch();
    const reviewClickHAndler = () => {
        if (!currentUser && !currentAdmin) {
            alert('You need to login to perform this action!')
            return;
        }
        const newReview = {
            recipeId: recipeId,
            reviewBy: currentAdmin ? currentAdmin : currentUser,
            review: reviewByUser,
            rating: rating,
            recipeImage: recipeInfo.image,
            recipeTitle: recipeInfo.title
        }
        dispatch(createReviewThunk(newReview));
        setReviewByUser('')
    }

    // Catch Rating value
    const handleRating = (rate) => {
        setRating(rate)
    }
    // Optinal callback functions
    const onPointerEnter = () => console.log('Enter')
    const onPointerLeave = () => console.log('Leave')
    const onPointerMove = (value, index) => console.log(value, index)
    return (
        <><div className="card shadow-sm p-3 mb-5 bg-body rounded">
            <div className="card-body">
                <h5>Add a review</h5>
                <Rating
                    onClick={handleRating}
                    onPointerEnter={onPointerEnter}
                    onPointerLeave={onPointerLeave}
                    onPointerMove={onPointerMove} />

                <hr />

                <div>
                    <textarea value={reviewByUser} placeholder="Share what you thought about the recipe..."
                              className="form-control border"
                              onChange={(event) => setReviewByUser(event.target.value)}>
                    </textarea>
                </div>
                <hr />
                <div className="float-end">
                    <button className="rounded btn btn-dark float-end mt-2 ps-3 pe-3 fw-bold"
                            onClick={reviewClickHAndler}>
                        Add
                    </button>
                </div>
            </div>
        </div></>
    );
}
export default NewReview;