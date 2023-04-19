import {useDispatch, useSelector} from "react-redux";
import React, {useEffect} from "react";
import {Card, Row} from "react-bootstrap";
import SearchResults from "../SearchResults";
import {recipeDetailThunk} from "../../services/recipe-detail-thunk";
import {Link, useParams} from "react-router-dom";

const Detail = () => {
    const params = useParams();
    const {recipeData, loading} = useSelector(state => state.recipeData)
    const dispatch = useDispatch()

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

                <Card className="shadow p-0 mb-5 bg-white rounded">
                    <Card.Img src={recipeData.image} />
                    <Card.Body>

                        {/*<Link to={'/detail/' + recipe.id}  className="stretched-link" >*/}
                            <Card.Title>{recipeData.title}</Card.Title>
                        {/*</Link>*/}
                        {/*<Card.Text>{recipe.summary.substring(0, 100)} {recipe.summary.length >= 200 && '...'}</Card.Text>*/}
                    </Card.Body>
                </Card>



        </>
    )
}

export default Detail;