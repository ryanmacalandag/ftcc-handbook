import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import Image from 'next/image'
import ftccIcon from '/public/assets/images/ftcc logo symbol blackout partial indigo.png';
import styles from './theme-custom.module.css'

const config: DocsThemeConfig = {
  logo: <div className={styles.logocontainer}>
    <Image
      src={ftccIcon}
      alt='ftcc icon'
      width={24}
      height={24}
    />  FTCC Handbook</div>,
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
