import { Card, Row, Col, Container } from "react-bootstrap";
import React from 'react';
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import APP_URL from "../../constants";
import {Link} from "react-router-dom";
const ReviewItem = (
    {
        rev
    }) => {

    const renderIcon = () => <FontAwesomeIcon
        icon={faStar}
        style={{ fontSize: 20, color: '#f1c40f' }}
    />;

    const renderIcons = num => [...Array(num)].map(renderIcon);

    return (
        <>
            {rev &&
                <Card className="shadow p-0 mb-5 bg-white rounded">
                    <Card.Img src={rev.recipeImage} />
                    <Card.Body>

                        <Link to={'/detail/' + rev.recipeId}>
                            <Card.Title>{rev.recipeTitle}</Card.Title>
                        </Link>
                        <hr />
                        <Card.Text>{rev.review}</Card.Text>
                        <div style={{ flexDirection: 'row', alignItems: 'center' }}>
                            {renderIcons(rev.rating)}
                        </div>
                    </Card.Body>
                </Card>


            }
        </>
    );
}

export default ReviewItem;