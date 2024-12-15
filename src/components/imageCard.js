import { Button, Card, ListGroup } from 'react-bootstrap';
import DEFAULT_IMAGE from '../../Images/default photo.jpeg';
import { postMovie } from "../cart/CartApi";
import { PRICE } from "../../Consts";
import React, { useState } from "react";
import ErrorLine from "./ErrorLine";

/**
 * This component represents a movie card displaying movie details and an option to add it to the cart.
 *
 * @param {Object} movie - The movie object containing details like title, poster path, release date, and popularity.
 * @returns {JSX.Element} The rendered component.
 */
function MovieCard({ movie }) {

    const [errorMassage, setErrorMassage] = useState(null);
    const [successMessage, setSuccessMessage] = useState(null);

    const posterSrc =
        movie.poster_path != null
            ? 'https://image.tmdb.org/t/p/w200/' + movie.poster_path
            : DEFAULT_IMAGE;

    /**
     * Handles the click event when the "add to cart" button is clicked.
     * Posts the movie data to the cart API.
     */
    async function handleClick() {
        const purchaseData = {
            name: movie.title,
            price: PRICE,
            id: movie.id
        };
        await postMovie(purchaseData)
            .then(() => setSuccessMessage("item added to cart"))
            .catch((err) => {
                setSuccessMessage(null);
                setErrorMassage(err.message)
            });
    }

    return (
        <div>
            {<Card style={{ width: '18rem', cursor: 'pointer' }}>
                <Card.Img
                    className="movie-poster"
                    variant="top"
                    src={posterSrc}
                    alt={movie.title}
                />
                <Card.Body>
                    <Card.Header>{movie.title}</Card.Header>
                    <ListGroup variant="flush">
                        <ListGroup.Item>
                            <strong>Release Date:</strong> {movie.release_date}
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <strong>Popularity:</strong> {movie.popularity}
                        </ListGroup.Item>
                    </ListGroup>
                </Card.Body>
                <Card.Footer className="d-flex justify-content-between align-items-center">
                    <span>{"price: " + PRICE}</span>
                    <Button onClick={handleClick}>add to cart</Button>
                </Card.Footer>
            </Card>}
            {errorMassage && <ErrorLine message={errorMassage} />}
            {successMessage && <div className="alert alert-success" role="alert">
                {successMessage}
            </div>}
        </div>
    );
}

export default MovieCard;