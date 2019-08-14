import React from 'react';
import { Link } from 'react-router-dom';
import { PRODUCT_ROUTE } from '../../_main/routeConstants';

export default function ProductList() {
  return (
    <>
      <h1>Product List!</h1>
      <Link to={`${PRODUCT_ROUTE}/one`}>Go to product one</Link>
    </>
  );
}
