import React, { Component } from 'react';
import Link from '../structure/Link';

import styles from './Links.module.css';

const Links = () => {
  return (
    <main className={styles.Links}>
      <Link icon="fas fa-envelope" href="mailto:bricktech2000@gmail.com">
        Mail
      </Link>
      <Link icon="fab fa-github" href="https://github.com/Bricktech2000/">
        Github
      </Link>
      <Link icon="fab fa-facebook-f" href="https://github.com/Bricktech2000/">
        Facebook
      </Link>
      <Link icon="fab fa-discord" href="https://discord.gg/vU9DA6jUz8">
        Discord
      </Link>
      <Link
        icon="fab fa-snapchat-ghost"
        href="https://www.snapchat.com/add/emilien_breton?share_id=09KhRyzndOk"
      >
        Snapchat
      </Link>
    </main>
  );
};

export default Links;
