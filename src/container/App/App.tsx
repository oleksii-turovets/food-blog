import Footer from 'container/Footer/Footer'
import Header from 'container/Header/Header'
import Main from 'container/Main/Main'
import CssBaseline from '@mui/material/CssBaseline'
import { StyledEngineProvider } from '@mui/material/styles'
import { ThemeProvider } from '@mui/material'
import theme from 'utils/theme'

type Props = {}
const App = (props: Props) => {

    return (
        <StyledEngineProvider injectFirst>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <Header />
                <Main />
                <Footer />
            </ThemeProvider>
        </StyledEngineProvider>
    )
}
export default App
