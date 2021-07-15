import { observer } from 'mobx-react-lite'
import { useContext } from 'react'
import { Context } from '..'
import Pagination from 'react-bootstrap/esm/Pagination'
import { v4 as uuid, v4 } from 'uuid'
export default observer(function Pages() {
	const { device } = useContext(Context)

	const pageCount = Math.ceil(device.totalCount / device.limit)
	const pages = []

	for (let i = 0; i < pageCount; i++) {
		pages.push(i + 1)
	}

	return (
		<>
			<Pagination className='mt-5'>
				{pages.map(page => {
					return (
						<Pagination.Item
							key={uuid()}
							active={device.page === page}
							onClick={() => device.setPage(page)}
						>
							{page}
						</Pagination.Item>
					)
				})}
			</Pagination>
		</>
	)
})
