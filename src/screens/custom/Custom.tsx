import React from 'react';
import styles from './custom.module.css';

export const Custom = () => {
  const toppingsArr = sessionStorage.getItem('toppings')?.split(', ');
  let size, toppings = 0;
  if (toppingsArr && toppingsArr.length > 3) {
    toppings = (toppingsArr.length - 3) * 0.5;
  }
  if (sessionStorage.getItem('size') === 'Small') {
    size = 8;

  } else if (sessionStorage.getItem('size') === 'Medium') {
    size = 10;
  } else {
    size = 12;
  }
  const crust = sessionStorage.getItem('crust') === 'Thin' ? 2 : 4;
  const total = size + crust + toppings;

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>Your pizza details</h1>
        <div>
          <p>Size: {sessionStorage.getItem('size')}</p>
          <p>Crust: {sessionStorage.getItem('crust')}</p>
          <p>Toppings: {sessionStorage.getItem('toppings')?.replace(/_/g, ' ')}</p>
          <h3>Total: ${total}</h3>
        </div>
      </div>
    </div>
  );
};
