import Spinner from 'react-bootstrap/esm/Spinner'
import { observer } from 'mobx-react-lite'
import { useContext, useEffect, useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Context } from '.'
import AppRouter from './components/AppRouter'
import NavbarTop from './components/Navbar'
import { check } from './http/userAPI'
import Container from 'react-bootstrap/esm/Container'

export default observer(function App() {
	const { user } = useContext(Context)
	const [loading, setLoading] = useState(true)
 
	useEffect(() => {
		check()
			.then(data => {
				user.setUser(data)
				user.setIsAuth(true)
			})
			.finally(() => setLoading(false))
	}, [])

	if (loading) {
		return (
			<Container className='d-flex justify-content-center align-items-center pt-5'>
				<Spinner animation={'grow'} />
			</Container>
		)
	}

	return (
		<BrowserRouter>
			<NavbarTop />
			<AppRouter />
		</BrowserRouter>
	)
})
