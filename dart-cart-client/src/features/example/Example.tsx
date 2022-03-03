import React, { useEffect } from "react";
import { Container, Button, Row, Spinner } from "react-bootstrap";
import { useAppSelector, useAppDispatch } from "../../common/hooks";
import { orderedProductsDeleted } from '../../common/exampleSlice'
import { fetchProducts, selectProducts, selectOrderedProducts, selectStatus } from '../../common/exampleSlice'
import { Product } from '../../common/types'

function Example() {

    const products = useAppSelector(selectProducts)
    const orderedProducts = useAppSelector(selectOrderedProducts)
    const status = useAppSelector(state => selectStatus(state))
    const dispatch = useAppDispatch();
    
    let content, orderedContent

    useEffect(() => {
        dispatch(fetchProducts())
    }, [])

    const deleteOrderedProducts = () => {
        dispatch(orderedProductsDeleted())
    }

    if(status === "loading") {
        content = <Spinner animation="border" />
        orderedContent = <Spinner animation="border" />
    } else {
        content = <ul className="list-group">
            { products.map((product: Product) => <li key={product.id} className="list-group-item text-center"> {product.id}. {product.name} </li>) }
        </ul>
        orderedContent = <ul className="list-group">
            { orderedProducts.map((product: Product) => <li key={product.id} className="list-group-item text-center"> {product.id}. {product.name} </li>) }
        </ul>
    }

    return (<>
        <Row>
            <h1 className="text-center">My Example Component</h1>
            <p>"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."</p>
        </Row>
        <Row>
            <h2 className="text-center">These are all the products.</h2>
            <Container className="d-flex justify-content-center">
                { content }
            </Container>
        </Row>
        <Row>
            <h2 className="text-center">These are all the ordered products.</h2>
            <Container className="d-flex justify-content-center">
                { orderedContent }
            </Container>
        </Row>
        <Row>
            <Container className="d-flex justify-content-center">
                <Button onClick={deleteOrderedProducts}>Delete Ordered Products</Button>
            </Container>
        </Row>
    </>)
}

export default Example;