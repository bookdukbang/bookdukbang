import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useCommentAxios } from '../../../hooks/useCommentAxios';
import { BottomSheatBg, BottomSheatWrap } from '../../common/modal/BottomSheat.style';
import Modal from '../../common/modal/Modal';

function CommetModal({ modalInfo, setModalInfo, setIsCommentUpload }) {
	const userAccountname = JSON.parse(sessionStorage.getItem('user')).accountname;
	const [isShow, setIsShow] = useState(true);
	const { id } = useParams();
	const { deleteComment, reportComment } = useCommentAxios();

	const deleteModal = {
		title: '댓글',
		whatDo: '삭제',
		cancel: () => {
			setModalInfo((cur) => ({ ...cur, state: false }));
			setIsShow(true);
		},
		delete: () => {
			deleteComment(id, modalInfo.commentId)
				.then((d) => alert(d.message))
				.then(() => {
					setModalInfo((cur) => ({ ...cur, state: false }));
					setIsShow(true);
					setIsCommentUpload(true);
				})
				.catch((err) => console.error(err.message));
		},
	};

	const reportModal = {
		title: '댓글',
		whatDo: '신고',
		cancel: () => {
			setModalInfo((cur) => ({ ...cur, state: false }));
			setIsShow(true);
		},
		delete: () => {
			reportComment(id, modalInfo.commentId)
				.then(() => alert('신고 완료되었습니다.'))
				.then(() => {
					setModalInfo((cur) => ({ ...cur, state: false }));
					setIsShow(true);
					setIsCommentUpload(true);
				})
				.catch((err) => console.error(err));
		},
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
						{userAccountname === modalInfo.commentUser ? (
							<button type="button">삭제</button>
						) : (
							<button type="button">신고</button>
						)}
					</BottomSheatWrap>
				</BottomSheatBg>
			) : userAccountname === modalInfo.commentUser ? (
				<Modal ModalInfo={deleteModal} />
			) : (
				<Modal ModalInfo={reportModal} />
			)}
		</>
	);
}
export default CommetModal;
