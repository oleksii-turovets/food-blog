import { Typography } from '@mui/material'
import { HashLink } from 'react-router-hash-link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faEnvelope,
    faHeart as faHeartSolid,
} from '@fortawesome/free-solid-svg-icons'
import { faComment, faHeart } from '@fortawesome/free-regular-svg-icons'
import {
    faFacebookF,
    faTwitter,
    faPinterest,
} from '@fortawesome/free-brands-svg-icons'
import ArticleListActionBtn from 'components/ArticleListActionBtn/ArticleListActionBtn'
import { Article } from 'utils/articlesArray'
import { useAppDispatch, useAppSelector } from 'redux/hooks'
import { toggleLike } from 'redux/likeReducer'

type Props = {
    id: Article['id']
    title: Article['title']
    image: Article['img']
}

const ArticleMetaContent = ({ id, title, image }: Props) => {
    const commentsNumber = useAppSelector((state) =>
        state.articlesComments[id] !== undefined
            ? state.articlesComments[id].length
            : 0
    )
    const isLiked = useAppSelector((state) => state.articleLike[id].isLiked)
    const likesNumber = useAppSelector(
        (state) => state.articleLike[id].likeNumber
    )
    const dispatch = useAppDispatch()

    const scrollWithOffset = (el: HTMLElement) => {
        const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset
        const yOffset = -80
        window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' })
    }

    return (
        <div
            className="meta-content"
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '10px 15px',
                borderTop: '1px solid #eeeeee',
                borderBottom: '1px solid #eeeeee',
            }}
        >
            <HashLink
                smooth
                to={`/category/recipes/${id}/#comments`}
                scroll={(el) => scrollWithOffset(el)}
                className="comments"
            >
                <Typography
                    component={'span'}
                    variant={'body2'}
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
                        className="comment-icon"
                        style={{
                            marginRight: '5px',
                            display: 'inline-block',
                            marginBottom: '-2px',
                        }}
                    />{' '}
                    {`${commentsNumber} comment${
                        commentsNumber > 1 ? 's' : ''
                    }`}
                </Typography>
            </HashLink>

            <Typography
                component={'span'}
                variant={'body2'}
                color="#eeeeee"
                className="separator"
                marginLeft={15}
                marginRight={15}
            >
                |
            </Typography>
            <div className="action-links-wrapper">
                <div
                    className="action-links"
                    style={{
                        display: 'flex',
                        width: 'fit-content',
                        justifyContent: 'center',
                        alignItems: 'center',
                        gap: '10px',
                    }}
                >
                    <div className="likes">
                        <Typography
                            component={'span'}
                            color={'text.hint'}
                            fontSize={13}
                            fontWeight={700}
                            fontStyle={'italic'}
                            mr={5}
                            width={12}
                            display={'inline-block'}
                        >
                            {likesNumber}
                        </Typography>
                        <ArticleListActionBtn
                            href={'/'}
                            icon={isLiked ? faHeartSolid : faHeart}
                            onClick={(e) => {
                                e.preventDefault()
                                dispatch(toggleLike(id))
                            }}
                            color={isLiked ? 'text.hint' : 'text.primary'}
                        >
                            Likes
                        </ArticleListActionBtn>
                    </div>

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
export default ArticleMetaContent
