import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import Image from 'next/image'
import ftccIcon from '/public/assets/images/ftcc logo symbol blackout partial indigo.png';
import styles from './theme-custom.module.css'

const config: DocsThemeConfig = {
  useNextSeoProps() {
    return {
      titleTemplate: '%s - FTCC Official Handbook',
    }
  },
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:description" content="The official FTCC guide and resources handbook" />
      {/* HTML Meta Tags */}
      <meta name="description" content="The official FTCC guide and resources handbook" />

      {/* Facebook Meta Tags */}
      <meta property="og:url" content="https://ftcc-handbook.vercel.app" />
      <meta property="og:type" content="website" />
      <meta property="og:description" content="The official FTCC guide and resources handbook" />

      {/* Twitter Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta property="twitter:domain" content="ftcc-handbook.vercel.app" />
      <meta property="twitter:url" content="https://ftcc-handbook.vercel.app" />
      <meta name="twitter:description" content="The official FTCC guide and resources handbook" />
    </>
  ),
  banner: {
    dismissible: true,
    key: 'membership-cal-2024-may',
    text: (
      <a href="https://docs.google.com/forms/d/e/1FAIpQLScEbu9rWjeY6MOVN2twtYBfcyzMel6s6o2h-F5nh6gubFOgWA/viewform">
        🎉 Have you sent in your membership form yet? Go to form →
      </a>
    ),
  },
  logo: <div className={styles.logocontainer}>
    <Image
      src={ftccIcon}
      alt='ftcc icon'
      width={24}
      height={24}
    />  FTCC Handbook</div>,
  sidebar: {
    defaultMenuCollapseLevel: 1,
  },
  primaryHue: {
    dark: 250,
    light: 245
  },
  project: {
    link: 'https://github.com/ryanmacalandag/ftcc-handbook',
  },
  chat: {
    link: 'https://discord.com',
  },
  docsRepositoryBase: 'https://github.com/shuding/nextra-docs-template',
  footer: {
    text: <div className={styles.footer}>Filipino Tech Community Canberra</div>,
  },
}

export default config
