import { Typography, Button } from '@mui/material'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faEnvelope,
    faHeart as faHeartSolid,
} from '@fortawesome/free-solid-svg-icons'
import {
    faClock,
    faComment,
    faHeart,
} from '@fortawesome/free-regular-svg-icons'
import {
    faFacebookF,
    faTwitter,
    faPinterest,
} from '@fortawesome/free-brands-svg-icons'
import './ArticleList.scss'
import ArticleListActionBtn from 'components/ArticleListActionBtn/ArticleListActionBtn'

type Props = {
    id?: number
    image?: string
    title?: string
    categoryList?: string[]
    date?: string
    author?: string
    desc?: string
}
const ArticlesListItemExtended = ({
    id,
    image,
    title,
    categoryList,
    date,
    author,
    desc,
}: Props) => {
    const isLiked = true

    return (
        <div className="article-list-item-extended">
            <div className="article-head">
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
                                color={'text.hint'}
                                align={'center'}
                                className="category-name"
                            >
                                {category}
                            </Typography>
                        </Link>
                    ))}
                </div>
                <Link to={`/category/recipes/${id}`} className="title">
                    <Typography
                        component={'h5'}
                        align={'center'}
                        sx={{
                            typography: { xs: 'h4', sm: 'h1' },
                            color: 'text.primary',
                            '&:hover': {
                                color: 'text.secondary',
                            },
                            transition: 'color 0.3s',
                        }}
                    >
                        {title}
                    </Typography>
                </Link>
                <Typography
                    component={'div'}
                    variant={'body2'}
                    align={'center'}
                    color={'text.secondary'}
                    className="author"
                >
                    written by{' '}
                    <Link to="/about" className="author-link">
                        <Typography
                            component={'span'}
                            variant={'inherit'}
                            sx={{
                                color: 'text.primary',
                                '&:hover': {
                                    color: 'text.hint',
                                },
                                transition: 'color 0.3s',
                            }}
                        >
                            {author}
                        </Typography>
                    </Link>
                </Typography>
            </div>
            <Link to={`/category/recipes/${id}`} className="article-link-img">
                <img src={image} alt="recipe-photo" style={{ width: '100%' }} />
            </Link>
            <div className="text-content">
                <Typography
                    component={'div'}
                    variant={'body1'}
                    color={'text.primary'}
                    className="short-desc"
                >
                    {desc}
                </Typography>
                <Link to={`/category/recipes/${id}`} className="more-link">
                    <Typography
                        variant="h6"
                        component={'div'}
                        lineHeight={1}
                        fontSize={12}
                        color={'secondary.contrastText'}
                        bgcolor={'secondary.main'}
                        sx={{
                            boxSizing: 'border-box',
                            padding: '14px 16px',
                            '&:hover': {
                                opacity: 0.8,
                            },
                        }}
                    >
                        Continue reading
                    </Typography>
                </Link>
            </div>
            <div className="meta-content">
                <Typography
                    component={'div'}
                    variant={'body2'}
                    color={'text.secondary'}
                    className="details"
                >
                    <Typography
                        component={'span'}
                        variant={'inherit'}
                        className="date"
                    >
                        <FontAwesomeIcon
                            icon={faClock}
                            className="detail-icon time-icon"
                        />
                        {date}
                    </Typography>
                    <Typography
                        component={'span'}
                        variant={'inherit'}
                        className="separator"
                        marginLeft={15}
                        marginRight={15}
                    >
                        |
                    </Typography>
                    <Link to={`/category/recipes/${id}/#respond`}>
                        <Typography
                            component={'span'}
                            variant={'inherit'}
                            className="comments"
                            sx={{
                                color: 'text.secondary',
                                transition: 'color 0.3s',
                                '&:hover': {
                                    color: 'text.hint',
                                },
                            }}
                        >
                            <FontAwesomeIcon
                                icon={faComment}
                                className="detail-icon comment-icon"
                            />{' '}
                            0 comment
                        </Typography>
                    </Link>
                </Typography>
                <div className="action-links-wrapper">
                    <div className="action-links">
                        <ArticleListActionBtn
                            href={'/'}
                            icon={isLiked ? faHeartSolid : faHeart}
                            onClick={(e) => e.preventDefault()}
                        >
                            Likes
                        </ArticleListActionBtn>
                        <ArticleListActionBtn
                            href={`https://www.facebook.com/sharer/sharer.php?u=${window.location.origin}/category/recipes/${id}`}
                            icon={faFacebookF}
                        >
                            Facebook
                        </ArticleListActionBtn>
                        <ArticleListActionBtn
                            href={`https://twitter.com/intent/tweet?text=Check%20out%20this%20article:%20${window.location.origin}/category/recipes/${id}`}
                            icon={faTwitter}
                        >
                            Twitter
                        </ArticleListActionBtn>
                        <ArticleListActionBtn
                            href={`https://www.pinterest.com/pin/create/button/?url=${encodeURI(
                                `${window.location.origin}/category/recipes/${id}`
                            )}&media=${encodeURI(
                                `${window.location.origin}${image}`
                            )}&description=${encodeURI(`${title}`)}`}
                            icon={faPinterest}
                        >
                            Pinterest
                        </ArticleListActionBtn>
                        <ArticleListActionBtn
                            href={`mailto:?subject=${encodeURI(
                                `${title}`
                            )}&BODY=${
                                window.location.origin
                            }/category/recipes/${id}`}
                            icon={faEnvelope}
                        >
                            Email
                        </ArticleListActionBtn>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ArticlesListItemExtended
