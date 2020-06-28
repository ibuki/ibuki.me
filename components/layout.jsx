import Head from "next/head"
import Header from "./header"
import Footer from "./footer"

function Layout({ children }) {
  return (
    <>
      <Head>
        <title>ReactJS with react-bootstrap</title>
        <link rel="icon" href="/favicon-32x32.png" />
      </Head>
      <div>
        <Header/>
        <div>{children}</div>
        <Footer/>
      </div>
    </>
  )
}

export default Layout
