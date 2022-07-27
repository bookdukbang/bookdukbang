import React, { useState } from 'react';
import {
	BottomSheatBg,
	BottomSheatWrap,
} from '../common/modal/BottomSheat.style';
import Modal from '../common/modal/Modal';

function ProductModal({ setModalInfo }) {
	const [isShow, setIsShow] = useState(true);

	const modal = {
		title: '상품',
		whatDo: '삭제',
		cancel: () => {
			alert('취소 되었습니다.');
			setModalInfo((cur) => ({ ...cur, state: false }));
		},
		delete: () => {
			// deleteProductAPI()
			// .then((d) => alert(d.message))
			// .then(() => {
			setModalInfo((cur) => ({ ...cur, state: false }));
			// })
			// .catch((error) => console.error(error.message));
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

export default ProductModal;
