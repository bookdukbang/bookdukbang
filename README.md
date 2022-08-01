![info_bookduk](https://user-images.githubusercontent.com/96187560/182022886-db840a94-49ea-4c66-8811-ab4544678f65.jpg)

# 📚 BOOK덕방

### 개요

-   북덕방 서비스는 자신의 스토어에서 읽지 않는 책들을 서로 교환하며 방치되어 있던 책은 필요한 사람에게 전달하면서 자신에게 필요한 책도 얻을 수 있는 SNS 플랫폼입니다.
-   상품을 등록하지 않아도 일상을 공유하며 즐거운 SNS 활동을 할 수 있습니다. 글과 사진과 함께 게시물을 작성하여 자신의 일상을 공유할 수 있습니다.
-   피드를 구경하다가 마음에 드는 게시물을 발견했다면 좋아요를 누를 수 있고 댓글을 남길 수 있습니다.

### 배포 URL

-   URL: [링크](링크넣기)
-   계정
    -   `ID`:
    -   `PassWord`:

# 📕 기술 및 개발환경

`React` `Styled-Component` `JavaScript` `HTML/CSS`
`Git` `Github` `Github Issues` [`Figma`](https://www.figma.com/file/M0bp0ilof7QwUkHD58Reta/%EB%B6%81%EB%8D%95%EB%B0%A9?node-id=3%3A3342)

- 피그마 링크: [Figma](https://www.figma.com/file/M0bp0ilof7QwUkHD58Reta/%EB%B6%81%EB%8D%95%EB%B0%A9?node-id=3%3A3342)
- 커밋 컨벤션 링크: [커밋 컨벤션](https://www.notion.so/d1f251287a7d4e73a03350bee1930710)
- 코드 컨벤션 링크: [코딩 컨벤션](https://www.notion.so/c57e3d6607f64d2ab80f937fbea18d7e), 

# 📘 역할 분담

## 💞 김민영

|                           **Info**                            | **UI 구현**                                                                     | **기능 구현**                                                                                                                                                                      | **기타**                      |
| :-----------------------------------------------------------: | :------------------------------------------------------------------------------ | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :---------------------------- |
| **github**: [minyoung22222](https://github.com/minyoung22222) | - 프로필 정보</br>- 피드(홈 화면)</br>- 유저 프로필</br>- 내 프로필(미디어쿼리) | - [로그인](#로그인)<br/>- [회원가입](#회원가입)<br/>- [피드(홈 피드)](#홈피드) <br/>- 사용자 프로필 페이지([내 프로필](#내_프로필), [유저 프로필](#유저_프로필))<br/>- 헤더 프로필 | - 이미지 파일 업로드/미리보기 |

## 💞 방민지

|                     **Info**                      | **UI 구현**                                                                                 | **기능 구현**                                                                                                |
| :-----------------------------------------------: | :------------------------------------------------------------------------------------------ | :----------------------------------------------------------------------------------------------------------- |
| **github**: [alswlbb](https://github.com/alswlbb) | - Spalsh</br>- 채팅</br>- 유저 프로필</br>- 내프로필(웹)</br>- 404페이지</br>- 팔로우리스트 | - [좋아요](#좋아요_버튼) <br/>- [팔로잉/팔로워 목록](#팔로워_팔로잉)<br/>- [팔로우 언팔로우](#팔로워_팔로잉) |

## 💞 추지혜

|                                                   **Info**                                                   | **UI 구현**                                                                                                                    | **기능 구현**                                                                                                                                                                                                                                                                                                    | **기타**                                                                                                              |
| :----------------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------------------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :-------------------------------------------------------------------------------------------------------------------- |
| **blog**: [chooing](https://velog.io/@chumil7432) </br> **github**: [JIHYE CHOO](https://github.com/chooing) | - 게시글 작성<br/>- 게시글 상세<br/>- [검색](#검색하기) <br/>- 모달<br/>- 모바일 하단 탭 메뉴<br/>- 상품 등록 <br/> - 다크모드 | - 게시글 [등록](#게시글작성)/[상세](#게시글상세)/[수정/삭제/신고](#게시글_수정_신고_삭제)<br/>- 상품 [등록](#상품_등록)/상세/[수정/삭제](#상품_수정_삭제) <br/>- 댓글 작성/[삭제/신고](#댓글_신고_삭제), 댓글 리스트<br/>- [프로필 수정](#프로필수정) <br/>- [유저 검색](#검색하기) <br/>- 모달 <br/> - 다크모드 | - 반응형 디자인 제작<br/>- routes 설계 및 구현<br/>- 이미지 파일 업로드/수정/삭제/미리보기<br/>- 이미지 슬라이더 구현 |

# 📗 기능 및 UI

|                                       0. [splash](#splash)                                       |                                      1. [로그인](#로그인)                                      |
| :----------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------: |
| <img src="src/assets/gif/splash_web.gif"/><img src="src/assets/gif/splash_mob.gif" width="250"/> | <img src="src/assets/gif/login_web.gif"/><img src="src/assets/gif/login_mob.gif" width="250"/> |

|                                       2. [회원가입](#회원가입)                                       |                                       3. [프로필 설정](#회원가입)                                        |
| :--------------------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------------------: |
| <img src="src/assets/gif/회원가입_web.gif"/><img src="src/assets/gif/회원가입_mob.gif" width="250"/> | <img src="src/assets/gif/프로필설정_web.gif"/><img src="src/assets/gif/프로필설정_mob.gif" width="250"/> |

|                                    4. [홈 피드](#홈피드)                                     |                                     5. [검색](#검색하기)                                     |
| :------------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------: |
| <img src="src/assets/gif/피드_web.gif"/><img src="src/assets/gif/피드_mob.gif" width="250"/> | <img src="src/assets/gif/검색_web.gif"/><img src="src/assets/gif/검색_mob.gif" width="250"/> |

|                                      6. [게시물 등록](#게시글작성)                                      |                                      7. [게시글 상세](#게시글상세)                                      |
| :-----------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------: |
| <img src="src/assets/gif/post_upload_PC.gif"/><img src="src/assets/gif/post_upload_M.gif" width="250"/> | <img src="src/assets/gif/post_detail_PC.gif"/><img src="src/assets/gif/post_detail_M.gif" width="250"/> |

|                                8. [게시물 수정](#게시글_수정_신고_삭제)                                 |                             9. [게시물 신고 & 삭제](#게시글_수정_신고_삭제)                             |
| :-----------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------: |
| <img src="src/assets/gif/post_modify_PC.gif"/><img src="src/assets/gif/post_modify_M.gif" width="250"/> | <img src="src/assets/gif/post_delete_PC.gif"/><img src="src/assets/gif/post_delete_M.gif" width="250"/> |

|                                        10. [댓글 등록](#게시글상세)                                        |                                  11. [댓글 신고 & 삭제](#댓글_신고_삭제)                                   |
| :--------------------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------------: |
| <img src="src/assets/gif/comment_upload.gif"/><img src="src/assets/gif/comment_upload_M.gif" width="250"/> | <img src="src/assets/gif/comment_delete.gif"/><img src="src/assets/gif/comment_delete_M.gif" width="250"/> |

|                                     12. [내 프로필](#내_프로필)                                      |                                  13. [사용자 프로필 수정](#프로필수정)                                   |
| :--------------------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------------------: |
| <img src="src/assets/gif/내프로필_web.gif"/><img src="src/assets/gif/내프로필_mob.gif" width="250"/> | <img src="src/assets/gif/프로필수정_web.gif"/><img src="src/assets/gif/프로필수정_mob.gif" width="250"/> |

|                                        14. [타 유저 프로필](#유저_프로필)                                        |                                          15. [팔로우 & 팔로잉 목록](#팔로워_팔로잉)                                          |
| :--------------------------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------------------------------: |
| <img src="src/assets/gif/타 유저 프로필_web.gif"/><img src="src/assets/gif/타 유저 프로필_mob.gif" width="250"/> | <img src="src/assets/gif/팔로우 & 팔로잉 목록_web.gif"/><img src="src/assets/gif/팔로우 & 팔로잉 목록_mob.gif" width="250"/> |

|                                    16. [좋아요](#좋아요_버튼)                                    |                                        17. [팔로우 & 언팔로우](#팔로워_팔로잉)                                         |
| :----------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------------------------: |
| <img src="src/assets/gif/좋아요_web.gif"/><img src="src/assets/gif/좋아요_mob.gif" width="250"/> | <img src="src/assets/gif/팔로우 & 언팔로우_web.gif"/><img src="src/assets/gif/팔로우 & 언팔로우_mob.gif" width="250"/> |

|                                       18. [판매 상품 등록](#상품_등록)                                        |                                       19. [판매 상품 상세](#상품_등록)                                        |
| :-----------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------: |
| <img src="src/assets/gif/product_upload_PC.gif"/><img src="src/assets/gif/product_upload_M.gif" width="250"/> | <img src="src/assets/gif/product_detail_PC.gif"/><img src="src/assets/gif/product_detail_M.gif" width="250"/> |

|                                     20. [판매 상품 수정](#상품_수정_삭제)                                     |                                     21. [판매 상품 삭제](#상품_수정_삭제)                                     |
| :-----------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------: |
| <img src="src/assets/gif/product_modify_PC.gif"/><img src="src/assets/gif/product_modify_M.gif" width="250"/> | <img src="src/assets/gif/product_delete_PC.gif"/><img src="src/assets/gif/product_delete_M.gif" width="250"/> |

|                                      22. [로그아웃](#로그아웃)                                       |                                       23. [채팅방](#채팅)                                        |
| :--------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------: |
| <img src="src/assets/gif/로그아웃_web.gif"/><img src="src/assets/gif/로그아웃_mob.gif" width="250"/> | <img src="src/assets/gif/채팅방_web.gif"/><img src="src/assets/gif/채팅방_mob.gif" width="250"/> |

| 23. 다크모드 |  
| :--------------------------------------------------------------------------------------------------:
| <img src="src/assets/gif/darkmode_PC.gif"/><img src="src/assets/gif/darkmode_M.gif" width="250"/>

# 💥트러블 슈팅(핵심 로직)

## 1. 유저 프로필 페이지 - useLocation / useParams

### 문제 상황

유저의 프로필 사진을 클릭했을 경우 유저 프로필 페이지로 이동하기 위해서는 유저의 accountname이 필요했습니다. 그래서 프로필 사진 Link의 state에서 userId를 지정해준 후 다음 페이지에서 useLocation을 사용하여 state의 userId에 접근하도록 하였습니다.

```jsx
<Link
	to={`/user/${author.accountname}`}
	state={{ userId: author.accountname }}
>
```

```jsx
import { useLocation } from 'react-router-dom';

const location = useLocation();
const data = location.state.userId;

const res = await fetch(SERVER_URL + `/각각의 API/${data}`, {  // 생략
```

그 결과 프로필 사진을 클릭한 경우에만 userId를 받아올 수 있기 때문에 주소창 url에 `user/유저acccountname`을 적용했을 경우에는 빈 화면이 나오는 현상이 발생하였습니다.

### 해결 방법

App.jsx의 라우트 연결에서 path를 `/user/:id`로 지정하고 :id 파라미터의 정보를 가져오기 위해 react-router-dom의 useParams라는 훅을 사용하였습니다. useParams의 정보를 id라는 변수에 저장하여 파라미터를 사용함으로써 프로필 사진이 클릭되었을 때 뿐만이 아니라 주소창에 url을 직접 적용하여도 페이지가 성공적으로 렌더링 되었습니다.

```jsx
<Link to={`/user/${author.accountname}`}>
```

```jsx
import { useParams } from 'react-router-dom';

let { id } = useParams();

const res = await fetch(SERVER_URL + `/각각의 API/${id}`, {  // 생략
```

```jsx
<Route path="/user/:id" exact element={<UserProfilePage />} />
```

## 2. 다크모드 - useContext / 로컬 스토리지

### 문제 상황

-   변수를 전달하기 위해 props를 계속 내려 받아야하는 문제
   <br/> 기존 코드에서는 `<DarkModeBtn/>`가 `App.js`외에서 사용될 때는 `mode`, `setMode`를 계속 넘겨 자식 컴포넌트로 넘겨주어 불필요한 props가 전달되면서 상태 관리가 복잡해지게 되었습니다.
-   재렌더링 시, 다크모드 설정 초기화
   <br/>새로운 페이지로 넘어갈 때나 새로고침을 할 때 렌더링 되면서 `mode`의 기본값인 **light**로 돌아가 다크모드일 때 라이트모드로 바뀌어 지는 문제가 발생했습니다.

```jsx
import { ThemeProvider } from 'styled-components';
import theme from './style/theme';
import GlobalStyles from './style/global';
import DarkModeBtn from './components/darkmode/DarkModeBtn';

function App() {
	const [mode, setMode] = useState('light');
	return (
		<>
			<ThemeProvider theme={theme[mode]}>
				<GlobalStyles />
				// 생략
				<DarkModeBtn mode={mode} setMode={setMode} />
			</ThemeProvider>
		</>
	);
}
```

```jsx
import React from 'react';

function DarkModeBtn({ mode, setMode }) {
	const { mode, setMode } = useContext(ThemeModeContext);
	// 생략
}
```

### 해결 방법

-   `useContext` 사용해 상태 관리
   <br/> 이를 해결하기 위해 상태 관리 툴을 생각했습니다. 이 문제의 경우, 관리되는 변수가 가볍고 복잡하지 않아 상태관리를 도와 주는 툴로 **useContext**을 사용했습니다. 이를 통해 `<DarkModeBtn/>`가 `App.js` 외에서도 자유롭게 사용되도록 해결했습니다.
-   `로컬 스토리지`로 사용자의 모드 저장하기
    <br/> 사용자가 설정한 값을 저장하도록 브라우저의 저장소인 `로컬 스토리지`를 사용하여 `mode`가 바뀔 때 `로컬 스토리지`에도 값이 저장되도록 수정해 재랜더링 되더라도 다크모드 또는 라이트 모드가 유지되게 해결했습니다.

```jsx
import { createContext } from 'react';
export const ThemeModeContext = createContext(null);
```

```jsx
import DarkModeBtn from './components/darkmode/DarkModeBtn';
import { ThemeModeContext } from './context/ThemeModeContext';
import { ThemeProvider } from 'styled-components';
import theme from './style/theme';

function App() {
	const LocalTheme = JSON.parse(localStorage.getItem('mode')) || 'light';
	const [mode, setMode] = useState(LocalTheme);

	return (
		<>
			<ThemeModeContext.Provider value={{ mode, setMode }}>
				<ThemeProvider theme={theme[mode]}>
					// 생략
					<DarkModeBtn />
				</ThemeProvider>
			</ThemeModeContext.Provider>
		</>
	);
}
```

```jsx
import React, { useContext } from 'react';
import { ThemeModeContext } from '../../context/ThemeModeContext';

function DarkModeBtn({ isMain }) {
	const { mode, setMode } = useContext(ThemeModeContext);
	const onClickMode = () => {
		if (mode === 'light') {
			setMode('dark');
			localStorage.setItem('mode', JSON.stringify('dark'));
		} else {
			setMode('light');
			localStorage.setItem('mode', JSON.stringify('light'));
		}
	};
	//생략
}
```

## 3. 팔로우 / 언팔로우 - useEffect

### 문제상황

팔로우/팔로잉 리스트를 불러와서 추가로 해당 유저에 대해 팔로우/언팔로우 기능을 구현하기 위해 해당 api를 호출하였고, 삼항연산자를 사용하여 isfollow 값이 true, false에 따라 `팔로잉`/ `팔로우` 버튼을 화면에 나타내 주었습니다. 추가로 `팔로잉` 버튼을 누르면 언팔로우 기능이 동작하며, `팔로우` 버튼을 누르면 팔로잉 기능이 동작되게 구현하였습니다.

그 결과 `팔로잉`, `팔로우` 버튼을 클릭하면 팔로우/ 언팔로우 기능이 동작하면서 isfollow 값이 바뀌어 그 값에 따른 버튼 모양이 다시 화면에 나타나야 하는데, 그 결과가 다시 화면에 렌더링 되지 않는 문제가 발생했습니다.

```jsx
function Followings() {
	const { id } = useParams();
	const [Following, setFollowing] = useState(null);

	// 팔로잉 리스트, 팔로우 리스트(UserFollowList())
	async function UserFollowingList() {
		try {
			// 생략
		} catch (error) {
			console.error(error);
		}
	}
	useEffect(() => {
		UserFollowingList();
	}, []);

	// 팔로우
	async function Follow(useraccount) {
		try {
			// 생략
		} catch (error) {
			console.error(error);
		}
	}

	// 언팔로우
	async function UnFollow(useraccount) {
		try {
			// 생략
		} catch (error) {
			console.error(error);
		}
	}

	return (
		<>
			{Following !== null &&
				Following.map((item) => (
					<UserLi key={item._id}>
						// 생략
						{item.isfollow ? (
							<FollowingBtn
								type="button"
								onClick={() => UnFollow(item.accountname)}
							>
								팔로잉
							</FollowingBtn>
						) : (
							<FollowBtn
								type="button"
								onClick={() => Follow(item.accountname)}
							>
								팔로우
							</FollowBtn>
						)}
					</UserLi>
				))}
		</>
	);
}
```

### 해결방법

`isLoading`이라는 변수를 만들어 초기값을 false로 설정하였고, 팔로우/언팔로우 api가 호출될때마다 true로 바꿔주었습니다. 팔로우/언팔로우 기능이 수행되면서 useEffect로 해당 변수 변화를 감지해 팔로우/팔로잉 리스트가 다시 호출되면서 바뀐 isfollow값에 따른 버튼이 다시 화면에 렌더링 되었습니다.

```jsx
function Followings() {

const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		if (isLoading) {
			UserFollowingList();
			setIsLoading(false);
		}
	}, [isLoading]);

// 생략

	// 팔로우
	async function Follow(useraccount) {
		try {
			// 생략
			setIsLoading(true);
		}
	    // 생략
	}

	// 언팔로우
	async function UnFollow(useraccount) {
		try {
			// 생략
	    setIsLoading(true);
		}
      // 생략
	}
}
```

# 📒프로젝트를 하며 겪은 이슈

### [코딩 컨벤션](https://www.notion.so/c57e3d6607f64d2ab80f937fbea18d7e), [커밋 컨벤션](https://www.notion.so/d1f251287a7d4e73a03350bee1930710), 파일/폴더 이름 컨벤션

-   각자 스타일이 다르기 때문에 협업 전 가독성과 개발 방식 통합을 위해 코딩 컨벤션과 커밋 컨벤션의 필요함을 느꼈습니다.
-   기존에 존재하는 컨벤션 자료를 참고하여 저희에게 맞는 컨벤션을 만들었습니다.
-   eslint, prettier 파일을 만들어 자동 설정했습니다.
-   이미지는 asset 폴더에 저장, 폴더이름은 소문자로, 해당 컴포넌트 2번 이상 사용되면 common 폴더에 저장 하는 방식으로 파일, 폴더 이름의 컨벤션을 지정하였습니다.

### Github Issues https://github.com/bookdukbang/bookdukbang/pull/16/

-   협업하기에 팀원 간의 작업을 파악하고 코드리뷰를 주고 받으며 충돌을 방지하기 위해 `Github Issues`를 활용하여 원활한 협업에 도움이 되었습니다.

# 📝 레슨런

### Team Operation

-   협업 방식으로 Git Flow 전략을 사용하여 소스코드를 관리하여 기존의 5가지 브랜치로 나누지 않고 필요하다고 생각되는 3가지 브랜치(main, develop, feature)로 줄여서 적용하였습니다.
-   초반에 팀원 인원 수의 감소로 원래 4명의 분량으로 생각하여 반응형까지 고려하기에 어려움을 겪었지만, 3명으로도 적절히 분량을 분배하여 완성하였습니다.
-   팀원이 PR을 올릴 때, 반드시 모든 팀원이 코드 리뷰 후 확인 코멘트를 남기면 merge하는 절차를 만들어 타인의 코드를 보는 경험을 하고 다양한 코드 방식을 알게 되었습니다.
-   디자인 경험이 있는 팀원이 피그마로 반응형 디자인 시안을 제작해 기존의 모바일 웹 버전만 있는 프로젝트를 업그레이드 하여 반응형 웹 페이지로 제작하였습니다.

### Achieving Needs

-   프로젝트 후반부로 갈 수록 문서에 정리해두는 과정이 부족해 프로젝트 이슈 발생 시 원인과 해결에 대한 아카이빙이 미흡되었음을 알고 개선해야겠다고 느꼈습니다.
-   초기에 계획한 타입스크립트나 리덕스 등 다양한 기술을 사용하지 못해 아쉬웠고 useMemo 등 렌더링의 최적화 하는 방식으로 리팩토링이 필요하다고 생각했습니다.
-   폴더 및 파일 분기에 대한 각자의 기준이 다르다보니 파일마다 일관된 형식이 아니고 재사용성을 고려하지 못한 부분이 아쉬웠습니다.

# 📕 기능상세

### [splash]

-   서비스 접속 초기화면입니다.
-   splash 화면에서 `다양한 북더기들을 만나보세요!` 버튼을 클릭하면 다양한 계정으로 로그인이 가능한 화면이 나타납니다.

### [로그인]

-   splash 화면에서 `이메일로 로그인`을 클릭하면 이메일로 로그인할 수 있는 화면으로 이동합니다.
-   이메일 주소와 비밀번호를 모두 입력하면 `로그인`버튼이 활성화 됩니다. 하나라도 입력되지 않으면 해당 버튼은 활성화되지 않습니다.
-   이메일 주소와 비밀번호에 대한 유효성 검사를 진행하여 일치하지 않을 경우 경고 문구가 나타납니다.
-   입력창에 focus될 경우에 선의 색이 변합니다.

### [회원가입]

-   로그인 페이지에서 `회원가입`을 누르면 회원가입 화면이 나타납니다.
-   이메일 주소와 비밀번호를 입력하여 회원가입이 가능합니다.
-   각 입력창에 대한 유효성 검사가 진행됩니다.
-   이메일 형식이 잘못되었거나 이미 가입된 이메일일 경우, 비밀번호가 6자리 미만일 경우 각 입력창 하단에 경고 문구가 나타납니다.
-   입력창에 focus될 경우에 선의 색이 변합니다.
-   유효성 검사를 통과할 경우 `다음`버튼이 활성화되며, 버튼을 클릭하면 프로필 설정 폼이 나타납니다.
-   프로필 설정에 필요한 프로필 사진, 사용자 이름(2~10자 이내), 계정ID, 소개를 입력받습니다.
    -   프로필 사진을 등록하지 않은 경우 기본 이미지가 등록됩니다.
    -   사용자 이름과 소개는 다른 사용자와 중복 가능하지만 계정ID는 중복 불가능합니다.
    -   프로필 설정에서도 각 입력창에 대한 유효성 검사가 진행됩니다.

### [홈피드]

-   해당 페이지는 사용자들이 올린 게시글과 내 프로필, 내 상품, 팔로잉리스트들이 표시되는 페이지입니다.
-   피드, 팔로잉리스트에는 자신이 팔로우한 사용자의 게시글만 확인할 수 있습니다.
-   팔로우한 사용자가 없을 경우 "팔로우한 유저가 없습니다.”문구와 함께 `유저 검색 하기`버튼이 표시됩니다.

### [검색하기]

-   피드에서 `유저 검색 하기`버튼과 하단 네비바의 `SEARCH`을 클릭하면 표시되는 페이지입니다.
-   사용자 이름 검색이 가능하며, 이름 검색 후 돋보기 버튼을 클릭하면 검색결과가 표시됩니다.

### [채팅]

-   현재 대화가 진행 중인 목록을 보여줍니다.
-   채팅 목록에서 해당 아이템을 클릭하면 대화 내용이 나타납니다.
-   해당 메시지를 읽지 않았다면, 프로필 왼쪽 상단에 초록색 알림이 표시됩니다.
-   채팅 기능은 구현되지 않았습니다.

### [게시글작성]

-   게시글을 작성할 수 있는 페이지로 PC 버전에선 `Posting`버튼, 모바일 버전에선 하단 네비바의 `+`버튼을 클릭하면 해당 페이지가 표시됩니다.
-   글이 입력되면 `업로드`버튼이 활성화되고, 버튼을 누르면 게시글이 업로드됩니다.
-   우측 하단 버튼을 클릭하면 이미지를 업로드할 수 있습니다.

### [게시글상세]

-   게시글 하단의 말풍선 아이콘을 클릭하면 댓글을 확인하고 입력할 수 있는 게시물 상세 페이지로 이동합니다.
-   댓글 입력창에 텍스트를 입력하면 `게시`버튼이 활성화되고, `게시`버튼을 클릭하면 댓글이 추가됩니다.

### [게시글_수정_신고_삭제]

-   게시글 우측에 위치한 버튼을 클릭했을 경우 모달창이 표시됩니다.
    -   내가 작성한 게시글 : `삭제`, `수정` 버튼이 나타납니다.
    -   다른 사용자가 작성한 게시글 : `신고` 버튼이 나타납니다.

### [댓글_신고_삭제]

-   댓글 우측에 위치한 버튼을 클릭했을 경우 모달창이 표시됩니다.
    -   내가 작성한 댓글 : `삭제` 버튼이 나타납니다.
    -   다른 사용자가 작성한 댓글 : `신고` 버튼이 나타납니다.

### [팔로워_팔로잉]

-   팔로워 페이지는 사용자를 팔로잉하고 있는 유저의 목록을 보여주는 페이지입니다.
-   팔로잉 페이지는 사용자가 팔로잉하고 있는 유저의 목록을 보여주는 페이지입니다.
-   사용자 프로필 페이지에서 팔로워 및 팔로잉 수를 클릭하면 나타나는 페이지입니다.
-   해당 목록은 사용자 프로필 사진, 이름, 계정 ID, 팔로잉(또는 팔로우) 버튼으로 구성됩니다.
-   내가 팔로우 한 사용자 일 경우 `팔로잉` 버튼이, 내가 팔로우 하지 않은 사용자일 경우 `팔로우` 버튼이 표시됩니다.
-   팔로우 버튼을 누를 경우 해당 사용자가 팔로잉되며, 팔로잉 버튼을 누를 경우 해당 사용자는 언팔로우 됩니다.

### [내_프로필]

-   내 프로필 페이지에서는 사용자 이름, 계정ID, 소개, 팔로워 및 팔로잉 수, `상품등록`버튼, 판매 상품, 그리고 사용자가 업로드한 게시글을 확인할 수 있습니다.
-   팔로잉, 팔로워 숫자를 클릭하면 팔로잉 목록, 팔로워 목록 페이지로 이동합니다.
-   `상품등록`버튼을 클릭하면 상품 등록 페이지로 이동합니다.
-   프로필 사진 우측 하단 버튼을 클릭하면 프로필 수정 페이지로 이동합니다.
-   사용자가 올린 게시글이 없을 경우에는 게시글이 나타나지 않습니다.
-   판매 중인 상품 섹션은 등록한 상품이 없을 경우 표시되지 않습니다.

### [유저_프로필]

-   유저 프로필 사진을 클릭하면 해당 유저 프로필 페이지로 이동합니다.
-   유저 프로필 페이지에서는 유저 이름, 계정ID, 소개, 팔로워 및 팔로잉 수, 판매 상품, 그리고 해당 유저가 업로드한 게시글을 확인할 수 있습니다.
-   팔로잉, 팔로워 숫자를 클릭하면 팔로잉 목록, 팔로워 목록 페이지로 이동합니다.
-   본인이 팔로잉한 상대의 경우 `팔로잉`버튼으로 팔로잉하지 않은 상대의 경우 `팔로우`버튼이 표시됩니다.
-   `팔로잉`버튼을 누르면 언팔로우 기능이 동작하고, `팔로우`버튼을 누르면 팔로우 기능이 동작합니다.
-   판매 중인 상품 섹션은 등록한 상품이 없을 경우 표시되지 않습니다.
-   또한, 해당 유저가 올린 게시글이 없을 경우 게시글은 나타나지 않습니다.

### [프로필수정]

-   내 프로필 페이지에서 프로필 사진 우측 하단 버튼을 클릭하면 해당 페이지로 이동합니다.
-   프로필 사진, 사용자 이름, 계정ID, 소개를 수정할 수 있습니다.
-   수정할 내용을 해당 입력창에 입력하고, `저장`버튼을 누르면 반영됩니다.

### [상품_등록]

-   내 프로필 페이지에서 `상품 등록`버튼을 클릭하면 새상품을 등록할 수 있는 페이지가 나타납니다.
-   이미지, 상품명, 가격, 판매 링크를 입력받을 수 있으며, 모든 입력 완료시 `전송`버튼이 활성화 됩니다.
-   상품명은 2~15자 이내로 입력되게 하며, 가격은 숫자만 입력가능합니다.

### [상품_수정_삭제]

-   내가 등록한 상품 이미지 클릭시 해당 상품의 정보와 `웹사이트 바로가기`버튼, `수정`, `삭제` 버튼이 있는 메뉴가 나옵니다.
-   `수정` 버튼을 누르면 상품명, 가격, 판매 링크 수정이 가능합니다.
-   수정한 후 `전송` 버튼을 누르면 해당 내용이 반영됩니다.
-   `삭제` 버튼을 누르면 “상품을 삭제할까요?” 모달이 뜨며, `삭제` 클릭시 상품이 삭제됩니다.
-   `웹사이트 바로가기` 버튼 클릭시 해당 링크로 이동합니다.

### [로그아웃]

-   PC 버전에서는 `Logout`버튼, 모바일 버전에서는 로고 우측 버튼을 클릭하면 로그아웃되어 Splash 화면으로 이동합니다.

### [하단_네비게이션]

-   하단 네비게이션은 홈, 채팅, 검색, 프로필 4개의 메뉴로 구성되어 있습니다.
-   해당 메뉴를 누르면 해당하는 페이지로 이동합니다.

### [좋아요_버튼]

-   게시글이 나타나는 모든 페이지에 해당합니다.
-   게시글 하단에 하트 모양 버튼이 위치합니다.
-   빈 하트를 클릭하면 색이 칠해진 하트로 변경되며, 색이 칠해진 하트를 누르면 빈 하트로 변경됩니다.
-   좋아요 개수는 카운트 되어 하트모양 우측에 표시됩니다.

# 📗 프로젝트 구조

-   assets: 이미지, 아이콘이 들어있는 폴더
-   components: 재사용 가능한 UI를 독립적으로 나눈 폴더
-   pages: 해당 컴포넌트들을 모아놓은 페이지가 들어있는 폴더
-   style: 글로벌스타일, 테마가 들어있는 폴더

```
src
 ┣ assets
 ┣ components
 ┃ ┣ chat
 ┃ ┃ ┣ ChatContent.jsx
 ┃ ┃ ┣ ChatList.jsx
 ┃ ┃ ┣ ChatList.style.jsx
 ┃ ┃ ┗ MessageBottom.jsx
 ┃ ┣ common
 ┃ ┃ ┣ feed
 ┃ ┃ ┃ ┣ Feed.jsx
 ┃ ┃ ┃ ┗ FeedModal.jsx
 ┃ ┃ ┣ header
 ┃ ┃ ┃ ┣ FeedHeader.jsx
 ┃ ┃ ┃ ┣ FeedHeader.style.jsx
 ┃ ┃ ┃ ┗ Header.jsx
 ┃ ┃ ┣ modal
 ┃ ┃ ┃ ┣ BottomSheat.style.jsx
 ┃ ┃ ┃ ┗ Modal.jsx
 ┃ ┃ ┣ post
 ┃ ┃ ┃ ┣ PostHeader.jsx
 ┃ ┃ ┃ ┣ PostUploadImg.jsx
 ┃ ┃ ┃ ┣ PostUploadImg.style.jsx
 ┃ ┃ ┃ ┣ PostViewImg.jsx
 ┃ ┃ ┃ ┗ PostViewImg.style.jsx
 ┃ ┃ ┣ product
 ┃ ┃ ┃ ┣ ProductBtn.jsx
 ┃ ┃ ┃ ┣ ProductDetail.jsx
 ┃ ┃ ┃ ┗ ProductDetail.style.jsx
 ┃ ┃ ┣ user
 ┃ ┃ ┃ ┣ User.jsx
 ┃ ┃ ┃ ┗ UserUpload.jsx
 ┃ ┃ ┣ Button.style.jsx
 ┃ ┃ ┣ Footer.jsx
 ┃ ┃ ┣ FormWrap.style.jsx
 ┃ ┃ ┣ Input.style.jsx
 ┃ ┃ ┣ LikeButton.jsx
 ┃ ┃ ┣ MainTitle.jsx
 ┃ ┃ ┣ ProfileName.style.jsx
 ┃ ┃ ┗ Wrap.jsx
 ┃ ┣ feed
 ┃ ┃ ┣ BookList.jsx
 ┃ ┃ ┣ FeedNoFollowings.jsx
 ┃ ┃ ┣ FollowingFeed.jsx
 ┃ ┃ ┣ MyFollowings.jsx
 ┃ ┃ ┣ User.jsx
 ┃ ┃ ┗ UserFollowing.jsx
 ┃ ┣ followList
 ┃ ┃ ┣ Follower.jsx
 ┃ ┃ ┣ Following.jsx
 ┃ ┃ ┣ FollowList.style.jsx
 ┃ ┃ ┗ UserFollowBtn.jsx
 ┃ ┣ join
 ┃ ┃ ┣ JoinForm.jsx
 ┃ ┃ ┣ JoinProfile.style.jsx
 ┃ ┃ ┗ JoinProfileForm.jsx
 ┃ ┣ darkmode
 ┃ ┃ ┗ DarkModeBtn.jsx
 ┃ ┣ login
 ┃ ┃ ┗ LoginForm.jsx
 ┃ ┣ navigator
 ┃ ┃ ┣ NavigatorMenu.jsx
 ┃ ┃ ┗ NavigatorMenu.style.jsx
 ┃ ┣ postEdit
 ┃ ┃ ┣ PostEditContainer.jsx
 ┃ ┃ ┗ PostEditHeader.jsx
 ┃ ┣ postUpload
 ┃ ┃ ┣ PostForm.jsx
 ┃ ┃ ┣ PostForm.style.jsx
 ┃ ┃ ┗ PostUpContainer.jsx
 ┃ ┣ postView
 ┃ ┃ ┣ comment
 ┃ ┃ ┃ ┣ Comment.jsx
 ┃ ┃ ┃ ┣ Comment.style.jsx
 ┃ ┃ ┃ ┣ CommentContainer.jsx
 ┃ ┃ ┃ ┣ CommentForm.jsx
 ┃ ┃ ┃ ┣ CommentForm.style.jsx
 ┃ ┃ ┃ ┗ CommetModal.jsx
 ┃ ┃ ┣ PostCard.jsx
 ┃ ┃ ┣ PostCard.style.jsx
 ┃ ┃ ┗ PostViewContainer.jsx
 ┃ ┣ product
 ┃ ┃ ┣ ProductForm.jsx
 ┃ ┃ ┣ ProductForm.style.jsx
 ┃ ┃ ┣ ProductLink.jsx
 ┃ ┃ ┣ ProductName.jsx
 ┃ ┃ ┗ ProductPrice.jsx
 ┃ ┣ profile
 ┃ ┃ ┣ edit
 ┃ ┃ ┃ ┣ EditAccount.jsx
 ┃ ┃ ┃ ┣ EditIntro.jsx
 ┃ ┃ ┃ ┣ EditUsername.jsx
 ┃ ┃ ┃ ┗ ProfileEdit.jsx
 ┃ ┃ ┣ MyFeed.jsx
 ┃ ┃ ┣ ProductRegister.jsx
 ┃ ┃ ┣ ProfileInfo.jsx
 ┃ ┃ ┣ UserProductRegister.jsx
 ┃ ┃ ┗ UserProfileInfo.jsx
 ┃ ┣ search
 ┃ ┃ ┣ SearchCard.jsx
 ┃ ┃ ┣ SearchContainer.jsx
 ┃ ┃ ┣ SearchContainer.style.jsx
 ┃ ┃ ┣ SearchHeader.jsx
 ┃ ┃ ┗ SearchHeader.style.jsx
 ┃ ┗ splash
 ┃ ┃ ┣ Splash.jsx
 ┃ ┃ ┣ SplashButton.style.jsx
 ┃ ┃ ┣ SplashHeader.jsx
 ┃ ┃ ┣ SplashLogin.jsx
 ┃ ┃ ┗ SplashTitle.style.jsx
 ┣ constants
 ┃ ┗ index.js
 ┣ context
 ┃ ┗ ThemeModeContext.jsx 
 ┣ pages
 ┃ ┣ 404Page.jsx
 ┃ ┣ ChatContentPage.jsx
 ┃ ┣ ChatListPage.jsx
 ┃ ┣ FeedPage.jsx
 ┃ ┣ FollowerList.jsx
 ┃ ┣ FollowerListPage.jsx
 ┃ ┣ FollowingListPage.jsx
 ┃ ┣ JoinPage.jsx
 ┃ ┣ JoinProfilePage.jsx
 ┃ ┣ LoginPage.jsx
 ┃ ┣ MyProfilePage.jsx
 ┃ ┣ PostEditPage.jsx
 ┃ ┣ PostUploadPage.jsx
 ┃ ┣ PostView.jsx
 ┃ ┣ ProductEditPage.jsx
 ┃ ┣ ProductPage.jsx
 ┃ ┣ ProfileEditPage.jsx
 ┃ ┣ SearchPage.jsx
 ┃ ┣ SplashPage.jsx
 ┃ ┗ UserProfilePage.jsx
 ┣ style
 ┃ ┣ global.jsx
 ┃ ┗ theme.js
 ┣ App.jsx
 ┗ index.js
```
