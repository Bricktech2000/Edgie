import React, { Component } from 'react';
import Link from '../structure/Link';

import styles from './Link.module.css';

const Links = () => {
  return (
    <main className={styles.Links}>
      <Link icon="fas fa-envelope" href="mailto:bricktech2000@gmail.com">
        Mail
      </Link>
    </main>
  );
};

export default Links;
