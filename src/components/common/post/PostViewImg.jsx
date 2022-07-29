import React, { useEffect, useState, useRef } from 'react';
import {
	PostImgWrap,
	PostImgList,
	PostImgLi,
	PostImgDeleteBtn,
	PostArrowBtnWrap,
	PrevBtn,
	NextBtn,
} from './PostViewImg.style';

function PostViewImg({ uploadImgs, setUploadImgs, isView }) {
	const [currentSlide, setCurrentSlide] = useState(0);
	const [currentAllCount, setCurrentAllCount] = useState(false);
	const [isShow, setIsShow] = useState(false);
	const slideRef = useRef(null);

	useEffect(() => {
		slideRef.current.style.transition = 'all 0.5s ease-in-out';
		slideRef.current.style.transform = `translateX(-${
			currentSlide * 101
		}%)`;
	}, [currentSlide]);

	useEffect(() => {
		if (currentAllCount > 1) {
			setIsShow(true);
		}
		setCurrentAllCount(uploadImgs.length);
	}, []);

	useEffect(() => {
		setCurrentAllCount(uploadImgs.length);
	}, [uploadImgs]);

	useEffect(() => {
		if (currentAllCount > 1) {
			setIsShow(true);
		} else {
			setIsShow(false);
		}
	}, [currentAllCount]);

	const onClickDeleteImg = (e) => {
		setUploadImgs((cur) =>
			cur.filter((x) => x.lastModified !== +e.target.parentElement.id),
		);
		if (currentAllCount === 0) {
			setCurrentSlide(0);
		} else {
			setCurrentSlide(currentSlide - 1);
		}
	};

	const onClickNextBtn = () => {
		if (currentSlide >= currentAllCount - 1) {
			setCurrentSlide(0);
		} else {
			setCurrentSlide(currentSlide + 1);
		}
	};

	const onClickPrevBtn = () => {
		if (currentSlide === 0) {
			setCurrentSlide(currentAllCount - 1);
		} else {
			setCurrentSlide(currentSlide - 1);
		}
	};

	return (
		<PostImgWrap>
			<PostImgList ref={slideRef}>
				{!isView &&
					uploadImgs.map((item, i) => (
						<PostImgLi
							key={item.lastModified + i}
							id={item.lastModified}
						>
							<img src={URL.createObjectURL(item)} alt="" />
							<PostImgDeleteBtn
								type="button"
								onClick={onClickDeleteImg}
							>
								<span>이미지 삭제</span>
							</PostImgDeleteBtn>
						</PostImgLi>
					))}
				{isView &&
					uploadImgs.map((item, i) => (
						<PostImgLi key={item + i} bgUrl={item}>
							<img src={item} alt="" />
						</PostImgLi>
					))}
			</PostImgList>
			{isShow && (
				<PostArrowBtnWrap isShow={isShow}>
					<PrevBtn type="button" onClick={onClickPrevBtn}>
						<span>왼쪽</span>
					</PrevBtn>
					<NextBtn type="button" onClick={onClickNextBtn}>
						<span>오른쪽</span>
					</NextBtn>
				</PostArrowBtnWrap>
			)}
		</PostImgWrap>
	);
}
export default PostViewImg;
