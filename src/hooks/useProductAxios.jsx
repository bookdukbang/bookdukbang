import { useNavigate } from 'react-router-dom';
import { deleteProductAxios, getProductAxios, putProductAxios } from '../apis/productApi';

export const useProductAxios = () => {
	const navigate = useNavigate();

	//  상품의 정보 얻기
	const getProduct = (productId) =>
		getProductAxios(productId).then((data) => {
			if (data.status === 404) {
				navigate('/error');
			} else {
				return data.product;
			}
		});

	// 상품 수정하기
	const editProduct = (productId, productInfo) =>
		putProductAxios(productId, productInfo).then((data) => {
			if (data.status === 404) {
				navigate('/error');
			} else {
				navigate(-1);
				return data.product;
			}
		});

	// 상품 삭제하기
	const deleteProduct = (productId) =>
		deleteProductAxios(productId).then((data) => {
			if (data.status === 404) {
				navigate('/error');
			} else {
				return data;
			}
		});

	return {
		getProduct,
		editProduct,
		deleteProduct,
	};
};
