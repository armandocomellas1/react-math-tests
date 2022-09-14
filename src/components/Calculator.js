import React, { useState } from 'react';
import calculate from '../logic/calculate';

let nextNumber = 0;
const numberWithCommas = (x) => {
  const parts = x.toString().split('.');
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  return parts.join('.');
};

const CalculatorDom = () => {
  const [number, numUpdate] = useState({
    total: 0,
    next: 0,
    operation: '',
  });

  const handleClick = (e) => {
    const getName = e.target.name;
    const setObject = number;
    const getObj = calculate(setObject, getName);
    let totalNull = getObj.total;
    let nextNull = getObj.next;
    let operaNull = getObj.operation;

    if (totalNull === null) {
      totalNull = 0;
    } else if (nextNull === null) {
      nextNull = 0;
    } else if (operaNull === null) {
      operaNull = '';
    } else {
      totalNull = getObj.total;
      nextNull = getObj.next;
      operaNull = getObj.operation;
    }
    if (totalNull === 0) {
      totalNull = getObj.next;
    }

    if (totalNull === null && nextNull === null && operaNull === null) {
      totalNull = 0;
      nextNull = 0;
      operaNull = '';
    }

    if (getObj.total === null && getObj.next === null && getObj.operation === null) {
      numUpdate({
        totalNull: 0,
        nextNull: 0,
        operaNull: '',
      });
    }

    numUpdate({
      total: totalNull,
      next: nextNull,
      operation: operaNull,
    });

    if (getObj.next !== null) {
      nextNumber = nextNull;
    } else if (getObj.total !== null) {
      nextNumber = totalNull;
    } else if (getObj.next !== null && getObj.total !== null && getObj.operation !== '') {
      nextNumber = operaNull;
    } else {
      nextNumber = 0;
    }
  };

  const handleChange = (e) => {
    e.preventDefault(number);
  };

  return (
    <div className="App">
      <section className="operation">
        <input className="Enter" type="text" name="enter" value={numberWithCommas(nextNumber)} onChange={handleChange} />
      </section>
      <section className="maths">
        <input className="ac" type="button" name="AC" value="AC" onClick={handleClick} />
        <input className="plusminus" type="button" name="+/-" value="+/-" onClick={handleClick} />
        <input className="percentage" type="button" name="%" value="%" onClick={handleClick} />
        <input className="divide" type="button" name="÷" value="÷" onClick={handleClick} />
        <input className="seven" type="button" name="7" value="7" onClick={handleClick} />
        <input className="eight" type="button" name="8" value="8" onClick={handleClick} />
        <input className="nine" type="button" name="9" value="9" onClick={handleClick} />
        <input className="times" type="button" name="x" value="x" onClick={handleClick} />
        <input className="four" type="button" name="4" value="4" onClick={handleClick} />
        <input className="five" type="button" name="5" value="5" onClick={handleClick} />
        <input className="six" type="button" name="6" value="6" onClick={handleClick} />
        <input className="minus" type="button" name="-" value="-" onClick={handleClick} />
        <input className="one" type="button" name="1" value="1" onClick={handleClick} />
        <input className="two" type="button" name="2" value="2" onClick={handleClick} />
        <input className="three" type="button" name="3" value="3" onClick={handleClick} />
        <input className="plus" type="button" name="+" value="+" onClick={handleClick} />
        <input className="cero" type="button" name="0" value="0" onClick={handleClick} />
        <input className="dot" type="button" name="." value="." onClick={handleClick} />
        <input className="equals" type="button" name="=" value="=" onClick={handleClick} />
      </section>
    </div>
  );
};

export default CalculatorDom;
