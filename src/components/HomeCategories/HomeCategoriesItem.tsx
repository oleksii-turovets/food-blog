import { Link } from 'react-router-dom'

import { Typography } from '@mui/material'
import articlesArray from 'utils/articlesArray'

type Props = {
    category: string
}

const HomeCategoriesItem = ({ category }: Props) => {
    return (
        <li className="category">
            <Link
                to={`/category/recipes/${category}`}
                className="category-link"
            >
                <img
                    src={
                        articlesArray
                            .filter(
                                (item) =>
                                    item.category?.includes(category) &&
                                    item.category?.includes('featured')
                            )
                            .at(-1)!.img
                    }
                    alt="category-img"
                />
                <Typography
                    className="category-title"
                    component={'h4'}
                    variant={'h6'}
                    lineHeight={'40px'}
                    align={'center'}
                    sx={{
                        color: 'text.primary',
                        backgroundColor: 'primary.contrastText',
                        textDecoration: 'none',
                        '&:hover': { color: 'text.hint' },
                    }}
                >
                    {category}
                </Typography>
            </Link>
        </li>
    )
}
export default HomeCategoriesItem
