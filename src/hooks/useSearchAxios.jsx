import { useNavigate } from 'react-router-dom';
import { getSearchAxios } from '../apis/searchApi.';
export const useSearchAxios = () => {
	const navigate = useNavigate();

	//  유저 검색하기
	const searchUser = (keyword) =>
		getSearchAxios(keyword).then((data) => {
			if (data.status === 404) {
				navigate('/error');
			} else {
				return data;
			}
		});

	return {
		searchUser,
	};
};
