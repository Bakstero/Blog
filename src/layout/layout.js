import React from 'react'
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components'
import { theme } from '../utils/theme'
import Header from '../components/header/header'
import Footer from '../components/footer/footer'
 const GlobalStyle = createGlobalStyle`
	body {
		padding: 0;
		margin: 0;
		font-family: 'Montserrat';
		color: black;
		background: ${({ theme }) => theme.colors.background};
	}

	h1 {
		margin: 0;
	}

	*, *::before, *::after {
		box-sizing: border-box;
	}
`

const StyledWrapper = styled.div`
	display: flex;
	min-height: 100vh;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background: ${({theme}) => theme.colors.background};
	position: relative;
`

const Layout =({children}) => (
	<ThemeProvider theme={theme}>
		<>
			<GlobalStyle />
			<Header />
			<StyledWrapper>
				{children}
			</StyledWrapper>
			<Footer/>
		</>
	</ThemeProvider>
)


export default Layout







