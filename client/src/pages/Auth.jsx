import Container from 'react-bootstrap/esm/Container'
import Form from 'react-bootstrap/esm/Form'
import Card from 'react-bootstrap/esm/Card'
import Button from 'react-bootstrap/esm/Button'
import Row from 'react-bootstrap/esm/Row'
import { NavLink, useLocation } from 'react-router-dom'
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from '../utils/consts'

export default function Auth() {
	const location = useLocation()
	const isLogin = location.pathname === LOGIN_ROUTE

	return (
		<Container
			className='d-flex justify-content-center align-center'
			style={{ height: window.innerHeight - 410 }}
		>
			<Card style={{ width: '600px' }} className='p-5'>
				<h2 className='m-auto'>{isLogin ? 'Авторизация' : 'Регистрация'}</h2>
				<Form className='f-flex flex-column'>
					<Form.Control
						className='mt-3'
						placeholder='Введите email'
					></Form.Control>
					<Form.Control
						className='mt-3'
						placeholder='Введите пароль'
					></Form.Control>
					<Row className='d-flex justify-content-between align-items-center mt-3 pl-3 pr-3'>
						{isLogin ? (
							<div>
								Нет аккаунта?{' '}
								<NavLink to={REGISTRATION_ROUTE}>Зарегистрируйтесь</NavLink>
							</div>
						) : (
							<div>
								Уже есть аккаунт? <NavLink to={LOGIN_ROUTE}>Войдите</NavLink>
							</div>
						)}
						<Button variant={'outline-success'}>
							{isLogin ? 'Войти' : 'Зарегистрироваться'}
						</Button>
					</Row>
				</Form>
			</Card>
		</Container>
	)
}
