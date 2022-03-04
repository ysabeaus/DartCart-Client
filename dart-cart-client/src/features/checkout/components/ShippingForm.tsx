import { Form, Button, Card } from "react-bootstrap";

export function Shipping() {
    return (
        <>
            <Card style={{ width: '18rem' }}>
                <h3>Shipping Information</h3>
                <Form>
                    <Form.Group className="mb-3" controlId="shippingStreet">
                        <Form.Control type="text" placeholder="Street Address" />
                        <Form.Text className="text-muted"></Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="shippingCity">
                        <Form.Control type="text" placeholder="City" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="shippingZip">
                        <Form.Control type="text" placeholder="Zip" />
                    </Form.Group>
                </Form>
            </Card>
        </>
    )
}
