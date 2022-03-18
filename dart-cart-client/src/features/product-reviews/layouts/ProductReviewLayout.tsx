import React, { useState, useEffect } from 'react'
import { Col, Row, Container, Image, Form, Button } from "react-bootstrap";
import ProductReview from '../ProductReview'

function ProductReviewLayout() {
    const [formData, setFormData] = useState({ layoutSections: "" })
    const [sections, setSections] = useState([
        { title: "Section1", fluid: true },
        { title: "Section2", fluid: true },
        { title: "Section3", fluid: false },
        { title: "Section4", fluid: false },
        { title: "Section5", fluid: true },
        { title: "Section6", fluid: true },
 ])
    const [showLayoutControls, setLayoutControls] = useState(true)

    const [dLayoutData, setDLayoutData] = useState({
        sections: [{
            id: 0,
            section: true,
            cols: [4, 5, 3, 4, 4, 4],
            featureTypesArry: ['i', '5', 'p', 't', 't', 't']
        }
        ]
    })


    // useEffect(() => {
    //     console.log(showLayoutControls)
    //     console.log(sections)
    //     setSections(dLayoutData.sections.map(e => e.section))
    // }, [])

    useEffect(() => {
        console.log(showLayoutControls)
        console.log(sections)
    }, [sections, showLayoutControls])

    const handleChange = (e) => {
        const layoutString = e.target.value;
        console.log(layoutString)
        if (e.target.name === 'layoutSections') {
            setFormData({ ...formData, [e.target.name]: e.target.value })
            setSections(layoutString.split("").map(e => e === '1' ? true : false))
        } else {
            setLayoutControls(e.target.checked)
        }
    }

    const loadLayouts = () => {
        console.log('loadLayouts')
        // console.log(showLayoutControls)
        console.log('dLayoutData: ', dLayoutData)
        setDLayoutData({
            sections: [
                {
                    id: 0,
                    section: true,
                    cols: [4, 5, 3, 4, 4, 4],
                    featureTypesArry: ['i', '5', 'p', 't', 't', 't']
                },
                {
                    id: 1,
                    section: true,
                    cols: [4, 5, 3, 4, 4, 4],
                    featureTypesArry: ['i', '5', 'p', 't', 't', 't']
                }
            ]
        })
        // setSections(dLayoutData.sections.map(e => e.section))
    }
    return (
        <>
            <Form.Group id="fg-1" className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" checked={showLayoutControls} onChange={e => handleChange(e)} label="Check me out" />
            </Form.Group>
            {showLayoutControls && <Form>
                <Button onClick={loadLayouts}>LoadLayouts</Button>
                <fieldset >
                    <Form.Group id="fg-2" className="mb-3">
                        {/* <Form.Label htmlFor="disabledTextInput">Layout input</Form.Label> */}
                        <Form.Control name="layoutSections" value={formData.layoutSections} id="disabledTextInput" placeholder="Disabled input" onChange={e => handleChange(e)} />
                    </Form.Group>

                </fieldset>
            </Form>}
            {sections.map((e, i) => <>
                <section key={`prl-sec-${i}`} style={{ backgroundColor: 'gray' }}>
                    <h1 key={`prl-sec-h1-${i}`}>Section</h1>
                </section>
                <ProductReview key={`prl-${i}`} showLayoutControls={showLayoutControls}

                    fluid={e.fluid} />
            </>)}
        </>
    )
}

export default ProductReviewLayout