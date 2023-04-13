import articlesArray, { articlesObject } from 'utils/articlesArray'
import { Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import ArticleCategoriesList from 'components/ArticleCategoriesList/ArticleCategoriesList'
import './ArticlePageContent.scss'
import ArticleHeadButton from 'components/ArticleHeadButton/ArticleHeadButton'
import { faArrowDown, faPrint } from '@fortawesome/free-solid-svg-icons'
import Quote from 'components/Quote/Quote'
import Recipe from 'components/Recipe/Recipe'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import ArticleMetaContent from 'components/ArticleMetaContent/ArticleMetaContent'
import AuthorBio from 'components/AuthorBio/AuthorBio'
import ArticlesPagination from 'components/ArticlesPagination/ArticlesPagination'
import LeaveComment from 'components/LeaveComment/LeaveComment'
import CommentsList from 'components/Comments/CommentsList'
import scrollWithOffset from 'utils/scrollWithOffset'
import printById from 'utils/printById'

type Props = {
    id: number
}

const ArticlePageContent = ({ id }: Props) => {
    const { title, img, category, tags, details, content } = articlesObject[id]
    const articleIndex = articlesArray.findIndex((article) => article.id == id)

    return (
        <article className="article-page-content">
            <div className="article-head">
                <ArticleCategoriesList
                    categoryList={category}
                    color={'text.hint'}
                />
                <Typography
                    component={'h1'}
                    align={'center'}
                    sx={{
                        typography: { xs: 'h4', sm: 'h3', md: 'h1' },
                        color: 'text.primary',
                    }}
                    className="title"
                >
                    {title}
                </Typography>
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
                        {details?.date.monthName} {details?.date.day},{' '}
                        {details?.date.year}
                    </Typography>
                </Typography>
            </div>
            <div className="article-head-buttons">
                <ArticleHeadButton
                    href="#recipe"
                    onClick={(e) => {
                        e.preventDefault()
                        const recipe = document.getElementById('recipe')
                        scrollWithOffset(recipe!)
                    }}
                    icon={faArrowDown}
                    text={'Jump to Recipe'}
                />
                <ArticleHeadButton
                    href="#"
                    onClick={(e) => {
                        e.preventDefault()
                        printById('recipe')
                    }}
                    icon={faPrint}
                    text={'Print Recipe'}
                />
            </div>
            <div className="media-content">
                <img
                    src={img}
                    alt="recipe-photo"
                    style={{ display: 'block', width: '100%' }}
                />
            </div>

            <div className="desc">
                <Typography component={'p'} variant="body1" mb={17}>
                    {content?.description.firstParagraph}
                </Typography>
                <Quote
                    quote={content?.description.quote.text!}
                    author={content?.description.quote.author!}
                />
                <Typography
                    component={'h3'}
                    color={'text.primary'}
                    mb={17}
                    mt={17}
                    sx={{
                        typography: { xs: 'h4', sm: 'h3' },
                    }}
                >
                    {content?.description.subtitle}
                </Typography>
                <Typography component={'p'} variant="body1" mb={17}>
                    {content?.description.secondParagraph}
                </Typography>
            </div>
            <div className="recipe" id="recipe">
                <Recipe id={id} />
            </div>
            <div className="tag-me">
                <div className="tag-me-icon">
                    <FontAwesomeIcon icon={faInstagram} />
                </div>
                <Typography
                    component={'h4'}
                    textAlign={'center'}
                    fontSize={20}
                    lineHeight={1.3}
                    color={'secondary.contrastText'}
                    textTransform={'uppercase'}
                    mb={6}
                >
                    Did You Make This Recipe?
                </Typography>
                <Typography
                    component={'p'}
                    textAlign={'center'}
                    fontSize={15}
                    lineHeight={1.5}
                    color={'secondary.contrastText'}
                >
                    How you went with my recipes? Tag me on Instagram at{' '}
                    <a
                        href="https://www.instagram.com/"
                        target="_blank"
                        style={{
                            color: 'inherit',
                            textDecoration: 'underline',
                        }}
                    >
                        @PenciDesign.
                    </a>
                </Typography>
            </div>
            <div className="article-tags">
                {tags?.map((item, index) => (
                    <Link key={index} to={`/tag/${item}`}>
                        <Typography
                            component={'h5'}
                            fontSize={11}
                            lineHeight={1.2}
                            textTransform={'uppercase'}
                            sx={{
                                padding: '6px 12px',
                                border: '1px solid #eeeeee',
                                transition: 'all 0.3s',
                                color: 'text.secondary',
                                '&:hover': {
                                    color: 'secondary.contrastText',
                                    backgroundColor: 'secondary.main',
                                    borderColor: 'secondary.main',
                                },
                            }}
                        >
                            {item}
                        </Typography>
                    </Link>
                ))}
            </div>
            <div className="meta-content">
                <ArticleMetaContent id={id} image={img} title={title} />
            </div>
            <div className="about-author">
                <AuthorBio author={details?.author!} />
            </div>
            <div className="articles-pagination">
                <ArticlesPagination
                    articlesArray={articlesArray}
                    currentArticleIndex={articleIndex}
                />
            </div>
            <div className="related-articles"></div>
            <div className="comments" id="comments">
                <CommentsList id={id} />
                <LeaveComment id={id} />
            </div>
        </article>
    )
}
export default ArticlePageContent
