import React from 'react';
import styles from './home.module.css';
import { Link } from '../../ui/base/link/link';
import { BaseRoute } from '../../ui/routes/paths';
import { Button } from '@material-ui/core'

export const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>Pizza Application</h1>
        <div>
          <Link path={{ route: BaseRoute.SIZE }}>
            <Button
              color={'primary'}
              variant='contained'
              fullWidth
            >Place an order</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};
