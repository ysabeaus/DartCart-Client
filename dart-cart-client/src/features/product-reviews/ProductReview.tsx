import React, { useState, useEffect } from 'react'
import { Col, Row, Container, Image, Form } from "react-bootstrap";
import DLayout from './DLayout';
import MiscTableOne from './misc/MiscTableOne';
import ReactIcon from './misc/ReactIcon';
import ProductPurchaseCard from './product-purchase-card/ProductPurchaseCard';
import ProductReviewCard from "./product-review-card/ProductReviewCard"
import ProductImages from './ProductImages';
import ProductReviewDetail from './ProductReviewDetail';


function ProductReview(props) {

    const [formData, setFormData] = useState({ layoutCols: "", feature_types: "" })

    const [featureTypes, setFeatureTypes] = useState({
        // 1: <ProductReviewCard title={"Hello"} />,
        // 2: <ProductReviewCard />,
        // 3: <ProductImages />,
        // 4: <MiscTableOne />,
        // 5: <ProductReviewDetail />
    })
    const [featureTypesArry, setFeatureTypesArry] = useState([]);
    const [cols, setCols] = useState([])
    
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

    const jsonData = [
        {
            code: "0",
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
            code: "1",
            componentType: "ProductReviewCard",
            props: {
                title: "Horrible! One star",
                rating: 1
            },
        },
        {
            code: "2",
            componentType: "ProductReviewCard",
            props: {
                title: "Not that good. Two stars",
                rating: 2
            },
        },
        {
            code: "3",
            componentType: "ProductReviewCard",
            props: {
                title: "It's ok. Three stars",
                rating: 3
            },
        },
        {
            code: "4",
            componentType: "ProductReviewCard",
            props: {
                title: "Really like it! Four Stars",
                rating: 4
            },
        },
        {
            code: "5",
            componentType: "ProductReviewCard",
            props: {
                title: "I Love It! Five Stars",
                rating: 5
            },
        },
        {
            code: "t",
            componentType: "MiscTableOne",
            props: {
                title: "T"
            },
        },
        {
            code: "p",
            componentType: "ProductPurchaseCard",
            props: {
                title: "FREE devlivery"
            },
        },
        {
            code: "c",
            componentType: "ProductReviewDetail",
            props: {
                title: "FREE devlivery"
            },
        },
        {
            code: "r",
            componentType: "ReactIcon",

        }
    ]
    // const myNums = ['zero', 'one', 'two', 'three', 'four', 'five']
    // const arr = [0, 1, 2, 3];
    // const componentsArry = ["ProductReviewCard", "ProductReviewCard", "ProductReviewCard", "ProductReviewCard"];

    const components = {
        "ProductReviewCard": ProductReviewCard,
        "ProductImages": ProductImages,
        "MiscTableOne": MiscTableOne,
        "ProductReviewDetail": ProductReviewDetail,
        "ProductPurchaseCard": ProductPurchaseCard,
        "ReactIcon": ReactIcon
    };

    const res = jsonData.reduce((acc, curr, i) => (acc[curr.code] = React.createElement(components[jsonData[i].componentType], jsonData[i].props), acc), {});
    // const res = arr.reduce((acc, curr) => (acc[curr] = React.createElement(components[componentsArry[curr]], { title: myNums[curr] }), acc), {});


    useEffect(() => {

        console.log(res)
        setFeatureTypes(res)

    }, [])


    useEffect(() => {
        setFeatures(featureTypesArry.map(e => featureTypes[e]))
    }, [featureTypesArry])

    useEffect(() => {
        console.log(formData)
    }, [formData])

    const handleChange = (e) => {
        const layoutString = e.target.value;
        console.log(layoutString)
        setFormData({ ...formData, [e.target.name]: e.target.value })
        e.target.name === 'layoutCols' ? setCols(layoutString.split("")) : setFeatureTypesArry(layoutString.split(""))
    }

    return (<>
        {props.showLayoutControls && <Form >
            <fieldset >
                <Form.Group className="mb-3">
                    {/* <Form.Label htmlFor="disabledTextInput">Layout input</Form.Label> */}
                    <Form.Control name="layoutCols" value={formData.layoutCols} id="disabledTextInput" placeholder="Disabled input" onChange={e => handleChange(e)} />
                </Form.Group>
                <Form.Group className="mb-3">
                    {/* <Form.Label htmlFor="disabledTextInput">Layout input</Form.Label> */}
                    <Form.Control name="feature_types" value={formData.feature_types} id="disabledTextInput" placeholder="Disabled input" onChange={e => handleChange(e)} />
                </Form.Group>

            </fieldset>
        </Form>}
        <Container fluid={props.fluid}>
            <DLayout cols={cols} features={features} dname={"section1"} />
        </Container>
    </>
    )
}

export default ProductReview