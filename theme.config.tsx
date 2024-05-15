import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import Image from 'next/image'
import ftccIcon from '/public/assets/images/ftcc logo symbol blackout partial indigo.png';
import styles from './theme-custom.module.css'

const config: DocsThemeConfig = {
  useNextSeoProps() {
    return {
      titleTemplate: '%s – FTCC Handbook'
    }
  },
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
