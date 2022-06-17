import React, { Component } from 'react';

import styles from './Link.module.css';

const Link = (props) => {
  return (
    <a
      className={`${styles.Link} ${props.invert ? styles.invert : ''}`}
      href={props.href}
      target="_blank"
      rel="noreferrer"
      style={{ borderColor: props.color, borderImage: props.color }}
    >
      <div
        className={styles.LinkBefore}
        style={{ backgroundColor: props.color, backgroundImage: props.color }}
      ></div>
      <i className={'fa-1x ' + props.icon}></i>
      {props.children}
    </a>
  );
};

export default Link;
