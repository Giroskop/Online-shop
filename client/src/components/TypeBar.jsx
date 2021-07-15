import ListGroup from 'react-bootstrap/esm/ListGroup'
import { observer } from 'mobx-react-lite'
import { useContext } from 'react'
import { Context } from '..'

export default observer(function TypeBar() {
	const { device } = useContext(Context)

	return (
		<>
			<ListGroup>
				{device.types.map(type => {
					return (
						<ListGroup.Item
							key={type._id}
							id={type._id}
							active={type._id === device.selectedType._id}
							onClick={() =>
								device.selectedType._id === type._id
									? device.setSelectedType({ type })
									: device.setSelectedType(type)
							}
							style={{ cursor: 'pointer' }}
						>
							{type.name}66
						</ListGroup.Item>
					)
				})}
			</ListGroup>
		</>
	)
})
