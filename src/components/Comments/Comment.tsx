import { Link } from 'react-router-dom'
import { ArticleComment } from 'redux/commentsReducer'
import { useAppSelector } from 'redux/hooks'
import { Typography } from '@mui/material'

type Props = {
    comment: ArticleComment
}
const Comment = ({ comment }: Props) => {
    const userImg =
        useAppSelector((state) =>
            comment.name === state.user.name ? state.user.avatar : undefined
        ) || '/images/users-avatars/no-user-avatar.png'
    return (
        <div className="comment-item">
            <img src={userImg} className="comment-item-user-img" />
            <div className="comment-item-text-wrapper">
                <Link
                    to={comment.website || '#'}
                    target="_blank"
                    onClick={(e) => {
                        comment.website === undefined
                            ? e.preventDefault()
                            : void 0
                    }}
                    className={
                        comment.website === undefined
                            ? 'comment-item-user-link comment-item-user-link-disabled'
                            : 'comment-item-user-link'
                    }
                >
                    <Typography
                        component="h4"
                        variant="button"
                        lineHeight={'20px'}
                        sx={{
                            color: 'text.primary',
                            transition: 'all 0.3s',
                            '&:hover': {
                                color:
                                    comment.website === undefined
                                        ? 'inherit'
                                        : 'text.secondary',
                            },
                        }}
                    >
                        {comment.name}
                    </Typography>
                </Link>
                <Typography
                    component="p"
                    variant="body1"
                    lineHeight={1.4}
                    mt={5}
                >
                    {comment.comment}
                </Typography>
            </div>
        </div>
    )
}
export default Comment
