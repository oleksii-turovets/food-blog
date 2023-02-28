import Home from 'pages/Home/Home'
import { Route, Routes } from 'react-router-dom'

type Props = {}
const Main = (props: Props) => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </>
    )
}
export default Main
