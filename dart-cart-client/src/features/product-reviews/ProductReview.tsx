import React, { useState, useEffect } from 'react'
import { Col, Row, Container, Image, Form } from "react-bootstrap";
import DLayout from './DLayout';
import MiscTableOne from './misc/MiscTableOne';
import ProductReviewCard from "./product-review-card/ProductReviewCard"
import ProductImages from './ProductImages';
import ProductReviewDetail from './ProductReviewDetail';


function ProductReview(props) {
    const [fluid, setFluid] = useState(props.fluid);
    const [featureTypes, setFeatureTypes] = useState({
        // 1: <ProductReviewCard title={"Hello"} />,
        // 2: <ProductReviewCard />,
        // 3: <ProductImages />,
        // 4: <MiscTableOne />,
        // 5: <ProductReviewDetail />
    })
    const [featureTypesArry, setFeatureTypesArry] = useState([3, 2, 4]);
    const [cols, setCols] = useState([3, 6, 3])
    const [features, setFeatures] = useState([
        <ProductImages />,
        <ProductReviewCard title={"bye"} />,
        <ProductReviewCard title={"hi"} />,
        <ProductReviewCard title={"hi"} />,
        <ProductImages />,
        <ProductReviewCard title={"hi"} />,
        <ProductReviewCard title={"hi"} />,
        <ProductReviewCard title={"hi"} />,
        <ProductReviewCard title={"hi"} />,
        <ProductReviewCard title={"hi"} />,
        <ProductReviewCard title={"hi"} />
    ])

    useEffect(() => {

        const jsonData = [
            {
                code: 0,
                componentType: "ProductReviewCard",
                props: {
                    title: "zero"
                },
            },
            {
                code: "i",
                componentType: "ProductImages",
                // props: {
                //     title: "one"
                // },
            },
            {
                code: 1,
                componentType: "ProductReviewCard",
                props: {
                    title: "one"
                },
            },
            {
                code: 2,
                componentType: "ProductReviewCard",
                props: {
                    title: "two"
                },
            },
            {
                code: "t",
                componentType: "MiscTableOne",
                props: {
                    title: "T"
                },
            }
        ]
        // const myNums = ['zero', 'one', 'two', 'three', 'four', 'five']
        // const arr = [0, 1, 2, 3];
        // const componentsArry = ["ProductReviewCard", "ProductReviewCard", "ProductReviewCard", "ProductReviewCard"];

        const components = {
            "ProductReviewCard": ProductReviewCard,
            "ProductImages": ProductImages,
            "MiscTableOne": MiscTableOne,
            "ProductReviewDetail": ProductReviewDetail
        };

        const res = jsonData.reduce((acc, curr, i) => (acc[curr.code] = React.createElement(components[jsonData[i].componentType], jsonData[i].props), acc), {});
        // const res = arr.reduce((acc, curr) => (acc[curr] = React.createElement(components[componentsArry[curr]], { title: myNums[curr] }), acc), {});

        console.log(res)
        setFeatureTypes(res)

    }, [])

    useEffect(() => {
        setFeatures(featureTypesArry.map(e => featureTypes[e]))
    }, [featureTypesArry])

    const handleChange = (e) => {
        const layoutString = e.target.value;
        console.log(layoutString)
        e.target.name === 'layoutCols' ? setCols(layoutString.split("")) : setFeatureTypesArry(layoutString.split(""))
    }

    return (<>
        <Form>
            <fieldset >
                <Form.Group className="mb-3">
                    <Form.Label htmlFor="disabledTextInput">Layout input</Form.Label>
                    <Form.Control name="layoutCols" id="disabledTextInput" placeholder="Disabled input" onChange={e => handleChange(e)} />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label htmlFor="disabledTextInput">Layout input</Form.Label>
                    <Form.Control name="feature_types" id="disabledTextInput" placeholder="Disabled input" onChange={e => handleChange(e)} />
                </Form.Group>

            </fieldset>
        </Form>
        <Container fluid={fluid}>
            <DLayout cols={cols} features={features} dname={"section1"} />
        </Container>
    </>
    )
}

export default ProductReview