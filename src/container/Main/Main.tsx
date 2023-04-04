import AboutPage from 'pages/AboutPage/AboutPage'
import ArticlePage from 'pages/ArticlePage/ArticlePage'
import BookmarksPage from 'pages/BookmarksPage/BookmarksPage'
import CategoryPage from 'pages/CategoryPage/CategoryPage'
import ContactPage from 'pages/ContactPage/ContactPage'
import Home from 'pages/Home/Home'
import PageNotFound from 'pages/PageNotFound/PageNotFound'
import { Route, Routes } from 'react-router-dom'

type Props = {}
const Main = (props: Props) => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/category/">
                    <Route path=":categoryName" element={<CategoryPage />} />
                    <Route
                        path="recipes/:categoryName"
                        element={<CategoryPage />}
                    />
                    <Route path="recipes/:id" element={<ArticlePage />} />
                    <Route path="bookmarks" element={<BookmarksPage />} />
                </Route>
                <Route path="*" element={<PageNotFound />} />
            </Routes>
        </>
    )
}
export default Main
