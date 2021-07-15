import { BrowserRouter } from 'react-router-dom'
import AppRouter from './components/AppRouter'
import NavbarTop from './components/Navbar'
function App() {
	return (
		<BrowserRouter>
			<NavbarTop />
			<AppRouter />
		</BrowserRouter>
	)
}

export default App
