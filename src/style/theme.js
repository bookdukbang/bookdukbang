const a11yHidden = () => {
	return `	
        overflow: hidden;
        position: absolute;
        clip: rect(0, 0, 0, 0);
        width: 1px;
        height: 1px;
        margin: -1px;
        border: 0;
        padding: 0;
    `;
};

const TextShortening = () => {
	return `	
        display: -webkit-box;
        -webkit-box-orient: vertical;
        overflow: hidden;
		-webkit-line-clamp: 1;
        text-overflow: ellipsis;
        word-break: break-all;
    `;
};

const ScrollbarStyle = () => {
	return `
	&::-webkit-scrollbar {
		width: 0.4rem;
	}
	
	&::-webkit-scrollbar-track {
		background-color: transparent;
	}
	&::-webkit-scrollbar-thumb {
		border-radius: 0.2rem;
		background-color: #D9D9D9;
	}
	&::-webkit-scrollbar-button {
		width: 0;
		height: 0;
	}
	
	& {
		scrollbar-width: thin;
		scrollbar-color: #D9D9D9 transparent;
	}
	
	
	`;
};

const size = {
	mobile: '(max-width: 390px)',
	tablet: '(max-width: 1024px)',
};

const lightTheme = {
	mainColor: '#2BC48A',
	subColor: '#333843',
	textColor: '#222',
	bgMainColor: '#FFF',
	bgsubColor: '#FAFAFA', //bgMainColor보다 어둡다
	grayColor1: '#666',
	grayColor2: '#999',
	grayColor3: '#BBB',
	grayColor4: '#D9D9D9',
	grayColor5: '#F6F6F6',
	whiteColor: '#FFF',
	errorColor: '#EB5757',

	size,

	a11yHidden, // ${({ theme }) => theme.a11yHidden()}
	TextShortening,
	ScrollbarStyle,
};

const darkTheme = {
	mainColor: '#4AD295',
	subColor: '#434B5A',
	textColor: '#EEE',
	bgMainColor: '#292242',
	bgsubColor: '#1F1831', //bgMainColor보다 어둡다
	grayColor1: '#F6F6F6',
	grayColor2: '#D9D9D9',
	grayColor3: '#BBB',
	grayColor4: '#999',
	grayColor5: '#666',
	whiteColor: '#FFF',
	errorColor: '#EB5757',

	size,

	a11yHidden, // ${({ theme }) => theme.a11yHidden()}
	TextShortening,
	ScrollbarStyle,
};

const theme = {
	light: lightTheme,
	dark: darkTheme,
};

export default theme;
