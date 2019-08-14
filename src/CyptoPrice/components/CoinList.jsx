import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { SIGNUP_ROUTE } from '../../_main/routeConstants';

import Loading from '../../Loading';

export default function CoinList() {
  // Uncomment this line to show ErrorFallback component
  // throw new Error();
  const [list, setList] = useState([]);
  const [isLoading, setLoading] = useState(false);

  // Fetch function
  useEffect(() => {
    setLoading(true);
    fetch('https://api.coinpaprika.com/v1/coins')
      .then((res) => res.json())
      .then((json) => {
        setLoading(false);
        setList(json);
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  }, []);

  const renderList = () => (
    <ul>
      {list.map(({ id, name }) => <li key={id}>{name}</li>)}
    </ul>
  );

  return (
    <div>
      <h2>Coin List</h2>
      <Link to={SIGNUP_ROUTE}>Go to Coin List Page</Link>
      { isLoading && <Loading />}
      { !isLoading && list.length > 0 && renderList()}
      {/* <pre>{JSON.stringify(list, null, 4)}</pre> */}
    </div>
  );
}
