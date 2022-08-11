import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import theme from './style/theme';
import GlobalStyles from './style/global';
import DarkModeBtn from './components/darkmode/DarkModeBtn';
import { ThemeModeContext } from './context/ThemeModeContext';
import Router from './routes/Router';

function App() {
	const LocalTheme = JSON.parse(localStorage.getItem('mode')) || 'light';
	const [mode, setMode] = useState(LocalTheme);

	return (
		<>
			<ThemeModeContext.Provider value={{ mode, setMode }}>
				<ThemeProvider theme={theme[mode]}>
					<GlobalStyles />
					<Router />

					<DarkModeBtn isMain={true} />
				</ThemeProvider>
			</ThemeModeContext.Provider>
		</>
	);
}

export default App;
