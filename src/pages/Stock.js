import React from 'react'
import data from '../data'
import { Params, useParams } from 'react-router-dom'

export default function Stock() {
  const params = useParams()
  console.log(params);
  const indStock = data.find(item => item.symbol === params.symbol)
  console.log(indStock);
  return (
    <div>
    <h1>{indStock.name}({indStock.symbol})</h1>
    <h4>Last Price: {indStock.lastPrice}</h4>
    <h4>Change: {indStock.change}</h4>
    <h4>High: {indStock.high}</h4>
    <h4>Low: {indStock.low}</h4>
    <h4>Open: {indStock.open}</h4>
    </div>
  )
}
