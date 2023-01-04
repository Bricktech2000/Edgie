import React, { Component } from 'react';

import styles from './Link.module.css';

const Link = (props) => {
  return (
    <a
      style={{ backgroundColor: props.color, backgroundImage: props.color }}
      className={`${styles.Link} ${props.invert ? styles.invert : ''}`}
      href={props.href}
      target="_blank"
      rel="noreferrer"
    >
      <i className={'fa-1x ' + props.icon}></i>
      {props.children}
    </a>
  );
};

export default Link;
