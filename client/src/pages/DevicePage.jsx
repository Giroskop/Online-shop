import Container from 'react-bootstrap/esm/Container'
import Card from 'react-bootstrap/esm/Card'
import Button from 'react-bootstrap/esm/Button'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col'
import Image from 'react-bootstrap/esm/Image'

import star from '../assets/img/rating.svg'
import { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import { getOneDevice } from '../http/deviceAPI'

export default function DevicePage() {

  const [device, setDevice] = useState({info: []})
  const {id} = useParams()

  useEffect( () => {
    getOneDevice(id).then(data => setDevice(data))
  }, [])

	return (
		<>
			<Container className='mt-3'>
				<Row>
					<Col md={4}>
						<Image width='300px' height='300px' src={process.env.REACT_APP_BASE_URL + device.img} alt='фото продукта'/>
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
					{device?.info?.map(info => {
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
