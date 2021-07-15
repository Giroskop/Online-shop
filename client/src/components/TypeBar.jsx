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
							key={type.id}
							id={type.id}
              active={type.id === device.selectedType.id}
							onClick={() => device.setSelectedType(type)}
              style={{cursor: 'pointer'}}
						>
							{type.name}
						</ListGroup.Item>
					)
				})}
			</ListGroup>
		</>
	)
})
