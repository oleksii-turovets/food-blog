import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import articlesArray from 'utils/articlesArray'
import { useAppSelector } from 'redux/hooks'
import { Typography } from '@mui/material'

type Props = {}
const AppBarDrawerMenu = (props: Props) => {
    const articleLike = useAppSelector((state) => state.articleLike)

    const filteredArray = articlesArray.filter(
        (item) => articleLike[item.id].isLiked
    )
    return (
        <div>
            <ul>
                <li>Home</li>
                <li>Featured</li>
                <li>
                    Recipes
                    <ul>
                        <li>All</li>
                        <li>Baking</li>
                        <li>Breakfast</li>
                        <li>Drinks</li>
                        <li>Vegan</li>
                    </ul>
                </li>
                <li>About</li>
                <li>Contact</li>
                <li>
                    Bookmarks{' '}
                    {filteredArray.length === 0 ? null : (
                        <Typography
                            component={'span'}
                            variant="inherit"
                            marginLeft={5}
                        >
                            {filteredArray.length}
                        </Typography>
                    )}
                </li>
            </ul>
        </div>
    )
}
export default AppBarDrawerMenu
