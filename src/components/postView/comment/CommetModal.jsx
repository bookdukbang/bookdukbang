import React, { useState } from 'react';
import { SERVER_URL } from '../../../constants';
import {
	BottomSheatBg,
	BottomSheatWrap,
} from '../../common/modal/BottomSheat.style';
import Modal from '../../common/modal/Modal';

function CommetModal({
	postId,
	userInfo,
	modalInfo,
	setModalInfo,
	setIsCommentUpload,
}) {
	const [isShow, setIsShow] = useState(true);

	//내가 쓴 댓글이라면 댓글 삭제
	async function deleteCommentAPI() {
		const reqPath = `/post/${postId}/comments/${modalInfo.commentId}`;
		try {
			const res = await fetch(SERVER_URL + reqPath, {
				method: 'DELETE',
				headers: {
					Authorization: `Bearer ${userInfo.token}`,
					'Content-type': 'application/json',
				},
			});

			const json = await res.json();
			return json;
		} catch (err) {
			if (err.state === 404) {
				alert(err.message);
			}
			console.error(err.message);
		}
	}

	const deleteModal = {
		title: '댓글',
		whatDo: '삭제',
		cancel: () => {
			setModalInfo((cur) => ({ ...cur, state: false }));
			setIsShow(true);
		},
		delete: () => {
			deleteCommentAPI()
				.then((d) => alert(d.message))
				.then(() => {
					setModalInfo((cur) => ({ ...cur, state: false }));
					setIsShow(true);
					setIsCommentUpload(true);
				})
				.catch((err) => console.error(err.message));
		},
	};

	//타인이 쓴 댓글이라면 댓글 신고
	async function reportCommentAPI() {
		const reqPath = `/post/${postId}/comments/${modalInfo.commentId}/report`;
		try {
			const res = await fetch(SERVER_URL + reqPath, {
				method: 'POST',
				headers: {
					Authorization: `Bearer ${userInfo.token}`,
					'Content-type': 'application/json',
				},
			});

			const json = await res.json();
			return json;
		} catch (err) {
			if (err.state === 404) {
				alert(err.message);
			}
			console.error(err.message);
		}
	}

	const reportModal = {
		title: '댓글',
		whatDo: '신고',
		cancel: () => {
			setModalInfo((cur) => ({ ...cur, state: false }));
			setIsShow(true);
		},
		delete: () => {
			reportCommentAPI()
				.then(() => alert('신고 완료되었습니다.'))
				.then(() => {
					setModalInfo((cur) => ({ ...cur, state: false }));
					setIsShow(true);
					setIsCommentUpload(true);
				})
				.catch((err) => console.error(err.message));
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
						{userInfo.accountname === modalInfo.commentUser ? (
							<button type="button">삭제</button>
						) : (
							<button type="button">신고</button>
						)}
					</BottomSheatWrap>
				</BottomSheatBg>
			) : userInfo.accountname === modalInfo.commentUser ? (
				<Modal ModalInfo={deleteModal} />
			) : (
				<Modal ModalInfo={reportModal} />
			)}
		</>
	);
}
export default CommetModal;
