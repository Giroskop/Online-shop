import Container from 'react-bootstrap/esm/Container'
import Form from 'react-bootstrap/esm/Form'
import Card from 'react-bootstrap/esm/Card'
import Button from 'react-bootstrap/esm/Button'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col'
import Image from 'react-bootstrap/esm/Image'

import star from '../assets/img/rating.svg'

export default function DevicePage() {
	const device = {
		id: 8,
		name: 'agsadgag',
		price: 1510,
		rating: 2,
		img: 'http://localhost:5000/9b8bae7e-60b2-42e0-8062-c086f19ac7e9.jpg',
	}

	const description = [
		{ id: 1, title: 'Память', description: 'Много' },
		{ id: 1, title: 'Материал', description: 'Железо' },
		{ id: 1, title: 'Срок годности', description: '24мес.' },
	]

	return (
		<>
			<Container className=''>
				<Row>
					<Col md={4}>
						<Image width='300px' height='300px' src={device.img} />
					</Col>
					<Col md={4}>
						<Row className='d-flex flex-column align-items-center'>
							<h2>{device.name}</h2>
							<div
								className='d-flex justify-content-center align-items-center'
								style={{
									width: '100px',
									height: '100px',
									borderRadius: '50%',
									backgroundColor: 'grey',
									color: 'white',
									fontSize: '26px',
									fontWeight: 'bold',
									position: 'relative',
								}}
							>
								<Image width='80px' height='80px' src={star} />
								<span
									style={{
										position: 'absolute',
										top: '50%',
										left: '50%',
										transform: 'translate(-50%,-50%)',
									}}
								>
									{device.rating}
								</span>
							</div>
						</Row>
					</Col>
					<Col md={4} className='d-flex justify-content-end'>
						<Card
							className='d-flex flex-column justify-content-around align-items-center'
							style={{
								width: '300px',
								height: '300px',
								fontSize: '32px',
								border: '5px solid lightgray',
                margin: '0px',
							}}
						>
							<h3>{device.price} руб.</h3>
							<Button variant={'outline-dark'}>Добавить в корзину</Button>
						</Card>
					</Col>
				</Row>
				<Row className='d-flex flex-column m-3'>
          <h1>Характеристики</h1>
					{description.map(info => {
						return (
							<Row
								key={info.id}
								id={info.id}
								className='p-2 my-1'
                style={{backgroundColor: 'lightgray', borderRadius: '4px'}}
							>
                {info.title}: {info.description}
              </Row>
						)
					})}
				</Row>
			</Container>
		</>
	)
}
