import React, { useEffect, useState } from 'react';
import { SERVER_URL } from '../../../constants';
import { useNavigate, useParams } from 'react-router-dom';
import { ProductImg, ProductImgWrap } from '../../productAdd/ProductForm.style';
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

function ProductDetail({ modalInfo, setModalInfo }) {
	const navigate = useNavigate();
	const { id } = useParams();
	const token = JSON.parse(localStorage.getItem('user')).token;
	const loginUser = JSON.parse(localStorage.getItem('user')).accountname;
	const [isShow, setIsShow] = useState(true);
	const [productInfo, setProductInfo] = useState(null);

	useEffect(() => {
		productViewAPI();
	}, []);

	const onClickBottomSheet = (e) => {
		if (e.target.id === 'blackBg' || e.target.id === 'ProductClose') {
			setModalInfo((cur) => ({ ...cur, state: false }));
			setIsShow(true);
		}
	};
	async function productViewAPI() {
		const reqPath = `/product/detail/${modalInfo.productId}`;

		try {
			const res = await fetch(SERVER_URL + reqPath, {
				method: 'GET',
				headers: {
					Authorization: `Bearer ${token}`,
					'Content-type': 'application/json',
				},
			});

			const json = await res.json();

			if (json.status === 404) {
				throw navigate('/errorPage');
			}

			setProductInfo(json.product);
		} catch (err) {
			console.error(err);
		}
	}

	// 삭제하기
	const onClickDelete = () => {
		setIsShow(false);
	};

	const deleteModal = {
		title: '상품',
		whatDo: '삭제',
		cancel: () => {
			setModalInfo((cur) => ({ ...cur, state: false }));
			setIsShow(true);
		},
		delete: () => {
			deleteProductAPI();
		},
	};

	async function deleteProductAPI() {
		try {
			const res = await fetch(
				SERVER_URL + `/product/${modalInfo.productId}`,
				{
					method: 'DELETE',
					headers: {
						Authorization: `Bearer ${token}`,
						'Content-type': 'application/json',
					},
				},
			);
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
							{`${productInfo.price}`.replace(
								/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g,
								',',
							)}
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
									<ModifyBtn to="/">수정</ModifyBtn>
									<DeleteBtn
										type="button"
										onClick={onClickDelete}
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
