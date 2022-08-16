import { authInstanceAxios } from '../apis';

export const useCheckToken = async () => {
	const token = JSON.parse(sessionStorage.getItem('user')).token;

	try {
		const { data } = await authInstanceAxios.get('user/checktoken', {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		});

		return data;
	} catch (err) {
		console.error(err);
	}
};
