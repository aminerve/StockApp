import React from 'react';
import data from '../data';
import { useState } from 'react';

export default function Dashboard() {
    const [stocks, setStocks] = useState(data)
    console.log(stocks);
  return (
    <div>
        <h1>Stocks</h1>

    {stocks.map((item) => {
        <div>
            <h3>{item.name}</h3>
        </div>
    })}


    </div>
  )
}
