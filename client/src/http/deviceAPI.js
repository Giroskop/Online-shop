import { $host, $authHost } from './index'

export const createType = async type => {
	const { data } = await $authHost.post('type', type)
	return data
}
export const getTypes = async () => {
	const { data } = await $host.get('type')
	return data
}
export const createBrand = async brand => {
	const { data } = await $authHost.post('brand', brand)
	return data
}
export const getBrands = async () => {
	const { data } = await $host.get('brand')
	return data
}
export const createDevice = async device => {
	const { data } = await $authHost.post('device', device)
	return data
}
export const getDevices = async (typeId, brandId, page, limit = 5) => {
	const { data } = await $host.get('device', {
		params: {
			typeId,
			brandId,
			page,
			limit,
		},
	})
	return data
}
export const getOneDevice = async id => {
	const { data } = await $host.get(`device/${id}`)
	return data
}
