import React from 'react'

const ProductCategoryRow = ({ category }) =>  {
    return (
        <div className='productCategoryRow'>

        
      <tr>
        <th colSpan="2">
          {category}
        </th>
      </tr>
      </div>
    );
  }

export default ProductCategoryRow