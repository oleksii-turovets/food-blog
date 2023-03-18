import { NavLink } from 'react-router-dom'
import { Typography } from '@mui/material'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import articlesArray from 'utils/articlesArray'

type Props = {
    to: string
    children: React.ReactNode
    category: string[]
}

const SidebarCategoriesItem = ({ to, children, category }: Props) => {
    return (
        <li>
            <NavLink
                to={to}
                end
                className={({ isActive }) => {
                    let classes = ''
                    if (isActive) {
                        classes += 'category-item-active'
                    } else {
                        classes += 'category-item'
                    }
                    return classes
                }}
            >
                <Typography
                    component="span"
                    variant="subtitle1"
                    lineHeight={1.4}
                    className={'category-item-icon'}
                >
                    <FontAwesomeIcon
                        icon={faAngleRight}
                        className="icon-fa-angle-right"
                    />
                </Typography>
                <Typography
                    component="span"
                    variant="subtitle1"
                    lineHeight={1.4}
                    className={'category-item-name'}
                >
                    {children}
                </Typography>
                <Typography
                    component="span"
                    variant="subtitle1"
                    lineHeight={1.4}
                    className={'category-item-number'}
                >
                    (
                    {articlesArray
                        .filter((item) =>
                            category
                                .map((categoryName) =>
                                    item.category?.includes(categoryName)
                                )
                                .includes(true)
                        )
                        .reduce((count: number) => count + 1, 0)}
                    )
                </Typography>
            </NavLink>
        </li>
    )
}
export default SidebarCategoriesItem
