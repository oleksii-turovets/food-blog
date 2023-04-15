import { Typography } from '@mui/material'
import { NavLink } from 'react-router-dom'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown, faAngleUp} from '@fortawesome/free-solid-svg-icons'

type Props = {
    to: string
    title: React.ReactNode
    children?: React.ReactNode
    subMenuItems?: string[]
}
const AppBarDrawerMenuItem = ({ to, title, children }: Props) => {
    const [isSubMenuShown, setIsSubMenuShown] = useState<boolean>(false)
    return (
        <li>
            <NavLink
                to={to}
                className={({ isActive }) =>
                    isActive ? 'menu-item menu-item-active' : 'menu-item'
                }
            >
                <Typography
                    component={'div'}
                    variant="h6"
                    fontSize={13}
                    lineHeight={1.3}
                    color={'inherit'}
                    sx={{
                        transition: 'color 0.3s',
                    }}
                >
                    {title}
                </Typography>
                {children === undefined ? (
                    void 0
                ) : (
                    <div
                        className="clicker"
                            onClick={(e) => {
                            e.preventDefault()
                            setIsSubMenuShown((prevState) => !prevState)}
                        }
                        >
                            <FontAwesomeIcon icon={isSubMenuShown ? faAngleUp: faAngleDown }/>
                    </div>
                )}
            </NavLink>
            {children === undefined ? (
                void 0
            ) : (
                <ul
                    className={
                        isSubMenuShown ? 'submenu-shown' : 'submenu-hidden'
                    }
                >
                    {children}
                </ul>
            )}
        </li>
    )
}
export default AppBarDrawerMenuItem
