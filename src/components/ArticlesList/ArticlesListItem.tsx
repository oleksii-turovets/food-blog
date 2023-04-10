import { Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import {
    faEnvelope,
    faHeart as faHeartSolid,
} from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-regular-svg-icons'
import {
    faFacebookF,
    faTwitter,
    faPinterest,
} from '@fortawesome/free-brands-svg-icons'
import './ArticleList.scss'
import ArticleListActionBtn from 'components/ArticleListActionBtn/ArticleListActionBtn'
import ArticleCategoriesList from 'components/ArticleCategoriesList/ArticleCategoriesList'
import { useAppDispatch, useAppSelector } from 'redux/hooks'
import { toggleLike } from 'redux/likeReducer'

type Props = {
    id: number
    image?: string
    title?: string
    categoryList?: string[]
    date?: string
    author?: string
    desc?: string
}
const ArticlesListItem = ({
    id,
    image,
    title,
    categoryList,
    date,
    author,
    desc,
}: Props) => {
    const isLiked = useAppSelector((state) => state.articleLike[id].isLiked)
    const likesNumber = useAppSelector(
        (state) => state.articleLike[id].likeNumber
    )
    const dispatch = useAppDispatch()

    return (
        <div className="article-list-item">
            <Link to={`/category/recipes/${id}`} className="article-link-img">
                <img src={image} alt="recipe-photo" style={{ width: '100%' }} />
            </Link>
            <div className="article-head">
                <ArticleCategoriesList
                    categoryList={categoryList}
                    color={'text.hint'}
                />
                <Link to={`/category/recipes/${id}`} className="title">
                    <Typography
                        variant={'h4'}
                        component={'h5'}
                        align={'center'}
                        sx={{
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
                    className="details"
                >
                    <Typography
                        component={'span'}
                        variant={'inherit'}
                        className="author"
                    >
                        by{' '}
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
                    <Typography
                        component={'span'}
                        variant={'inherit'}
                        className="separator"
                        marginLeft={10}
                        marginRight={10}
                    >
                        |
                    </Typography>
                    <Typography
                        component={'span'}
                        variant={'inherit'}
                        className="date"
                    >
                        {date}
                    </Typography>
                </Typography>
            </div>
            <Typography
                component={'div'}
                variant={'body1'}
                color={'text.primary'}
                className="short-desc"
            >
                {desc?.length! <= 160 ? desc : `${desc!.slice(0, 156)}...`}
            </Typography>
            <div className="action-links-wrapper">
                <div className="action-links">
                    <ArticleListActionBtn
                        href={'/'}
                        icon={isLiked ? faHeartSolid : faHeart}
                        onClick={(e) => {
                            e.preventDefault()
                            dispatch(toggleLike(id))
                        }}
                    >
                        {likesNumber}
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
                        href={`mailto:?subject=${encodeURI(`${title}`)}&BODY=${
                            window.location.origin
                        }/category/recipes/${id}`}
                        icon={faEnvelope}
                    >
                        Email
                    </ArticleListActionBtn>
                </div>
            </div>
        </div>
    )
}
export default ArticlesListItem
