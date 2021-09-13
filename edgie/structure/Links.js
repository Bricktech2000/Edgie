import React, { Component } from 'react';
import Link from '../structure/Link';

import styles from './Links.module.css';

const Links = () => {
  return (
    <main className={styles.Links}>
      <div className={styles.container}>
        <Link
          icon="fas fa-envelope"
          href="mailto:bricktech2000@gmail.com"
          color="#bb001b"
        >
          Mail
        </Link>
        <Link
          icon="fab fa-github"
          href="https://github.com/Bricktech2000/"
          color="#222"
        >
          Github
        </Link>
        <Link
          icon="fab fa-facebook-f"
          href="https://github.com/Bricktech2000/"
          color="#4267B2"
        >
          Facebook
        </Link>
        <Link
          icon="fab fa-discord"
          href="https://discord.gg/vU9DA6jUz8"
          color="#7289da"
        >
          Discord
        </Link>
        <Link
          icon="fab fa-snapchat-ghost"
          href="https://www.snapchat.com/add/emilien_breton?share_id=09KhRyzndOk"
          color="#DDDA00"
        >
          Snapchat
        </Link>
      </div>
    </main>
  );
};

export default Links;
