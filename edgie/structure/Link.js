import React, { Component } from 'react';

import styles from './Link.module.css';

const Link = (props) => {
  return (
    <a
      className={styles.Link}
      href={props.href}
      target="_blank"
      rel="noreferer"
      style={{ background: props.color }}
    >
      <i className={'fa-1x ' + props.icon}></i>
      {props.children}
    </a>
  );
};

export default Link;
