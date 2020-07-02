import Head from "next/head"
import Header from "./header"
import Footer from "./footer"
import styles from "./layout.module.css"

function Layout({ children }) {
  return (
    <>
      <Head>
        <title>合同会社イブキ</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="合同会社イブキのWebサイト。コーディング支援やWebサイト開発を行います。" />
        <meta property="og:image" content="https://ibuki.me/og.png" />
      </Head>
      <div className={styles.wrapper}>
        <Header/>
        <div>{children}</div>
        <Footer/>
      </div>
    </>
  )
}

export default Layout
