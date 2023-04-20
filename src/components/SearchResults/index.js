import {Card, Col} from "react-bootstrap";
import {Link} from "react-router-dom";

const SearchResults = (recipes, index) => {
    const recipe = recipes.recipes
    index  = index? index: recipes.index
    return (<Col key={index} xs={12} md={4} lg={3} sm={6}>
        <Card className="shadow p-0 mb-5 bg-white rounded">
            <Card.Img src={recipe.image} />
            <Card.Body>

                <Link to={'/detail/' + recipe.id}  className="stretched-link" >
                    <Card.Title>{recipe.title}</Card.Title>
                </Link>

                {/*<Card.Text>{recipe.summary.substring(0, 100)} {recipe.summary.length >= 200 && '...'}</Card.Text>*/}
            </Card.Body>
        </Card>
    </Col>)

}

export default SearchResults;