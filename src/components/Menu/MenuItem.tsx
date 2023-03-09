import Button from '@mui/material/Button/Button'
import { NavLink } from 'react-router-dom'
import './MenuItem.scss'

type Props = {
    to: string
    children: React.ReactNode
    hasSubElements?: boolean
}
const MenuItem = ({ to, children, hasSubElements }: Props) => {
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
        </Button>
    )
}
export default MenuItem
