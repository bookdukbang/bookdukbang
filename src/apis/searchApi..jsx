import { basicInstanceAxios } from './index';

const getSearchAxios = async (keyword) => {
	try {
		const res = await basicInstanceAxios.get(`/user/searchuser/?keyword=${keyword}`);
		return res.data;
	} catch (err) {
		console.error(err);
	}
};
export { getSearchAxios };
