import React, { Component } from 'react';

import styles from './Link.module.css';

const Link = (props) => {
  return (
    <a className={styles.Link} href={props.href}>
      <i className={'fa-lg ' + props.icon}></i>
      {props.children}
    </a>
  );
};

export default Link;
