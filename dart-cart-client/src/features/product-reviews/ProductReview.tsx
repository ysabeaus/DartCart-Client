import React, { useState, useEffect, lazy } from 'react'
import { Col, Row, Container, Image, Form } from "react-bootstrap";
import DLayout from './DLayout';

function ProductReview(props) {

    const res = props.jsonData.reduce((acc, curr, i) => (acc[curr.code] = React.createElement(props.components[props.jsonData[i].componentType], props.jsonData[i].props), acc), {});

    const [formData, setFormData] = useState({ layoutCols: "", feature_types: "" })

    const [featureTypes, setFeatureTypes] = useState({
        // 1: <ProductReviewCard title={"Hello"} />,
        // 2: <ProductReviewCard />,
        // 3: <ProductImages />,
        // 4: <MiscTableOne />,
        // 5: <ProductReviewDetail />
    })

    const [features, setFeatures] = useState([])
    const [featureTypesArry, setFeatureTypesArry] = useState([]);
    const [cols, setCols] = useState([])

    useEffect(() => {

        console.log('useEffect, res: ', res)
        setFeatureTypes(res)

        console.log('useEffect[] featureTypesArry: ', featureTypesArry)
        console.log('useEffect[] cols: ', cols)

        setFeatureTypesArry(props.featureTypesArry)
        setCols(props.cols)

    }, [])


    useEffect(() => {
        setFeatures(featureTypesArry.map(e => featureTypes[e]))
    }, [featureTypesArry])

    useEffect(() => {
        console.log('useEffect formData: ', formData)
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
        <Container fluid={props.fluid}
            // style={{ backgroundColor: 'white', padding: '25px', marginBottom: '25px' }}
        >
            <DLayout cols={cols} features={features} dname={"section1"} />
        </Container>
    </>
    )
}

export default ProductReview