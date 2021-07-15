import Container from 'react-bootstrap/esm/Container'
import Card from 'react-bootstrap/esm/Card'
import Button from 'react-bootstrap/esm/Button'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col'
import Image from 'react-bootstrap/esm/Image'
import CreateBrand from '../components/modals/CreateBrand'
import CreateType from '../components/modals/CreateType'
import CreateDevice from '../components/modals/CreateDevice'
import { useState } from 'react'

export default function Admin() {
	const [brandVisible, setBrandVisible] = useState(false)
	const [typeVisible, setTypeVisible] = useState(false)
	const [deviceVisible, setDeviceVisible] = useState(false)

	return (
		<>
			12321312
			<Container className='d-flex flex-column'>
				<Button
					variant={'outline-dark'}
					className='mt-4 p-2'
					onClick={() => setTypeVisible(true)}
				>
					Добавить тип
				</Button>
				<Button
					variant={'outline-dark'}
					className='mt-4 p-2'
					onClick={() => setBrandVisible(true)}
				>
					Добавить бренд
				</Button>
				<Button
					variant={'outline-dark'}
					className='mt-4 p-2'
					onClick={() => setDeviceVisible(true)}
				>
					Добавить устройство
				</Button>
				<CreateBrand
					show={brandVisible}
					onHide={() => setBrandVisible(false)}
				/>
				<CreateDevice show={deviceVisible} onHide={() => setDeviceVisible(false)} />
				<CreateType
					show={typeVisible}
					onHide={() => setTypeVisible(false)}
				/>
			</Container>
		</>
	)
}
