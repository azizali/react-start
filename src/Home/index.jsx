import React from 'react';
import { Link } from 'react-router-dom';
import { PRODUCT_ROUTE } from '../_main/routeConstants';
import ColorPicker from '../ColorPicker';

export default function Home() {
  return (
    <>
      <h1>Welcom Back!</h1>
      <ColorPicker />
      <div>This is home</div>
      <Link to={PRODUCT_ROUTE}>Products</Link>
      <Link to={`${PRODUCT_ROUTE}/one`}>Products</Link>
    </>
  );
}
