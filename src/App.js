import './App.css';
import Header from './component/Header';
import Section from'./component/Section';
import Footer from './component/Footer';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';
import reset from "styled-reset";
import { lightTheme, darkTheme } from './theme/theme';
import { useTheme } from './hooks/useTheme';

function App() {
  const [themeMode, setThemeMode] = useTheme();
  const theme = themeMode === 'dark' ? darkTheme : lightTheme;
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <StyledApp>
        <Header
          themeMode={themeMode}
          setThemeMode={setThemeMode}
        ></Header>
        <Section></Section>
        <Footer></Footer>
      </StyledApp>
    </ThemeProvider>
  );
}

const GlobalStyle = createGlobalStyle`
  ${reset}
  body{
    margin: 0;
    font-family: 'Noto Sans KR', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    background-color: ${props => props.theme.bg_1};
    color: ${props => props.theme.color};
  }
`;
const StyledApp = styled.div`
  margin: 0 auto;
  width: 100%;
`;
export default App;
