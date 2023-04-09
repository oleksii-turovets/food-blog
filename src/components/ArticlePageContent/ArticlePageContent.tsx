import { articlesObject } from 'utils/articlesArray'
import { Typography } from '@mui/material'
import { HashLink } from 'react-router-hash-link'
import { Link } from 'react-router-dom'
import ArticleCategoriesList from 'components/ArticleCategoriesList/ArticleCategoriesList'
import './ArticlePageContent.scss'
import ArticleHeadButton from 'components/ArticleHeadButton/ArticleHeadButton'
import { faArrowDown, faPrint } from '@fortawesome/free-solid-svg-icons'
import Quote from 'components/Quote/Quote'
import Recipe from 'components/Recipe/Recipe'

type Props = {
    id: number
}

const ArticlePageContent = ({ id }: Props) => {
    const { title, img, category, tags, details, content } = articlesObject[id]
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
            <div
                className="article-head-buttons"
                style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '20px',
                    justifyContent: 'center',
                    marginBottom: '30px',
                }}
            >
                <ArticleHeadButton
                    href="#recipe"
                    onClick={() => console.log('click jump')}
                    icon={faArrowDown}
                    text={'Jump to Recipe'}
                />
                <ArticleHeadButton
                    href="#"
                    onClick={() => {
                        console.log('click print')
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
                <Recipe title={title} img={img} content={content} />
            </div>
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
