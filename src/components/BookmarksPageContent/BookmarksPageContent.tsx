import articlesArray from 'utils/articlesArray'
import { useState } from 'react'
import ArticlesListItem from 'components/ArticlesList/ArticlesListItem'
import { Typography } from '@mui/material'
import LoadMoreArticles from 'components/LoadMoreArticles/LoadMoreArticles'
import { useAppSelector } from 'redux/hooks'
import { Link } from 'react-router-dom'

type Props = {}

type NumberOfArticlesType = {
    shownArticlesNumber: number
}

const BookmarksPageContent = (props: Props) => {
    const [numberOfArticles, setNumberOfArticles] =
        useState<NumberOfArticlesType>({ shownArticlesNumber: 8 })

    const [isLoadingArticles, setIsLoadingArticles] = useState<boolean>(false)

    const changeNumberOfArticles = (num: number) => {
        setIsLoadingArticles(true)
        setTimeout(() => {
            num >= filteredArray.length
                ? setNumberOfArticles(() => ({
                      shownArticlesNumber: filteredArray.length,
                  }))
                : setNumberOfArticles(() => ({ shownArticlesNumber: num }))
            setIsLoadingArticles(false)
        }, 1000)
    }
    const articleLike = useAppSelector((state) => state.articleLike)

    const filteredArray = articlesArray.filter(
        (item) => articleLike[item.id].isLiked
    )

    return (
        <div
            className="category-page-content"
            style={{
                display: 'flex',
                flexWrap: 'wrap',
                rowGap: '50px',
                marginLeft: '-15px',
                marginRight: '-15px',
            }}
        >
            <Typography
                component={'h1'}
                align={'center'}
                sx={{
                    typography: { xs: 'h4', sm: 'h3', md: 'h1' },
                    color: 'text.primary',
                    marginBottom: '-20px',
                    width: '100%',
                }}
            >
                Category:{' '}
                <Typography
                    component={'span'}
                    variant="inherit"
                    color={'text.hint'}
                >
                    Bookmarks
                </Typography>
            </Typography>
            {filteredArray.length === 0 ? (
                <Typography
                    component={'p'}
                    align={'center'}
                    variant="h5"
                    sx={{
                        color: 'text.primary',
                        width: '100%',
                    }}
                >
                    Your bookmarks list is empty. In order to see posts here
                    like them on{' '}
                    <Link to={'/category/recipes'}>
                        <Typography
                            component={'span'}
                            variant="inherit"
                            color={'text.hint'}
                            sx={{
                                '&:hover': {
                                    textDecoration: 'underline',
                                }
                            }}
                        >
                            recipes page.
                        </Typography>
                    </Link>
                </Typography>
            ) : (
                <>
                    {filteredArray
                        .filter(
                            (item, index) =>
                                index <=
                                numberOfArticles.shownArticlesNumber - 1
                        )
                        .map((article) => (
                            <ArticlesListItem
                                key={article.id}
                                id={article.id}
                                image={article.img}
                                title={article.title}
                                categoryList={article.category}
                                date={`${article.details?.date.monthName} ${article.details?.date.day}, ${article.details?.date.year}`}
                                author={article.details?.author}
                                desc={
                                    article.content?.description.firstParagraph
                                }
                            />
                        ))}
                    <LoadMoreArticles
                        onClick={() =>
                            changeNumberOfArticles(
                                numberOfArticles.shownArticlesNumber + 6
                            )
                        }
                        disabled={
                            numberOfArticles.shownArticlesNumber >=
                            filteredArray.length
                        }
                        isLoadingArticles={isLoadingArticles}
                    />
                </>
            )}
        </div>
    )
}
export default BookmarksPageContent
