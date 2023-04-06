import { Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import './ArticleCategoriesList.scss'

type Props = {
    categoryList?: string[]
    color: string
}

const ArticleCategoriesList = ({ categoryList, color }: Props) => {
    return (
        <div className="categories">
            {categoryList?.map((categoryName, index) => (
                <Link
                    to={`/category/${categoryName}`}
                    className="category-link"
                    key={index}
                >
                    <Typography
                        component={'div'}
                        fontSize={13}
                        lineHeight={1.2}
                        textTransform={'capitalize'}
                        color={color}
                        align={'center'}
                        className="category-name"
                    >
                        {categoryName}
                    </Typography>
                </Link>
            ))}
        </div>
    )
}
export default ArticleCategoriesList
