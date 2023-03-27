import React from 'react';
import data from '../data';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Dashboard() {
  const [stocks, setStocks] = useState(data);

  return (
    <div>
      <h1>Stocks</h1>

      {stocks.map((item) => {
        const { name, symbol } = item;
        return (
          <div>
            <Link to={`/stocks/${symbol}`} key={symbol}>
            <h3>{name} ({symbol})</h3>
            </Link>
          </div>
        );
      })}
    </div>
  );
}