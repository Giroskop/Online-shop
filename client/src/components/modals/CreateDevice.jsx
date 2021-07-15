import Modal from 'react-bootstrap/esm/Modal'
import Form from 'react-bootstrap/esm/Form'
import Dropdown from 'react-bootstrap/esm/Dropdown'
import Button from 'react-bootstrap/esm/Button'
import { v4 as uuid } from 'uuid'

import { observer } from 'mobx-react-lite'
import { useContext, useEffect, useState } from 'react'
import { Context } from '../..'
import Col from 'react-bootstrap/esm/Col'
import Row from 'react-bootstrap/esm/Row'
import useForm from '../../hooks/useForm'
import { createDevice, getBrands, getDevices, getTypes } from '../../http/deviceAPI'

export default observer(function CreateDevice({ show, onHide }) {
	const { device } = useContext(Context)
	const [info, setInfo] = useState([])
	const [values, setValues, changeHandler] = useForm()

	useEffect(() => {
		getTypes().then(data => device.setTypes(data))
		getBrands().then(data => device.setBrands(data))
	}, [])

  function selectFile(e) {
    setValues(prev => ({ ...prev, img: e.target.files[0] }))
  }
	function addInfo() {
		setInfo(prev => [...prev, { title: '', description: '', number: uuid() }])
	}
	function removeInfo(number) {
		setInfo(info.filter(item => item.number !== number))
	}
	function changeInfo(key, value, number) {
		setInfo(
			info.map(item => (item.number === number ? { ...item, [key]: value } : item))
		)
	}
	function addDevice() {
    const fd = new FormData()
    fd.append('name', values.name)
    fd.append('price', `${values.price}`)
    fd.append('img', values.img)
    fd.append('brandId', device.selectedBrand._id)
    fd.append('typeId', device.selectedType._id)
    fd.append('info', JSON.stringify(info))
    createDevice(fd).then(data => onHide())
	}

	return (
		<Modal show={show} onHide={onHide} size='lg' centered>
			<Modal.Header closeButton>
				<Modal.Title id='contained-modal-title-vcenter'>
					Добавить новое устройство
				</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<Form>
					<Dropdown className='mt-2 mb-2'>
						<Dropdown.Toggle>
							{device.selectedType.name || 'Выберите тип'}
						</Dropdown.Toggle>
						<Dropdown.Menu>
							{device.types.map(type => {
								return (
									<Dropdown.Item
										key={type._id}
										id={type._id}
										onClick={() => device.setSelectedType(type)}
									>
										{type.name}
									</Dropdown.Item>
								)
							})}
						</Dropdown.Menu>
					</Dropdown>
					<Dropdown className='mt-2 mb-2'>
						<Dropdown.Toggle>
							{device.selectedBrand.name || 'Выберите бренд'}
						</Dropdown.Toggle>
						<Dropdown.Menu>
							{device.brands.map(brand => {
								return (
									<Dropdown.Item
										key={brand._id}
										id={brand._id}
										onClick={() => device.setSelectedBrand(brand)}
									>
										{brand.name}
									</Dropdown.Item>
								)
							})}
						</Dropdown.Menu>
					</Dropdown>
					<Form.Control
						placeholder='Введите название устройства'
						className='mt-3'
						name='name'
						value={values.name || ''}
						onChange={changeHandler}
					/>
					<Form.Control
						placeholder='Введите стоимость устройства'
						className='mt-3'
						type='number'
						name='price'
						value={values.price || ''}
						onChange={changeHandler}
					/>
					<Form.Control
						className='mt-3'
						type='file'
						name='img'
						onChange={selectFile}
					/>
					<hr />
					<Button variant={'outline-dark'} onClick={addInfo}>
						Добавить новое свойство
					</Button>
					{info.map(item => {
						return (
							<Row key={item.number} className='mt-4 d-flex align-items-center'>
								<Col md={4}>
									<Form.Control
										placeholder='Введите название свойства'
										value={item.title}
										onChange={e =>
											changeInfo('title', e.target.value, item.number)
										}
									/>
								</Col>
								<Col md={4}>
									<Form.Control
										placeholder='Введите описание свойства'
										value={item.description}
										onChange={e =>
											changeInfo('description', e.target.value, item.number)
										}
									/>
								</Col>
								<Col md={4}>
									<Button
										variant={'outline-danger'}
										className='p-1'
										onClick={() => removeInfo(item.number)}
									>
										Удалить
									</Button>
								</Col>
							</Row>
						)
					})}
				</Form>
			</Modal.Body>
			<Modal.Footer>
				<Button variant={'outline-danger'} onClick={onHide}>
					Закрыть
				</Button>
				<Button variant={'outline-success'} onClick={addDevice}>
					Добавить
				</Button>
			</Modal.Footer>
		</Modal>
	)
})
