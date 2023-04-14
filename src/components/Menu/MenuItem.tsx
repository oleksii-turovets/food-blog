import Button from '@mui/material/Button/Button'
import { NavLink } from 'react-router-dom'
import { Typography } from '@mui/material'
import './MenuItem.scss'

type Props = {
    to: string
    children: React.ReactNode
    hasSubElements?: boolean
    subMenuItems?: string[]
}
const MenuItem = ({ to, children, hasSubElements, subMenuItems }: Props) => {
    return (
        <Button
            className="menu-bar-btn"
            sx={{ height: 1, p: 0, minWidth: 'none' }}
        >
            <NavLink
                to={to}
                end
                className={({ isActive }) => {
                    let classes = ''
                    if (isActive) {
                        classes += 'menu-item-active'
                    } else {
                        classes += 'menu-item'
                    }
                    if (hasSubElements) {
                        classes += ' menu-item-with-popup'
                    }
                    return classes
                }}
            >
                {children}
            </NavLink>
            {subMenuItems === undefined || subMenuItems.length === 0 ? (
                void 0
            ) : (
                <ul className="menu-submenu">
                    {['all', 'baking', 'breakfast', 'drinks', 'vegan'].map(
                        (item, index) => (
                            <li key={index}>
                                <NavLink
                                    to={`/category/${
                                        item === 'all' ? 'recipes' : item
                                    }`}
                                >
                                    <Typography
                                        component={'div'}
                                        variant="h6"
                                        fontSize={12}
                                        lineHeight={1.4}
                                        sx={{
                                            transition: 'color .3s',
                                            color: 'primary.main',
                                            '&:hover': {
                                                color: 'text.hint',
                                            },
                                        }}
                                    >
                                        {item}
                                    </Typography>
                                </NavLink>
                            </li>
                        )
                    )}
                </ul>
            )}
        </Button>
    )
}
export default MenuItem
