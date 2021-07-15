import Modal from 'react-bootstrap/esm/Modal'
import Form from 'react-bootstrap/esm/Form'
import Dropdown from 'react-bootstrap/esm/Dropdown'
import Button from 'react-bootstrap/esm/Button'

import { observer } from 'mobx-react-lite'
import { useContext, useState } from 'react'
import { Context } from '../..'
import { createBrand } from '../../http/deviceAPI'

export default observer(function CreateBrand({ show, onHide }) {
	const { device } = useContext(Context)

	const [value, setValue] = useState('')
	function addBrand() {
		createBrand({ name: value }).then(data => setValue(''))
		onHide()
	}

	return (
		<Modal show={show} onHide={onHide} size='lg' centered>
			<Modal.Header closeButton>
				<Modal.Title id='contained-modal-title-vcenter'>
					Добавить новый бренд
				</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<Form>
					<Form.Control
						placeholder={'Введите название бренда'}
						value={value}
						onChange={e => setValue(e.target.value)}
					/>
				</Form>
			</Modal.Body>
			<Modal.Footer>
				<Button variant={'outline-danger'} onClick={onHide}>
					Закрыть
				</Button>
				<Button variant={'outline-success'} onClick={addBrand}>
					Добавить
				</Button>
			</Modal.Footer>
		</Modal>
	)
})
