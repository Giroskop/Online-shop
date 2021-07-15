import ListGroup from 'react-bootstrap/esm/ListGroup'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col'
import { observer } from 'mobx-react-lite'
import { useContext } from 'react'
import { Context } from '..'
import Card from 'react-bootstrap/esm/Card'

export default observer(function BrandBar() {
	const { device } = useContext(Context)

	// function selectBrand(e) {
	//   if (e.target.id === brand._id) {
	//     device.setSelectedBrand({})
	//   } else {
	//     device.setSelectedBrand(brand)
	//   }
	// }

	return (
		<>
			<Row className='d-flex'>
				{device.brands.map(brand => {
					return (
						<Card
							key={brand._id}
							id={brand._id}
							onClick={() =>
								device.selectedBrand._id === brand._id
									? device.setSelectedBrand({})
									: device.setSelectedBrand(brand)
							}
							border={
								brand._id === device.selectedBrand._id ? 'primary' : 'light'
							}
							className='p-3'
							style={{ cursor: 'pointer' }}
						>
							{device.selectedBrand.id}
							{brand.name}
						</Card>
					)
				})}
			</Row>
		</>
	)
})
