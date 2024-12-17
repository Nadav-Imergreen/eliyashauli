import React, { useState, useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import {getImages} from '../services/imagesStorage';
import ErrorLine from './ErrorLine';
import Loading from './Loading';
import ResultsTable from './ResulteTable';

function Gallery() {

    const [searchResults, setSearchResults] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    // Fetch images on component load
    useEffect(() => {
        const fetchImages = async () => {
            setLoading(true);
            setError(null);

            try {
                const images = await getImages();
                setSearchResults(images);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchImages();
    }, []);

    return (
        <React.Fragment>
            <hr style={{ margin: '2rem 0' }} />
            <Container className="my-4">
                <Row>
                    <Col>
                        {error ? (
                            <ErrorLine message={error} />
                        ) : loading ? (
                            <Loading />
                        ) : searchResults.length > 0 ? (
                            <ResultsTable searchResults={searchResults} />
                        ) : (
                            <p>No images found.</p>
                        )}
                    </Col>
                </Row>
            </Container>
        </React.Fragment>
    );
}

export default Gallery;




