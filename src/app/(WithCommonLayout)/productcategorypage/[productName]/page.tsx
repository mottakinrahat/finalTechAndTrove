import React from "react";

const ProductCategoryPage = ({ params }) => {
  
  return (
    <div>
      <h1>{params.productName}</h1>
    </div>
  );
};

export default ProductCategoryPage;
