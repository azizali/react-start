import React from 'react';
import { Route } from 'react-router-dom';
import { PRODUCT_ROUTE } from '../../_main/routeConstants';
import ProductList from './ProductList';
import ProductDetails from './ProductDetails';

export default function Products() {
  return (
    <>
      <h1>This is Products</h1>
      <Route path={PRODUCT_ROUTE} component={ProductList} />
      <Route path={`${PRODUCT_ROUTE}/:id`} component={ProductDetails} />
    </>
  );
}
