import React, { useEffect, useState } from 'react';
import { ProductImg, ProductImgWrap } from '../../product/ProductForm.style';
import { BottomSheatBg } from '../modal/BottomSheat.style';
import User from '../../common/user/User';
import NoneImg from '../../../assets/none-product.png';
import Modal from '../modal/Modal';
import { BigBtn } from '../Button.style';
import {
	ProductWrap,
	BtnWrap,
	DeleteBtn,
	ModifyBtn,
	CloseBtn,
	PriceSpan,
} from './ProductDetail.style';
import { useProductAxios } from '../../../hooks/useProductAxios';

function ProductDetail({ modalInfo, setModalInfo }) {
	const { getProduct, deleteProduct } = useProductAxios();
	const loginUser = JSON.parse(sessionStorage.getItem('user')).accountname;
	const [isShow, setIsShow] = useState(true);
	const [productInfo, setProductInfo] = useState(null);

	useEffect(() => {
		getProduct(modalInfo.productId).then((productData) => {
			setProductInfo(productData);
		});
	}, []);

	const onClickBottomSheet = (e) => {
		if (e.target.id === 'blackBg' || e.target.id === 'ProductClose') {
			setModalInfo((cur) => ({ ...cur, state: false }));
			setIsShow(true);
		}
	};

	// 삭제하기
	const deleteModal = {
		title: '상품',
		whatDo: '삭제',
		cancel: () => {
			setModalInfo((cur) => ({ ...cur, state: false }));
			setIsShow(true);
		},
		delete: () => {
			deleteProduct(modalInfo.productId)
				.then((productData) => {
					setModalInfo((cur) => ({ ...cur, state: false }));
					setIsShow(true);
					alert(productData.message);
				})
				.then(() => {
					window.location.reload();
				});
		},
	};

	return (
		<>
			{productInfo !== null && isShow && (
				<BottomSheatBg onClick={onClickBottomSheet} id="blackBg">
					<ProductWrap id={productInfo.id}>
						<div>
							<User author={productInfo.author} />
						</div>
						<ProductImgWrap>
							<ProductImg
								src={productInfo.itemImage}
								alt={productInfo.itemName}
								onError={(e) => {
									e.target.src = NoneImg;
								}}
							/>
						</ProductImgWrap>
						<h3>{productInfo.itemName}</h3>
						<PriceSpan>
							{`${productInfo.price}`.replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',')}
							원
						</PriceSpan>
						<BtnWrap>
							<BigBtn
								as="a"
								href={productInfo.link}
								target="_blank"
								rel="noopener noreferrer"
							>
								웹사이트 바로가기
							</BigBtn>
							{productInfo.author.accountname === loginUser && (
								<>
									<ModifyBtn to={`/product/edit/${productInfo.id}`}>
										수정
									</ModifyBtn>
									<DeleteBtn
										type="button"
										onClick={() => {
											setIsShow(false);
										}}
									>
										삭제
									</DeleteBtn>
								</>
							)}
						</BtnWrap>
						<CloseBtn type="button" id="ProductClose">
							<span>창닫기</span>
						</CloseBtn>
					</ProductWrap>
				</BottomSheatBg>
			)}
			{!isShow && <Modal ModalInfo={deleteModal} />}
		</>
	);
}
export default ProductDetail;
