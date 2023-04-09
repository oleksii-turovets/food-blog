import { Article } from 'utils/articlesArray'
import { Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import './ArticlesPagination.scss'

type Props = {
    articlesArray: Article[]
    currentArticleIndex: number
}
const ArticlesPagination = ({ articlesArray, currentArticleIndex }: Props) => {
    const prevArticleIndex = currentArticleIndex + 1
    const nextArticleIndex = currentArticleIndex - 1

    return (
        <div className="articles-pagination-wrapper">
            {prevArticleIndex < articlesArray.length ? (
                <div className="prev-post post-pag">
                    <Typography component={'h5'} color={'text.secondary'}>
                        previous post
                    </Typography>
                    <Link
                        to={`/category/recipes/${articlesArray[prevArticleIndex].id}`}
                    >
                        <Typography
                            component={'span'}
                            variant={'h6'}
                            lineHeight={1.4}
                            color={'text.primary'}
                            sx={{
                                transition: 'all 0.3s',
                                '&:hover': { color: 'text.hint' },
                            }}
                        >
                            {articlesArray[prevArticleIndex].title}
                        </Typography>
                    </Link>
                </div>
            ) : null}
            {nextArticleIndex >= 0 ? (
                <div className="next-post post-pag">
                    <Typography component={'h5'} color={'text.secondary'}>
                        next post
                    </Typography>
                    <Link
                        to={`/category/recipes/${articlesArray[nextArticleIndex].id}`}
                    >
                        <Typography
                            component={'span'}
                            variant={'h6'}
                            lineHeight={1.4}
                            color={'text.primary'}
                            sx={{
                                transition: 'all 0.3s',
                                '&:hover': { color: 'text.hint' },
                            }}
                        >
                            {articlesArray[nextArticleIndex].title}
                        </Typography>
                    </Link>
                </div>
            ) : null}
        </div>
    )
}
export default ArticlesPagination
