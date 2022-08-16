import React, { useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { BottomSheatBg, BottomSheatWrap } from '../modal/BottomSheat.style';
import Modal from '../modal/Modal';
import { usePostAxios } from '../../../hooks/usePostAxios';

function FeedModal({ postId, setModalInfo, modalInfo }) {
	const { id } = useParams();
	const loginUser = JSON.parse(sessionStorage.getItem('user')).accountname;
	const navigate = useNavigate();
	const [isShow, setIsShow] = useState(true);
	const { deletePost, reportPost } = usePostAxios();

	// 삭제 modal 정보
	const deleteModal = {
		title: '게시글',
		whatDo: '삭제',
		cancel: () => {
			setModalInfo((cur) => ({ ...cur, state: false }));
			setIsShow(true);
		},
		delete: () => {
			deletePost(postId)
				.then((deleteResult) => {
					setModalInfo((cur) => ({ ...cur, state: false }));
					setIsShow(true);
					alert(deleteResult.message);
				})
				.then(() => {
					id !== undefined && id !== loginUser ? navigate(-1) : window.location.reload();
				});
		},
	};

	// 신고 modal 정보
	const reportModal = {
		title: '게시글',
		whatDo: '신고',
		cancel: () => {
			setModalInfo((cur) => ({ ...cur, state: false }));
			setIsShow(true);
		},
		delete: () =>
			reportPost(postId).then(() => {
				setModalInfo((cur) => ({ ...cur, state: false }));
				setIsShow(true);
				alert('신고 완료되었습니다.');
			}),
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
