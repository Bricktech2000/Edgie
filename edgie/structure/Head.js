import React, { Component } from 'react';
import NextHead from 'next/head';

const Head = () => {
  const title = 'Emilien Breton - Edgie Links';
  const desc = 'Click here to view my socials and to contact me.';
  const icon = 'icon.png';

  return (
    <NextHead>
      <meta charSet="UTF-8" />
      <meta
        name="viewport"
        content="width=device-width, height=device-height, initial-scale=1.0"
      />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={desc} />
      <meta property="og:image" content={icon} />
      <title>{title}</title>
      <meta name="description" content={desc} />
      <link rel="shortcut icon" href={`https://edgie.emilien.ca/${icon}`} />
      {/* https://fonts.google.com/specimen/Roboto?category=Sans+Serif */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
        rel="stylesheet"
      />
      {/* https://fonts.google.com/specimen/Inconsolata?category=Monospace */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Inconsolata:wght@200;300;400;500;600;700;800;900&display=swap"
        rel="stylesheet"
      />
    </NextHead>
  );
};

export default Head;
