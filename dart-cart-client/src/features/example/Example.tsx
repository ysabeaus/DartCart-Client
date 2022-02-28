import React from "react";
import { RootState } from "../../common/store";
import { Container, Button, Row, Spinner } from "react-bootstrap";
import { useSelector } from 'react-redux'
import { selectOrderedProducts } from '../example/exampleSlice'
import { useGetAllProductsQuery } from "../../services/product"
import { Product } from '../../common/types'

function Example() {

    const { data, error, isLoading } = useGetAllProductsQuery(null)
    const products = useSelector((state: RootState) => state.products)
    // const orderedProducts = useSelector(selectOrderedProducts)

    let content

    if(isLoading) {
        content = <Spinner animation="border" />
    } else {
        content = <ul className="list-group">
            { data.map((product: Product) => <li key={product.id} className="list-group-item text-center"> {product.id}. {product.name} </li>) }
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
            {/* { orderedProducts.length() > 0 || 
                <ul className="list-group">
                    {orderedProducts.map((product: Product) => <li key={product.id} className="list-group-item text-center"> {product.id}. {product.name} </li>)}
                </ul>
            } */}
        </Row>
        <Row>
            <Container className="d-flex justify-content-center">
                <Button>Delete Ordered Products</Button>
            </Container>
        </Row>
    </>)
}

export default Example;