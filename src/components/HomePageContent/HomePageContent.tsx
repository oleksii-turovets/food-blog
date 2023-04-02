import articlesArray, { Article } from 'utils/articlesArray'
import { useState } from 'react'
import ArticlesListItem from 'components/ArticlesList/ArticlesListItem'
import ArticlesListItemExtended from 'components/ArticlesList/ArticlesListItemExtended'
import { Typography, Button } from '@mui/material'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRefresh } from '@fortawesome/free-solid-svg-icons'

type Props = {}

type NumberOfArticlesType = {
    shownArticlesNumber: number
}

const HomePageContent = (props: Props) => {
    const [numberOfArticles, setNumberOfArticles] =
        useState<NumberOfArticlesType>({ shownArticlesNumber: 9 })

    const [isLoadingArticles, setIsLoadingArticles] = useState<boolean>(false)

    const changeNumberOfArticles = (num: number) => {
        setIsLoadingArticles(true)
        setTimeout(() => {
            num >= sortedArticleArr.length
                ? setNumberOfArticles(() => ({
                      shownArticlesNumber: sortedArticleArr.length,
                  }))
                : setNumberOfArticles(() => ({ shownArticlesNumber: num }))
            setIsLoadingArticles(false)
        }, 1000)
    }

    const sortedArticleArr: Article[] = JSON.parse(
        JSON.stringify(articlesArray)
    )

    sortedArticleArr.sort((a, b) =>
        b.details?.date.year! !== a.details?.date.year!
            ? b.details?.date.year! - a.details?.date.year!
            : b.details?.date.monthNumber! !== a.details?.date.monthNumber!
            ? b.details?.date.monthNumber! - a.details?.date.monthNumber!
            : b.details?.date.day! - a.details?.date.day!
    )

    const firstArticle = sortedArticleArr[0]

    return (
        <div
            className="home-page-content"
            style={{
                display: 'flex',
                flexWrap: 'wrap',
                rowGap: '50px',
                marginLeft: '-15px',
                marginRight: '-15px',
            }}
        >
            <ArticlesListItemExtended
                key={firstArticle.id}
                id={firstArticle.id}
                image={firstArticle.img}
                title={firstArticle.title}
                categoryList={firstArticle.category}
                date={`${firstArticle.details?.date.monthName} ${firstArticle.details?.date.day}, ${firstArticle.details?.date.year}`}
                author={firstArticle.details?.author}
                desc={firstArticle.content?.description.firstParagraph}
            />
            {sortedArticleArr
                .filter(
                    (item, index) =>
                        index <= numberOfArticles.shownArticlesNumber - 1 &&
                        index !== 0
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
                        desc={article.content?.description.firstParagraph}
                    />
                ))}
            <div
                className="load-more"
                style={{ padding: '0 15px', width: '100%' }}
            >
                <Button
                    variant="outlined"
                    onClick={() =>
                        changeNumberOfArticles(
                            numberOfArticles.shownArticlesNumber + 6
                        )
                    }
                    disabled={
                        numberOfArticles.shownArticlesNumber >=
                        sortedArticleArr.length
                    }
                    sx={{
                        display: 'block',
                        padding: '11px 10px',
                        maxWidth: '400px',
                        width: '100%',
                        margin: '0 auto',
                        border: '1px solid #eeeeee',
                        trasition: 'all .25s',
                        color: 'primary.light',
                        background: 'none',
                        '&:hover': {
                            color: 'secondary.main',
                            borderColor: 'secondary.main',
                            background: 'none',
                        },
                    }}
                >
                    {numberOfArticles.shownArticlesNumber >=
                    sortedArticleArr.length ? (
                        <Typography
                            component={'div'}
                            variant="h6"
                            fontSize={12}
                        >
                            Sorry, no more posts
                        </Typography>
                    ) : (
                        <Typography
                            component={'div'}
                            variant="h6"
                            fontSize={12}
                        >
                            Load more posts
                            <FontAwesomeIcon
                                icon={faRefresh}
                                style={{ marginLeft: '15px' }}
                                className={
                                    isLoadingArticles
                                        ? 'loading-circle-active'
                                        : 'loading-circle'
                                }
                            />
                        </Typography>
                    )}
                </Button>
            </div>
        </div>
    )
}
export default HomePageContent
