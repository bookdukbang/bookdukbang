# 📚 BOOK덕방
- 북덕방 서비스는 자신의 스토어에서 읽지 않는 책들을 서로 교환하며 방치되어 있던 책은 필요한 사람에게 전달하면서 자신에게 필요한 책도 얻을 수 있는 SNS 플랫폼입니다.
- 상품을 등록하지 않아도 일상을 공유하며 즐거운 SNS 활동을 할 수 있습니다. 글과 사진과 함께 게시물을 작성하여 자신의 일상을 공유할 수 있습니다. 
- 피드를 구경하다가 마음에 드는 게시물을 발견했다면 좋아요를 누를 수 있고 댓글을 남길 수 있습니다.

# 📕 기술 및 개발환경
`React` `Styled-Component` `JavaScript` `HTML/CSS`

`Git` `Github` `Github Issues` `Figma`

# 📗 요구사항
### [기능]
- 로그인
- 회원가입
- 피드(홈 화면)
- 게시글 작성/상세/수정/삭제
- 내 프로필 수정
- 사용자 프로필 페이지(내 프로필, 유저 프로필)
- 댓글 작성
- 팔로워/팔로잉 목록
- 유저 검색
- 상품 등록/수정/삭제
- 좋아요
- 팔로우/언팔로우

# 프로젝트 구조
- assets: 이미지, 아이콘이 들어있는 폴더
- components: 재사용 가능한 UI를 독립적으로 나눈 폴더
- pages: 해당 컴포넌트들을 모아놓은 페이지가 들어있는 폴더
- style: 글로벌스타일, 테마가 들어있는 폴더
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
# 📘 역할 분담

## 💞 김민영
### [UI 구현]
- 프로필 정보
- 피드(홈 화면)
- 유저 프로필
- 내 프로필(미디어쿼리)

### [기능 구현]
- 로그인
- 회원가입
- 피드(홈 화면)
- 사용자 프로필 페이지(내 프로필, 유저 프로필)
- 헤더 프로필

### [기타]
- 이미지 파일 업로드/미리보기

## 💞 방민지
### [UI 구현]
- Spalsh
- 채팅
- 내프로필(웹)
- 404페이지
- 팔로우리스트


### [기능 구현]
- 좋아요
- 팔로잉/팔로워 목록
- 팔로우 언팔로우

## 💞 추지혜
### [UI 구현]
- 게시글 작성
- 게시글 상세
- 검색
- 모달
- 모바일 하단 탭 메뉴
- 상품 등록

### [기능 구현]
- 게시글 작성/상세/수정/삭제
- 상품 등록/수정/삭제
- 댓글 작성, 리스트
- 프로필 수정
- 유저 검색


### [기타]
- 반응형 디자인 제작
- routes 설계 및 구현
- 이미지 파일 업로드 / 수정 / 미리보기, 이미지 삭제 / 슬라이더 구현


# 기능

### [splash]
- 서비스 접속 초기화면입니다.
- splash 화면에서 `다양한 북더기들을 만나보세요!` 버튼을 클릭하면 다양한 계정으로 로그인이 가능한 화면이 나타납니다. 

### [로그인]
- splash 화면에서 `이메일로 로그인`을 클릭하면 이메일로 로그인할 수 있는 화면으로 이동합니다.
- 이메일 주소와 비밀번호를 모두 입력하면 `로그인`버튼이 활성화 됩니다. 하나라도 입력되지 않으면 해당 버튼은 활성화되지 않습니다.
- 이메일 주소와 비밀번호에 대한 유효성 검사를 진행하여 일치하지 않을 경우 경고 문구가 나타납니다.
- 입력창에 focus될 경우에 선의 색이 변합니다. 

### [회원가입]
- 로그인 페이지에서 `회원가입`을 누르면 회원가입 화면이 나타납니다.
- 이메일 주소와 비밀번호를 입력하여 회원가입이 가능합니다. 
- 각 입력창에 대한 유효성 검사가 진행됩니다.
- 이메일 형식이 잘못되었거나 이미 가입된 이메일일 경우, 비밀번호가 6자리 미만일 경우 각 입력창 하단에 경고 문구가 나타납니다.
- 입력창에 focus될 경우에 선의 색이 변합니다. 
- 유효성 검사를 통과할 경우 `다음`버튼이 활성화되며, 버튼을 클릭하면 프로필 설정 폼이 나타납니다.
- 프로필 설정에 필요한 프로필 사진, 사용자 이름(2~10자 이내), 계정ID, 소개를 입력받습니다.
    - 프로필 사진을 등록하지 않은 경우 기본 이미지가 등록됩니다.
    - 사용자 이름과 소개는 다른 사용자와 중복 가능하지만 계정ID는 중복 불가능합니다.
    - 프로필 설정에서도 각 입력창에 대한 유효성 검사가 진행됩니다.

### [홈 피드]
- 해당 페이지는 사용자들이 올린 게시글들이 표시되는 페이지입니다.
- 피드에는 자신이 팔로우한 사용자의 게시글만 확인할 수 있습니다.
- 팔로우한 사용자가 없을 경우 "팔로우한 유저가 없습니다.”문구와 함께 `유저 검색 하기`버튼이 표시됩니다.

### [검색하기]
- 피드에서 `유저 검색 하기`버튼과 하단 네비바의 `SEARCH`을 클릭하면 표시되는 페이지입니다.
- 사용자 이름 검색이 가능하며, 이름 검색 후 돋보기 버튼을 클릭하면 검색결과가 표시됩니다.

### [채팅 페이지]
- 현재 대화가 진행 중인 목록이 표시됩니다.
- 채팅 목록에서 해당 아이템을 클릭하면 대화 내용이 나타납니다.
- 해당 메시지를 읽지 않았다면, 프로필 왼쪽 상단에 초록색 알림이 표시됩니다.
- 채팅 기능은 구현되지 않았습니다.

### [게시글 작성 페이지]
- 게시글을 작성할 수 있는 페이지로 PC 버전에선 `Posting`버튼, 모바일 버전에선 하단 네비바의 `+`버튼을 클릭하면 해당 페이지가 표시됩니다.
- 글이 입력되면 `업로드`버튼이 활성화되고, 버튼을 누르면 게시글이 업로드됩니다.
- 우측 하단 버튼을 클릭하면 이미지를 업로드할 수 있습니다.

### [게시글 상세 페이지]
- 게시글 하단의 말풍선 아이콘을 클릭하면 댓글을 확인하고 입력할 수 있는 게시물 상세 페이지로 이동합니다.
- 댓글 입력창에 텍스트를 입력하면 `게시`버튼이 활성화되고, `게시`버튼을 클릭하면 댓글이 추가됩니다.

### [게시글 수정, 신고, 삭제]
- 게시글, 댓글 우측에 위치한 버튼을 클릭했을 경우 모달창이 표시됩니다.
    - 내가 작성한 게시글 : `삭제`, `수정` 버튼이 나타납니다.
    - 내가 작성한 댓글 : `삭제` 버튼이 나타납니다.
    - 다른 사용자가 작성한 게시글 : `신고` 버튼이 나타납니다.
    - 다른 사용자가 작성한 댓글 : `신고` 버튼이 나타납니다.
    
 ### [팔로워 페이지, 팔로잉 페이지]
- 팔로워 페이지는 사용자를 팔로잉하고 있는 유저의 목록을 보여주는 페이지입니다.
- 팔로잉 페이지는 사용자가 팔로잉하고 있는 유저의 목록을 보여주는 페이지입니다.
- 사용자 프로필 페이지에서 팔로워 및 팔로잉 수를 클릭하면 나타나는 페이지입니다.
- 해당 목록은 사용자 프로필 사진, 이름, 계정 ID, 팔로잉(또는 팔로우) 버튼으로 구성됩니다.
- 내가 팔로우 한 사용자 일 경우 `팔로잉` 버튼이, 내가 팔로우 하지 않은 사용자일 경우 `팔로우` 버튼이 표시됩니다.
- 팔로우 버튼을 누를 경우 해당 사용자가 팔로잉되며, 팔로잉 버튼을 누를 경우 해당 사용자는 언팔로우 됩니다.
    
### [내 프로필]
- 내 프로필 페이지에서는 사용자 이름, 계정ID, 소개, 팔로워 및 팔로잉 수, `상품등록`버튼, 판매 상품, 그리고 사용자가 업로드한 게시글을 확인할 수 있습니다.
- 팔로잉, 팔로워 숫자를 클릭하면 팔로잉 목록, 팔로워 목록 페이지로 이동합니다.
- `상품등록`버튼을 클릭하면 상품 등록 페이지로 이동합니다.
- 프로필 사진 우측 하단 버튼을 클릭하면 프로필 수정 페이지로 이동합니다.
- 사용자가 올린 게시글이 없을 경우에는 게시글이 나타나지 않습니다.
- 판매 중인 상품 섹션은 등록한 상품이 없을 경우 표시되지 않습니다.

### [유저 프로필]
- 유저 프로필 사진을 클릭하면 해당 유저 프로필 페이지로 이동합니다.
- 유저 프로필 페이지에서는 유저 이름, 계정ID, 소개, 팔로워 및 팔로잉 수, 판매 상품, 그리고 해당 유저가 업로드한 게시글을 확인할 수 있습니다.
- 팔로잉, 팔로워 숫자를 클릭하면 팔로잉 목록, 팔로워 목록 페이지로 이동합니다.
- 본인이 팔로잉한 상대의 경우 `팔로잉`버튼으로 팔로잉하지 않은 상대의 경우 `팔로우`버튼이 표시됩니다.
- `팔로잉`버튼을 누르면 언팔로우 기능이 동작하고, `팔로우`버튼을 누르면 팔로우 기능이 동작합니다.
- 판매 중인 상품 섹션은 등록한 상품이 없을 경우 표시되지 않습니다.
- 또한, 해당 유저가 올린 게시글이 없을 경우 게시글은 나타나지 않습니다.

### [프로필 수정]
- 내 프로필 페이지에서 프로필 사진 우측 하단 버튼을 클릭하면 해당 페이지로 이동합니다.
- 프로필 사진, 사용자 이름, 계정ID, 소개를 수정할 수 있습니다.
- 수정할 내용을 해당 입력창에 입력하고, `저장`버튼을 누르면 반영됩니다.

### [상품 등록]
- 내 프로필 페이지에서 `상품 등록`버튼을 클릭하면 새상품을 등록할 수 있는 페이지가 나타납니다.
- 이미지, 상품명, 가격, 판매 링크를 입력받을 수 있으며, 모든 입력 완료시 `전송`버튼이 활성화 됩니다.
- 상품명은 2~15자 이내로 입력되게 하며, 가격은 숫자만 입력가능합니다.

### [상품 수정, 삭제]
- 내가 등록한 상품 이미지 클릭시 해당 상품의 정보와 `웹사이트 바로가기`버튼, `수정`, `삭제` 버튼이 있는 메뉴가 나옵니다.
- `수정` 버튼을 누르면 상품명, 가격, 판매 링크 수정이 가능합니다.
- 수정한 후 `전송` 버튼을 누르면 해당 내용이 반영됩니다.
- `삭제` 버튼을 누르면 “상품을 삭제할까요?” 모달이 뜨며, `삭제` 클릭시 상품이 삭제됩니다.
- `웹사이트 바로가기` 버튼 클릭시 해당 링크로 이동합니다.

### [로그아웃]
- PC 버전에서는 `Logout`버튼, 모바일 버전에서는 로고 우측 버튼을 클릭하면 로그아웃되어 Splash 화면으로 이동합니다.

### [하단 네비게이션]
- 하단 네비게이션은 홈, 채팅, 검색, 프로필 4개의 메뉴로 구성되어 있습니다.
- 해당 메뉴를 누르면 해당하는 페이지로 이동합니다.

### [좋아요 버튼]
- 게시글이 나타나는 모든 페이지에 해당합니다.
- 게시글 하단에 하트 모양 버튼이 위치합니다.
- 빈 하트를 클릭하면 색이 칠해진 하트로 변경되며, 색이 칠해진 하트를 누르면 빈 하트로 변경됩니다.
- 좋아요 개수는 카운트 되어 하트모양 우측에 표시됩니다.
