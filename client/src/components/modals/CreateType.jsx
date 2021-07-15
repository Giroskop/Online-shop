import Modal from 'react-bootstrap/esm/Modal'
import Form from 'react-bootstrap/esm/Form'

import { observer } from 'mobx-react-lite'
import Button from 'react-bootstrap/esm/Button'
import { useState } from 'react'
import { createType } from '../../http/deviceAPI'

export default observer(function CreateType({ show, onHide }) {
	const [value, setValue] = useState('')
	function addType() {
		createType({ name: value }).then(data => setValue(''))
		onHide()
	}

	return (
		<Modal show={show} onHide={onHide} size='lg' centered>
			<Modal.Header closeButton>
				<Modal.Title id='contained-modal-title-vcenter'>
					Добавить новый тип
				</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<Form>
					<Form.Control
						placeholder={'Введите название типа'}
						value={value}
						onChange={e => setValue(e.target.value)}
					/>
				</Form>
			</Modal.Body>
			<Modal.Footer>
				<Button variant={'outline-danger'} onClick={onHide}>
					Закрыть
				</Button>
				<Button variant={'outline-success'} onClick={addType}>
					Добавить
				</Button>
			</Modal.Footer>
		</Modal>
	)
})
