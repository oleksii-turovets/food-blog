import { articlesObject } from 'utils/articlesArray'
import { Typography } from '@mui/material'
import { HashLink } from 'react-router-hash-link'
import { Link } from 'react-router-dom'
import ArticleCategoriesList from 'components/ArticleCategoriesList/ArticleCategoriesList'

type Props = {
    id: number
}

const ArticlePageContent = ({ id }: Props) => {
    const { title, img, category, tags, details, content } = articlesObject[id]
    return (
        <article className="article">
            <div>{id}</div>
            <div className="head">
                <ArticleCategoriesList
                    categoryList={category}
                    color={'text.hint'}
                />
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
                            {details?.author}
                        </Typography>
                    </Link>
                </Typography>
            </div>
            <div className="desc"></div>
            <div className="recipe"></div>
            <div className="tag-me"></div>
            <div className="article-tags"></div>
            <div className="meta-content"></div>
            <div className="about-author"></div>
            <div className="articles-pagination"></div>
            <div className="related-articles"></div>
            <div className="comments" id="comments"></div>
        </article>
    )
}
export default ArticlePageContent
