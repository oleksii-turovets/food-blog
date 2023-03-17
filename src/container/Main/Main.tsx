import AboutPage from 'pages/AboutPage/AboutPage'
import BookmarksPage from 'pages/BookmarksPage/BookmarksPage'
import BreakfastPage from 'pages/BreakfastPage/BreakfastPage'
import ContactPage from 'pages/ContactPage/ContactPage'
import FeaturedPage from 'pages/FeaturedPage/FeaturedPage'
import Home from 'pages/Home/Home'
import PageNotFound from 'pages/PageNotFound/PageNotFound'
import RecipesPage from 'pages/RecipesPage/RecipesPage'
import { Route, Routes } from 'react-router-dom'

type Props = {}
const Main = (props: Props) => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/category/featured" element={<FeaturedPage />} />
                <Route path="/category/recipes" element={<RecipesPage />} />
                <Route
                    path="/category/recipes/breakfast"
                    element={<BreakfastPage />}
                />
                <Route
                    path="/category/bookmarks"
                    element={<BookmarksPage />}
                />
                <Route
                    path="*"
                    element={<PageNotFound />}
                />
            </Routes>
        </>
    )
}
export default Main
