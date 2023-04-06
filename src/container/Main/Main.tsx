import AboutPage from 'pages/AboutPage/AboutPage'
import ArticlePage from 'pages/ArticlePage/ArticlePage'
import BookmarksPage from 'pages/BookmarksPage/BookmarksPage'
import CategoryPage from 'pages/CategoryPage/CategoryPage'
import ContactPage from 'pages/ContactPage/ContactPage'
import Home from 'pages/Home/Home'
import PageNotFound from 'pages/PageNotFound/PageNotFound'
import { useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'

type Props = {}
const Main = (props: Props) => {
    const location = useLocation()
    console.log(location)
    useEffect(() => {
        location.hash.startsWith('#') ? void 0 : window.scrollTo(0, 0)
    }, [location])
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/category/">
                    <Route path=":categoryName" element={<CategoryPage />} />
                    <Route path="recipes/:id" element={<ArticlePage />} />
                    <Route path="bookmarks" element={<BookmarksPage />} />
                </Route>
                <Route path="*" element={<PageNotFound />} />
            </Routes>
        </>
    )
}
export default Main
