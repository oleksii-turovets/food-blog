import articlesArray from 'utils/articlesArray'
import { useAppSelector } from 'redux/hooks'
import { Typography } from '@mui/material'
import AppBarDrawerMenuItem from './AppBarDrawerMenuItem'
import './AppBarDrawerMenu.scss'

type Props = {}
const AppBarDrawerMenu = (props: Props) => {
    const articleLike = useAppSelector((state) => state.articleLike)

    const filteredArray = articlesArray.filter(
        (item) => articleLike[item.id].isLiked
    )
    return (
        <div className="app-bar">
            <ul>
                <AppBarDrawerMenuItem to="/" title="Home" />
                <AppBarDrawerMenuItem
                    to="/category/featured"
                    title="Featured"
                />
                <AppBarDrawerMenuItem to="/category/recipes" title="Recipes">
                    <AppBarDrawerMenuItem to="/category/recipes" title="All" />
                    {['baking', 'breakfast', 'drinks', 'vegan'].map(
                        (item, index) => (
                            <AppBarDrawerMenuItem
                                key={index}
                                to={`/category/${item}`}
                                title={item}
                            />
                        )
                    )}
                </AppBarDrawerMenuItem>
                <AppBarDrawerMenuItem to="/about" title="About" />
                <AppBarDrawerMenuItem to="/contact" title="Contact" />
                <AppBarDrawerMenuItem
                    to="/category/bookmarks"
                    title={
                        <>
                            Bookmarks
                            {filteredArray.length === 0 ? null : (
                                <Typography
                                    component={'span'}
                                    variant="inherit"
                                    marginLeft={5}
                                >
                                    {filteredArray.length}
                                </Typography>
                            )}
                        </>
                    }
                />
            </ul>
        </div>
    )
}
export default AppBarDrawerMenu
