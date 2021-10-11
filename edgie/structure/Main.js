import React, { Component } from 'react';
import Link from './Link';

import styles from './Main.module.css';

const Links = () => {
  return (
    <main className={styles.Links}>
      <div className={styles.container}>
        <h1>Emilien Breton</h1>
        <Link
          icon="fas fa-external-link-square-alt"
          href="https://emilien.ca/"
          color="#1720DF"
        >
          Website
        </Link>
        <Link
          icon="fab fa-github"
          href="https://github.com/Bricktech2000/"
          color="#BBBBBB"
        >
          Github
        </Link>
        <Link
          icon="fab fa-linkedin"
          href="https://www.instagram.com/emilien.breton.71/"
          color="#0077C2"
        >
          LinkedIn
        </Link>
        <Link
          icon="fas fa-envelope"
          href="mailto:bricktech2000@gmail.com"
          color="linear-gradient(45deg, #BB001B, #EA4335)"
        >
          Mail
        </Link>
        <Link
          icon="fab fa-facebook-f"
          href="https://www.facebook.com/emilien.breton.71"
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
          color="#CCC900"
        >
          Snapchat
        </Link>
        <Link
          icon="fab fa-instagram"
          href="https://www.instagram.com/emilien.breton.71/"
          color="linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%)"
        >
          Instagram
        </Link>
      </div>
    </main>
  );
};

export default Links;
