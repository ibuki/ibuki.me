const { Container } = require("react-bootstrap");

function Footer() {
  return (
    <Container fluid='true' as="footer" className="text-center bg-white py-3">
      <hr />
      <p className='my-3'>&copy; 合同会社イブキ 2020</p>
    </Container>
  )
}

export default Footer
