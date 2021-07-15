import Container from 'react-bootstrap/esm/Container'
import Form from 'react-bootstrap/esm/Form'
import Card from 'react-bootstrap/esm/Card'
import Button from 'react-bootstrap/esm/Button'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col'

import { observer } from "mobx-react-lite";
import { useContext } from 'react'
import { Context } from '..'
import DeviceItem from './DeviceItem'


export default observer(function DeviceList() {

	const { device } = useContext(Context)

  return (
    <Row className="d-flex">
      {device.devices.map(device => {
        return <DeviceItem key={device.id} id={device.id} device={device}/>
      })}
    </Row>
  )
})
