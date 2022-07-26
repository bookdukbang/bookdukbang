import React, { useState } from 'react';
import {
	BottomSheatBg,
	BottomSheatWrap,
} from '../common/modal/BottomSheat.style';
import Modal from '../common/modal/Modal';
import { SERVER_URL } from '../../constants';

function MyModal({ postId, setModalInfo }) {
	const token = JSON.parse(localStorage.getItem('user')).token;
	const [isShow, setIsShow] = useState(true);
	console.log(postId);
	async function deleteFeedAPI() {
		try {
			const res = await fetch(SERVER_URL + `/post/${postId}`, {
				method: 'DELETE',
				headers: {
					Authorization: `Bearer ${token}`,
					'Content-type': 'application/json',
				},
			});
			const result = await res.json();
			console.log(result);
			return result;
		} catch (error) {
			console.error(error);
		}
	}

	const modal = {
		title: '게시글',
		whatDo: '삭제',
		cancel: () => {
			alert('취소 되었습니다.');
			setModalInfo((cur) => ({ ...cur, state: false }));
		},
		delete: () => {
			deleteFeedAPI()
				.then((d) => alert(d.message))
				.then(() => {
					setModalInfo((cur) => ({ ...cur, state: false }));
				})
				.catch((error) => console.error(error.message));
		},
	};

	const onClickDeleteBtn = (e) => {
		if (e.target.nodeName === 'BUTTON') {
			setIsShow(false);
		} else {
			setModalInfo((cur) => ({ ...cur, state: false }));
		}
	};

	return (
		<>
			{isShow ? (
				<BottomSheatBg>
					<BottomSheatWrap>
						<button type="button" onClick={onClickDeleteBtn}>
							삭제
						</button>
						<button type="button">수정</button>
					</BottomSheatWrap>
				</BottomSheatBg>
			) : (
				<Modal ModalInfo={modal} />
			)}
		</>
	);
}

export default MyModal;
