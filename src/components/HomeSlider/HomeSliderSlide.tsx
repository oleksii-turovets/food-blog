import { Typography } from '@mui/material'
import { Link } from 'react-router-dom'

type Props = {
    id?: number
    image?: string
    title?: string
    date?: string
    categoryList?: string[]
    isActive?: boolean
}

const HomeSliderSlide = ({
    id,
    image,
    title,
    date,
    categoryList,
    isActive,
}: Props) => {
    return (
        <div className="featured-post">
            <Link to={`/recipes/${id}`} className="featured-post-link-img">
                <img src={image} alt="recipe-photo" />
            </Link>
            <div
                className="featured-post-content"
                style={{ display: isActive ? 'block' : 'none' }}
            >
                <div className="featured-post-content-animation">
                    <div className="categories">
                        {categoryList?.map((category, index) => (
                            <Link
                                to={
                                    category === 'featured'
                                        ? `/category/${category}`
                                        : `/category/recipes/${category}`
                                }
                                className="category-link"
                                key={index}
                            >
                                <Typography
                                    component={'div'}
                                    fontSize={13}
                                    lineHeight={1.2}
                                    textTransform={'capitalize'}
                                    color={'primary.contrastText'}
                                    className="category-name"
                                >
                                    {category}
                                </Typography>
                            </Link>
                        ))}
                    </div>
                    <Link
                        to={`/category/recipes/${id}`}
                        className="featured-post-link-title"
                    >
                        <Typography
                            variant={'h1'}
                            component={'h4'}
                            align={'center'}
                            color={'primary.contrastText'}
                            className="title"
                        >
                            {title}
                        </Typography>
                    </Link>
                    <Typography
                        component={'div'}
                        fontSize={13}
                        lineHeight={1.2}
                        textTransform={'capitalize'}
                        align={'center'}
                        color={'primary.contrastText'}
                        className="featured-post-date"
                    >
                        {date}
                    </Typography>
                </div>
            </div>
        </div>
    )
}
export default HomeSliderSlide
