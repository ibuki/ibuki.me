import { Button, Nav, Navbar } from "react-bootstrap";
import styles from './header.module.css';

function Header() {
  return (
    <Navbar bg="white" expand="md" sticky="top" className={styles.navbar}>
      <a className='navbar-brand' href='/'>合同会社イブキ</a>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className='ml-auto'>
          <Nav.Link href="#service">サービス</Nav.Link>
          <Nav.Link href="#member">メンバー</Nav.Link>
          <Nav.Link href="#practice">プラクティス</Nav.Link>
          <Nav.Link href="#company">会社情報</Nav.Link>
          <Nav.Link href="#company">お問い合わせ</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Header
