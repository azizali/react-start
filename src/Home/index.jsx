import React from 'react';
import { Link } from 'react-router-dom';
import { PRODUCT_ROUTE } from '../_main/routeConstants';

export default function Home() {
  return (
    <>
      <h1>Welcom Back!</h1>
      <div>This is home</div>
      <Link to={PRODUCT_ROUTE}>Products</Link>
      <Link to={`${PRODUCT_ROUTE}/one`}>Products</Link>
    </>
  );
}
