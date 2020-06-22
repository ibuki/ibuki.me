import Header from "./header"

function Layout({ children }) {
  return (
    <div className="wrapper">
      <Header/>
      <div className="main">{children}</div>
    </div>
  )
}

export default Layout
