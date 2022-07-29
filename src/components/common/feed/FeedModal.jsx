import React, { useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { BottomSheatBg, BottomSheatWrap } from '../modal/BottomSheat.style';
import Modal from '../modal/Modal';
import { SERVER_URL } from '../../../constants';

function FeedModal({ postId, setModalInfo, modalInfo }) {
	const { id } = useParams();
	const token = JSON.parse(localStorage.getItem('user')).token;
	const loginUser = JSON.parse(localStorage.getItem('user')).accountname;
	const navigate = useNavigate();
	const [isShow, setIsShow] = useState(true);

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
			if (result.status === 404) {
				throw navigate('/errorPage');
			}
			setModalInfo((cur) => ({ ...cur, state: false }));
			setIsShow(true);
			alert(result.message);
			if (id !== undefined) {
				navigate('/feed');
			} else {
				navigate('/myprofile');
			}
			return result;
		} catch (error) {
			console.error(error);
		}
	}

	// 삭제 modal 정보
	const deleteModal = {
		title: '게시글',
		whatDo: '삭제',
		cancel: () => {
			alert('취소 되었습니다.');
			setModalInfo((cur) => ({ ...cur, state: false }));
			setIsShow(true);
		},
		delete: () => {
			deleteFeedAPI();
		},
	};

	async function reportFeedAPI() {
		try {
			const res = await fetch(SERVER_URL + `/post/${postId}/report`, {
				method: 'POST',
				headers: {
					Authorization: `Bearer ${token}`,
					'Content-type': 'application/json',
				},
			});
			const result = await res.json();
			if (result.status === 404) {
				throw navigate('/errorPage');
			}
			setModalInfo((cur) => ({ ...cur, state: false }));
			setIsShow(true);
			alert('신고 완료되었습니다.');

			return result;
		} catch (error) {
			console.error(error);
		}
	}

	// 신고 modal 정보
	const reportModal = {
		title: '게시글',
		whatDo: '신고',
		cancel: () => {
			alert('취소 되었습니다.');
			setModalInfo((cur) => ({ ...cur, state: false }));
			setIsShow(true);
		},
		delete: () => reportFeedAPI(),
	};

	const onClickBottomSheet = (e) => {
		if (e.target.nodeName === 'BUTTON') {
			setIsShow(false);
		} else {
			setModalInfo((cur) => ({ ...cur, state: false }));
		}
	};

	return (
		<>
			{isShow ? (
				<BottomSheatBg onClick={onClickBottomSheet}>
					<BottomSheatWrap>
						{loginUser === modalInfo.postUser ? (
							<>
								<button type="button">삭제</button>
								<Link to={`/post/edit/${postId}`}>수정</Link>
							</>
						) : (
							<button type="button">신고</button>
						)}
					</BottomSheatWrap>
				</BottomSheatBg>
			) : loginUser === modalInfo.postUser ? (
				<Modal ModalInfo={deleteModal} />
			) : (
				<Modal ModalInfo={reportModal} />
			)}
		</>
	);
}

export default FeedModal;
