import Container from 'react-bootstrap/esm/Container'
import Form from 'react-bootstrap/esm/Form'
import Card from 'react-bootstrap/esm/Card'
import Button from 'react-bootstrap/esm/Button'
import Row from 'react-bootstrap/esm/Row'
import { NavLink, useHistory, useLocation } from 'react-router-dom'
import { LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE } from '../utils/consts'
import { login, registration } from '../http/userAPI'
import { useContext, useState } from 'react'
import { observer } from 'mobx-react-lite'
import { Context } from '..'

export default observer(function Auth() {
	const location = useLocation()
	const history = useHistory()
	const isLogin = location.pathname === LOGIN_ROUTE
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	const { user } = useContext(Context)

	async function auth() {
		try {
			let data
			if (isLogin) {
        data = await login(email, password)
			} else {
				data = await registration(email, password)
			}
			user.setUser(data)
			user.setIsAuth(true)
			history.push(SHOP_ROUTE)
		} catch (e) {
			alert(e.message)
		}
	}

	return (
		<Container
			className='d-flex justify-content-center align-center'
			style={{ height: window.innerHeight - 410 }}
		>
			<Card style={{ width: '600px', border:'none' }} className='p-5'>
				<h2 className='m-auto'>{isLogin ? 'Авторизация' : 'Регистрация'}</h2>
				<Form className='f-flex flex-column'>
					<Form.Control
						className='mt-3'
						placeholder='Введите email'
						value={email}
						onChange={e => setEmail(e.target.value)}
					></Form.Control>
					<Form.Control
						className='mt-3'
						placeholder='Введите пароль'
						type='password'
						value={password}
						onChange={e => setPassword(e.target.value)}
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
						<Button variant={'outline-success'} onClick={auth}>
							{isLogin ? 'Войти' : 'Зарегистрироваться'}
						</Button>
					</Row>
				</Form>
			</Card>
		</Container>
	)
})
