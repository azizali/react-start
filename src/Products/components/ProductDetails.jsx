import React from 'react';
import { Link } from 'react-router-dom';
import { PRODUCT_ROUTE } from '../../_main/routeConstants';

export default function ProductDetails({ match }) {
  return (
    <>
      <h1>Product Details!</h1>
      <p>
        You are on product #id:
        {' '}
        {match.params.id}
      </p>
      <Link to={PRODUCT_ROUTE}>Go back to product list</Link>
    </>
  );
}
