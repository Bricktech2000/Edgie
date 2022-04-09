import React, { Component } from 'react';
import Link from './Link';

import styles from './Main.module.css';

const Links = () => {
  return (
    <main className={styles.Main}>
      <h1>Emilien Breton</h1>
      <p>Computer Science Student at the University of Ottawa</p>
      {/* .howto
        github
        README.md
        linkedin
        facebook
        instagram
        email signature: gmail, outlook
      */}
      <div className={styles.column}>
        <div className={styles.row}>
          <Link
            icon="fas fa-external-link-square-alt"
            href="https://emilien.ca/"
            color="#1720DF"
          >
            Website
          </Link>

          <Link
            icon="fab fa-linkedin"
            href="https://www.linkedin.com/in/emilien-breton/"
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
            icon="fab fa-telegram"
            href="https://t.me/emilien_breton"
            color="#0088CC"
          >
            Telegram
          </Link>
          <Link
            icon="fab fa-whatsapp"
            href="http://wasap.my/16139139909"
            color="#25D366"
            invert
          >
            Whatsapp
          </Link>
        </div>
        <div className={styles.row}>
          <Link
            icon="fab fa-github"
            href="https://github.com/Bricktech2000/"
            color="#BBBBBB"
            invert
          >
            Github
          </Link>
          <Link
            icon="fab fa-facebook-messenger"
            href="https://www.messenger.com/t/100038113148924"
            color="#0078FF"
          >
            Messenger
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
            color="#FFFC00"
            invert
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
      </div>
    </main>
  );
};

export default Links;
