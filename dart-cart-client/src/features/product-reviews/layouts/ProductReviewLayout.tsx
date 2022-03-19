import React, { useState, useEffect, useRef } from 'react'
import { Col, Row, Container, Image, Form, Button } from "react-bootstrap";
import ProductReview from '../ProductReview'

function ProductReviewLayout() {
    const layoutRef = useRef()
    const [formData, setFormData] = useState({ layoutSections: "" })
    const [sections, setSections] = useState([
        { title: "", fluid: true, cols: ["z", "4", "5", "3"], featureTypesArry: ['i', 't', '5', 'p'] },
        // { title: "", fluid: true, cols: [], featureTypesArry: [] },
    ])
    const [showLayoutControls, setLayoutControls] = useState(false)

    const dLayoutData = [
        {
            title: "Featured Review",
            fluid: false,
            cols: ["z", "4", "5", "3"],
            featureTypesArry: ['i', 't', '5', 'p']
        },
        {
            title: "Featured Review",
            fluid: false,
            cols: ["4", "5", "3", "4", "5", "3", "4", "5", "3", "4", "5", "3"],
            featureTypesArry: ['i', '5', 'p', 'i', '5', 'p', 'i', '5', 'p', 'i', '5', 'p']
        },
        {
            title: "Featured Review",
            fluid: false,
            cols: ["3","6","3","3","6","3","3","6","3","3","6","3"],
            featureTypesArry: ['i', '5', 'p', 'i', '5', 'p', 'i', '5', 'p', 'i', '5', 'p']
        },
        {
            title: "Reviews",
            fluid: false,
            cols: ["4", "5", "3", "4", "4", "4"],
            featureTypesArry: ['i', '5', 'p', 't', 't', 'c']
        },
        {
            title: "Stories",
            fluid: false,
            cols: ["4", "4", "4", "4", "4", "4", "4", "4", "4"],
            featureTypesArry: ['i', 'i', 'i', '5', '4', '3', 'c', 'c', 'c']
        },
        {
            title: "Stories",
            fluid: true,
            cols: ["3", "3", "3","3", "3", "3","3", "3", "3","3", "3", "3"],
            featureTypesArry: ['i', 'i', 'i', 'i', '5', '4', '3', '2']
        },
        {
            title: "Stories",
            fluid: false,
            cols: ["8", "4", "4", "8", "8", "4", "4", "8"],
            featureTypesArry: ['5', 'i', 'i', '5', '5', 'i', 'i', '5']
        },
        {
            title: "Stories",
            fluid: false,
            cols: ["6", "6", "6", "6", "6", "6"],
            featureTypesArry: ['5', 'i', 'i', '5', '5', 'i', 'i', '5']
        },
        {
            title: "Stories",
            fluid: false,
            cols: ["6", "6", "6", "6", "6", "6"],
            featureTypesArry: ['5', 'r', 'r', '5', '5', 'r', 'r', '5']
        },
        // {
        //     title: "Stories",
        //     fluid: true,
        //     cols: ["8", "4", "4", "8", "8", "4", "4", "8"],
        //     featureTypesArry: ['5', 'i', 'i', '5', '5', 'i', 'i', '5']
        // }
    ]



    useEffect(() => {
        console.log(showLayoutControls)
        console.log('sections: ', sections)
    }, [sections, showLayoutControls])

    useEffect(() => {
        console.log('formData: ', formData)
        setSections(formData.layoutSections.split("").map((e, i) => i < sections.length ? e === "1" ? {
            ...sections[i],
            fluid: true,
            title: sections[i].title,
            cols: sections[i].cols,
            featureTypesArry: sections[i].featureTypesArry
        } :
            {
                ...sections[i],
                fluid: false,
                title: sections[i].title,
                cols: sections[i].cols,
                featureTypesArry: sections[i].featureTypesArry
            } : {
            ...sections[i],
            fluid: false,
            title: "Section",
            cols: [],
            featureTypesArry: []
        }))
    }, [formData])

    const handleChange = (e) => {
        const layoutString = e.target.value;
        console.log(layoutString)
        if (e.target.name === 'layoutSections') {
            setFormData({ ...formData, [e.target.name]: e.target.value })
        } else {
            setLayoutControls(e.target.checked)
        }
    }

    const loadLayouts = () => {
        console.log('loadLayouts')
        // console.log(showLayoutControls)
        console.log('dLayoutData: ', dLayoutData)

        setSections(dLayoutData)
        // setSections(dLayoutData.sections.map(e => { return { title: "", fluid: e.section, cols: e.cols.map(e => e), featureTypesArry: e.featureTypesArry.map(e => e) } }))
    }


    useEffect(() => {
        // console.log(showLayoutControls)
        // console.log(sections)
        // setSections(dLayoutData)
        loadLayouts()
    }, [])
    return (
        <>
            <Form.Group id="fg-1" className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" checked={showLayoutControls}
                    onChange={e => handleChange(e)}
                    label="Set Layout" />
            </Form.Group>
            {
                showLayoutControls && <Form>
                    <Button onClick={loadLayouts}>LoadLayouts</Button>
                    <fieldset >
                        <Form.Group id="fg-2" className="mb-3">
                            {/* <Form.Label htmlFor="disabledTextInput">Layout input</Form.Label> */}
                            <Form.Control name="layoutSections" value={formData.layoutSections} id="disabledTextInput" placeholder="Disabled input" onChange={e => handleChange(e)} />
                        </Form.Group>
                    </fieldset>
                </Form>
            }
            {sections.map((e, i) => <>
                <section key={`prl-sec-${i}`} style={{ backgroundColor: 'gray' }}>
                    <h1 key={`prl-sec-h1-${i}`}>{e.title}</h1>
                </section>
                <ProductReview key={`prl-${i}`} showLayoutControls={showLayoutControls}
                    cols={e.cols}
                    featureTypesArry={e.featureTypesArry}
                    fluid={e.fluid} />
            </>)}
        </>
    )
}

export default ProductReviewLayout