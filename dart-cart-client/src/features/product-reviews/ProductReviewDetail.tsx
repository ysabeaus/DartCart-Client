import { useState } from "react";
import { Alert, Modal, Button, Form } from "react-bootstrap";
function ProductReviewDetail() {
    const [showModal, setShowModal] = useState(false);

    const handleClose = () => {
        setShowModal(false);
    };
    const handleOpen = () => {
        setShowModal(true);
    };

    return (
        <div>
            <Button onClick={handleOpen}>Leave a Product Review</Button>
            <Modal show={showModal}  onHide={() => setShowModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Leave a Product Review</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Please tell us how you feel about this product.
                    <br />                    
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="name@example.com" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Example textarea</Form.Label>
                            <Form.Control as="textarea" rows={11} style={{height:'200px'}}/>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={handleClose}>Close</Button>
                </Modal.Footer>
            </Modal>

        </div>
    )
}

export default ProductReviewDetail