import axios from 'axios';
import { SERVER_URL } from '../constants';
import { useCheckToken } from '../hooks/useCheckToken';

const basicInstanceAxios = axios.create({
	baseURL: SERVER_URL,
	headers: {
		'Content-type': 'application/json',
	},
});

const authInstanceAxios = axios.create({
	baseURL: SERVER_URL,
	headers: {
		'Content-type': 'application/json',
	},
});

basicInstanceAxios.interceptors.request.use((request) => {
	useCheckToken().then(({ isValid }) => {
		if (!isValid) {
			throw new Error('유효하지 않은 토큰입니다. 다시 로그인해주세요.');
		}
	});

	const token = JSON.parse(sessionStorage.getItem('user')).token;
	request.headers.Authorization = `Bearer ${token}`;
	return request;
});

export { basicInstanceAxios, authInstanceAxios };
