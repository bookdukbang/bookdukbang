import { basicInstanceAxios } from './index';

const getProductAxios = async (productId) => {
	try {
		const res = await basicInstanceAxios.get(`/product/detail/${productId}`);
		return res.data;
	} catch (err) {
		console.error(err);
	}
};

const putProductAxios = async (productId, productInfo) => {
	try {
		const res = await basicInstanceAxios.put(`/product/${productId}`, {
			product: { ...productInfo },
		});
		return res.data;
	} catch (err) {
		console.error(err);
	}
};

const deleteProductAxios = async (productId) => {
	try {
		const res = await basicInstanceAxios.delete(`/product/${productId}`);
		return res.data;
	} catch (err) {
		console.error(err);
	}
};

export { getProductAxios, putProductAxios, deleteProductAxios };
