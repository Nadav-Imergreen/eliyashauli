import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import ImageCard from "./ImageCard";
import { Modal, Button } from "react-bootstrap";
import { useState } from 'react';

function ResultsTable({ searchResults }) {


    const [selectedIndex, setSelectedIndex] = useState(null);

    const handleSelect = (index) => {
        setSelectedIndex(index);
    };

    const handleNext = () => {
        if (selectedIndex < searchResults.length - 1) {
            setSelectedIndex(selectedIndex + 1);
        }
    };

    const handlePrevious = () => {
        if (selectedIndex > 0) {
            setSelectedIndex(selectedIndex - 1);
        }
    };

    return (
       <React.Fragment >
        <Container>
            <Row xs={1} sm={2} md={3} lg={4} className="g-4">
                    {searchResults.map((image, index) => (
                        <div onClick={() => handleSelect(index)}>
                            <ImageCard key={image.id} image={image} />
                        </div>
                ))}
            </Row>
            </Container>

        {/* Modal for Detailed View */ }
    {
        selectedIndex !== null && (
            <Modal show={true} onHide={() => setSelectedIndex(null)} centered>
                <Modal.Header closeButton>
                    <Modal.Title>{searchResults[selectedIndex].name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <img
                        src={searchResults[selectedIndex].url}
                        alt={searchResults[selectedIndex].name || "Image"}
                        style={{ width: "100%", height: "auto" }}
                    />
                    <p>{searchResults[selectedIndex].description}</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handlePrevious} disabled={selectedIndex === 0}>
                        Previous
                    </Button>
                    <Button variant="secondary" onClick={handleNext} disabled={selectedIndex === searchResults.length - 1}>
                        Next
                    </Button>
                </Modal.Footer>
            </Modal>
        )
            }
        </React.Fragment>
    );
}

export default ResultsTable;
