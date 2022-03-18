import React from 'react'
import ProductReview from '../ProductReview'

function ProductReviewLayout() {
    return (
        <div>
            <ProductReview fluid={true} />
            <ProductReview fluid={true} />
        </div>
    )
}

export default ProductReviewLayout