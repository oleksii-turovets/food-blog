import MenuItem from "./MenuItem"
import './MenuItem.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faAngleDown,
} from '@fortawesome/free-solid-svg-icons'

type Props = {}
const Menu = (props: Props) => {
  return (
      <nav className="header-nav">
          <MenuItem to="/">Home</MenuItem>
          <MenuItem to="/category/featured" hasSubElements={true}>
              Featured{' '}
              <FontAwesomeIcon
                  icon={faAngleDown}
                  className="icon-fa-angle-down"
              />
          </MenuItem>
          <MenuItem to="/category/recipes" hasSubElements={true}>
              Recipes{' '}
              <FontAwesomeIcon
                  icon={faAngleDown}
                  className="icon-fa-angle-down"
              />
          </MenuItem>
          <MenuItem to="/category/recipes/breakfast" hasSubElements={true}>
              Breakfast
              <FontAwesomeIcon
                  icon={faAngleDown}
                  className="icon-fa-angle-down"
              />
          </MenuItem>
          <MenuItem to="/about">About</MenuItem>
          <MenuItem to="/contact">Contact</MenuItem>
          <MenuItem to="/category/bookmarks">Bookmarks</MenuItem>
      </nav>
  )
}
export default Menu