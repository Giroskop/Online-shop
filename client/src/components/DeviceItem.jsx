import Card from 'react-bootstrap/esm/Card'
import Col from 'react-bootstrap/esm/Col'
import Image from 'react-bootstrap/esm/Image'

import { observer } from 'mobx-react-lite'
import { useHistory } from 'react-router-dom'
import star from '../assets/img/rating.svg'
import { DEVICE_ROUTE } from '../utils/consts'

export default observer(function DeviceItem({ device }) {

  const history = useHistory()

	return (
		<Col md={3} className='mt-3'>
			<Card border={'light'} style={{ width: '150px', cursor: 'pointer' }} onClick={() => history.push(`${DEVICE_ROUTE}/${device._id}`)}>
				<Image width='150px' height='150px' src={process.env.REACT_APP_BASE_URL + device.img} />
				<div className='d-flex justify-content-between text-black-50 mt-1'>
					<div>{device.name}</div>
					<div className='d-flex align-items-center'>
						<div>{device.rating}</div>
						<Image src={star} width='10px' height='10px' />
					</div>
				</div>
				<div>{device.name}</div>
			</Card>
		</Col>
	)
})
