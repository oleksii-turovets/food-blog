import articlesArray, { Article } from 'utils/articlesArray'
import { useState } from 'react'

type Props = {}

type NumberOfArticlesType = {
    shownArticlesNumber: number
}

const HomePageContent = (props: Props) => {

    const [numberOfArticles, setNumberOfArticles] =
        useState<NumberOfArticlesType>({shownArticlesNumber: 9})

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

    return (
        <div className="home-page-content">
            {sortedArticleArr
                .filter(
                    (item, index) =>
                        index <= numberOfArticles.shownArticlesNumber - 1
                )
                .map((article) => (
                    <div>
                        {' '}
                        {article.id}
                        {article.img}
                        {article.title}
                    </div>
                ))}
        </div>
    )
}
export default HomePageContent
