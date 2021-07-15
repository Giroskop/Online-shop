import Container from 'react-bootstrap/esm/Container'
import Form from 'react-bootstrap/esm/Form'
import Card from 'react-bootstrap/esm/Card'
import Button from 'react-bootstrap/esm/Button'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col'
import TypeBar from '../components/TypeBar'
import BrandBar from '../components/BrandBar'
import DeviceList from '../components/DeviceList'
import { observer } from 'mobx-react-lite'
import { Context } from '..'
import { useContext, useEffect } from 'react'
import { getBrands, getDevices, getTypes } from '../http/deviceAPI'
import Pages from '../components/Pages'
export default observer(function Shop() {
	const { device } = useContext(Context)

	useEffect(() => {
		getTypes().then(data => device.setTypes(data))
		getBrands().then(data => device.setBrands(data))
		getDevices(null, null, 1, 3).then(data => {
			device.setDevices(data.devices)
			device.setTotalCount(data.count)
		})
	}, [])

	useEffect(() => {
		getDevices(device.selectedType._id, device.selectedBrand._id, device.page, 3).then(
			data => {
				device.setDevices(data.devices)
				device.setTotalCount(data.count)
			}
		)
	}, [device.selectedType, device.selectedBrand, device.page])

	return (
		<>
			<Container>
				<Row className='mt-2'>
					<Col md={3}>
						<TypeBar />
					</Col>
					<Col md={9}>
						<BrandBar />
						<DeviceList />
						<Pages />
					</Col>
				</Row>
			</Container>
		</>
	)
})
