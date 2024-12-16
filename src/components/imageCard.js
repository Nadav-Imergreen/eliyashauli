import React from "react";
import { Card, Col } from "react-bootstrap";

function ImageCard({ image }) {
    return (
        <Col>
            <Card className="h-100">
                <Card.Img
                    variant="top"
                    src={image.url}
                    alt={image.name || "Image"}
                    style={{ height: "200px", objectFit: "cover" }}
                />
                <Card.Body>
                    <Card.Title>{image.name || "Untitled"}</Card.Title>
                    <Card.Text>
                        {image.description || "No description available"}
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    );
}

export default ImageCard;
