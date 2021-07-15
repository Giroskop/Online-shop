import ListGroup from 'react-bootstrap/esm/ListGroup'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col'
import { observer } from 'mobx-react-lite'
import { useContext } from 'react'
import { Context } from '..'
import Card from 'react-bootstrap/esm/Card'

export default observer(function BrandBar() {
	const { device } = useContext(Context)
	return (
		<>
			<Row className='d-flex'>
				{device.brands.map(brand => {
					return (
						<Card
							key={brand.id}
							id={brand.id}
							onClick={() => device.setSelectedBrand(brand)}
							border={brand.id === device.selectedBrand.id ? 'primary' : 'light'}
							className='p-3'
							style={{ cursor: 'pointer' }}
						>
							{brand.name}
						</Card>
					)
				})}
			</Row>
		</>
	)
})
