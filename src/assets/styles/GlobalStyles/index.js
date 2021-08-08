import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *,
  *::before,
  *::after {
    padding: 0;
    margin: 0;
    box-sizing: inherit;
  }

  html, body {
    font: normal 18px/18px 'Montserrat', sans-serif;
    box-sizing: border-box;
    overflow-x: hidden;
    position: relative;
    scroll-behavior: smooth;
  }

  button {
    cursor: pointer;
    font-family: inherit;
    border: none;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  #gatsby-focus-wrapper {
    overflow: hidden;
  }
`;

export const Container = styled.section`
	padding: 35px 5vw;
	display: flex;
	flex-direction: column;
	width: 100%;

	@media screen and (min-width: 865px),
		(min-width: 1200px),
		(min-width: 1500px) {
		padding: 65px 10vw;
	}

	&:first-of-type {
		&::before {
			content: '';
			width: 80vh;
			position: absolute;
			height: 80vh;
			background: linear-gradient(
				180deg,
				hsla(222, 80%, 56%, 0.15) 50%,
				transparent 100%
			);
			clip-path: circle(50% at 50% 50%);
			position: absolute;
			right: -50vw;
			z-index: -8;
			top: -175px;

			@media screen and (min-width: 865px),
				(min-width: 1200px),
				(min-width: 1500px) {
				width: 100vw;
				height: 100vw;
			}
		}
	}
`;
