import MenuItem from './MenuItem'
import './MenuItem.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import articlesArray from 'utils/articlesArray'
import { useAppSelector } from 'redux/hooks'
import { Typography } from '@mui/material'

type Props = {}
const Menu = (props: Props) => {
    const articleLike = useAppSelector((state) => state.articleLike)

    const filteredArray = articlesArray.filter(
        (item) => articleLike[item.id].isLiked
    )

    return (
        <nav className="header-nav">
            <MenuItem to="/">Home</MenuItem>
            <MenuItem to="/category/featured">Featured </MenuItem>
            <MenuItem
                to="/category/recipes"
                hasSubElements={true}
                subMenuItems={['all', 'baking', 'breakfast', 'drinks', 'vegan']}
            >
                Recipes{' '}
                <FontAwesomeIcon
                    icon={faAngleDown}
                    className="icon-fa-angle-down"
                />
            </MenuItem>
            <MenuItem to="/category/breakfast">Breakfast</MenuItem>
            <MenuItem to="/about">About</MenuItem>
            <MenuItem to="/contact">Contact</MenuItem>
            <MenuItem to="/category/bookmarks">
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
            </MenuItem>
        </nav>
    )
}
export default Menu
