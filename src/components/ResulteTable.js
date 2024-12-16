import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import ImageCard from "./ImageCard";

function ResultsTable({ searchResults }) {

    return (
        <Container>
            <Row xs={1} sm={2} md={3} lg={4} className="g-4">
                {searchResults.map((image) => (
                    <ImageCard key={image.id} image={image} />
                ))}
            </Row>
        </Container>
    );
}

export default ResultsTable;
