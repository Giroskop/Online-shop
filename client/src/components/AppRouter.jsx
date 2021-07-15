import { useContext } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { Context } from '..'
import { authRoutes, publicRoutes } from '../routes'

export default function AppRouter() {
	
  // const {user} = useContext(Context)
  // console.log(user)

	return (
		<Switch>
			{false === true &&
				authRoutes.map(({ path, Component }) => {
					return <Route key={path} path={path} component={Component} exact />
				})}
			{publicRoutes.map(({ path, Component }) => {
					return <Route key={path} path={path} component={Component} exact />
				})}
		</Switch>
	)
}
