import Container from 'react-bootstrap/esm/Container'
import Form from 'react-bootstrap/esm/Form'
import Card from 'react-bootstrap/esm/Card'
import Button from 'react-bootstrap/esm/Button'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col'
import TypeBar from '../components/TypeBar'
import BrandBar from '../components/BrandBar'
import DeviceList from '../components/DeviceList'

export default function Shop() {

  return (
    <>
    <Container>
      <Row className='mt-2'>
        <Col md={3}>
          <TypeBar/>
        </Col>
        <Col md={9}>
          <BrandBar/>
          <DeviceList/>
        </Col>
      </Row>
    </Container>
    </>
  )
}
