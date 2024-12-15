import React from "react";
import { Row, Col } from "react-bootstrap";

/**
 * This component represents a table for displaying search results as movie cards.
 *
 * @param {Object[]} searchResults - An array of movie objects representing the search results.
 * @returns {JSX.Element} The rendered component.
 */
function ResultsTable({ searchResults }) {

    return (
        <Row xs={1} md={2} lg={3} className="g-4">
            {searchResults.map((image) => (
                <Col key={image.id}>
               { image.url}
                    {/*<MovieCard movie={image}/>*/}
                </Col>
            ))}
        </Row>
    );
}

export default ResultsTable;