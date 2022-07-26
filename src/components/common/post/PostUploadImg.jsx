import { IMG_UPLOAD_MAXCOUNT } from '../../../constants';
import React, { useEffect, useState } from 'react';
import { ImgFileLabel, ImgFileInput } from './PostUploadImg.style';

function PostUploadImg({ uploadImgs, setUploadImgs, isMulty }) {
	const [remainderNum, setRemainderNum] = useState(IMG_UPLOAD_MAXCOUNT);

	// 멀티 업로드 시, 이미지 갯수 확인
	useEffect(() => {
		if (isMulty) {
			setRemainderNum(IMG_UPLOAD_MAXCOUNT - uploadImgs.length);
		}
	}, [uploadImgs]);

	// 이미지 파일 검사
	const validation = (file) => {
		const fileTypes = [
			'image/jpg',
			'image/gif',
			'image/png',
			'image/jpeg',
			'image/bmp',
			'image/tif',
			'image/heic',
		];
		let isHasImg = -1;

		if (isMulty) {
			isHasImg = uploadImgs.findIndex(
				(val) => val.lastModified === file.lastModified,
			);
		}

		if (file === undefined) {
			return false;
		}

		if (isHasImg >= 0) {
			alert('이미 첨부된 파일입니다.');
			return false;
		} else if (file.name.indexOf('.') === -1) {
			alert('확장자가 없는 파일은 업로드할 수 없습니다.');
			return false;
		} else if (file.size > 10 * 1024 * 1024) {
			alert('10MB이하의 파일만 업로드할 수 있습니다.');
			return false;
		} else if (!fileTypes.includes(file.type)) {
			alert(
				'첨부 불가능한 파일 형식입니다.(*.jpg, *.gif, *.png, *.jpeg, *.bmp, *.tif, *.heic 형식의 파일만 첨부 가능)',
			);
			return false;
		} else {
			return true;
		}
	};

	// 이미지 업로드
	const onChangeImgUploadBtn = (e) => {
		const files = e.target.files;

		if (isMulty) {
			// 1개 이상 이미지 업로드
			if (remainderNum < files.length) {
				alert(
					`이미지는 최대 ${IMG_UPLOAD_MAXCOUNT}개까지 올릴 수 있습니다.`,
				);
			} else {
				for (let i = 0; i < files.length; i++) {
					if (validation(files[i])) {
						setUploadImgs((cur) => [...cur, files[i]]);
					}
				}
			}
		} else {
			// 1개 이미지 업로드
			if (validation(files[0])) {
				setUploadImgs(files[0]);
			}
		}
	};

	return (
		<>
			<ImgFileLabel htmlFor="chooseFile">
				<span>파일선택하기</span>
			</ImgFileLabel>
			<ImgFileInput
				type="file"
				id="chooseFile"
				name="chooseFile"
				onChange={onChangeImgUploadBtn}
				multiple={isMulty}
			/>
		</>
	);
}

export default PostUploadImg;
