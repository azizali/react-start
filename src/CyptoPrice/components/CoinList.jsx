import React, { useEffect, useState } from 'react';
import Loading from '../../Loading';

export default function CoinList() {
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
      { isLoading && <Loading />}
      { !isLoading && list.length > 0 && renderList()}
      {/* <pre>{JSON.stringify(list, null, 4)}</pre> */}
    </div>
  );
}
