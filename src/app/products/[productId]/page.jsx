import React from 'react'

const ProductId = ({params}) => {
    console.log(params);
  return (
    <div>ProductId {params.productId}</div>
  )
}

export default ProductId