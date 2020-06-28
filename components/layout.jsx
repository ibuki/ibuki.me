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
