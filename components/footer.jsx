const { Container } = require("react-bootstrap");

function Footer() {
  return (
    <Container as="footer" className="text-center">
      <hr />
      <p className='my-5'>&copy; 合同会社イブキ 2020</p>
    </Container>
  )
}

export default Footer
