import React from 'react'
import { useContext } from 'react'
import { Context } from '..'
import { observer } from 'mobx-react-lite'
import Navbar from 'react-bootstrap/esm/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import { NavLink } from 'react-router-dom'
import { ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from '../utils/consts'
import { useHistory } from 'react-router'

export default observer(function NavbarTop() {
	const { user } = useContext(Context)
	const history = useHistory()

  function logout() {
    user.setUser({})
    user.setIsAuth(false)
    localStorage.removeItem('token')
  }

	return (
		<>
			<Navbar bg='dark' variant='dark'>
				<Container>
					<NavLink to={SHOP_ROUTE}>Online-shop</NavLink>
					{user.isAuth ? (
						<Nav className='ml-auto'>
							<Button variant={'outline-light'} onClick={() => history.push(ADMIN_ROUTE)}>
								Админ панель
							</Button>
							<Button
								variant={'outline-light'}
								className='ml-2'
								onClick={logout}
							>
								Выйти
							</Button>
						</Nav>
					) : (
						<Nav className='ml-auto'>
							<Button
								variant={'outline-light'}
								onClick={() => history.push(LOGIN_ROUTE)}
							>
								Авторизация
							</Button>
						</Nav>
					)}
				</Container>
			</Navbar>
		</>
	)
})
