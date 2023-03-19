import articlesArray, { Article } from 'utils/articlesArray'
import SidebarRecentPost from './SidebarRecentPost'
import './SidebarRecentPosts.scss'

type Props = {}
const SidebarRecentPosts = (props: Props) => {
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
        <div className="sidebar-recent-posts-list">
            {sortedArticleArr
                .filter((item, index) => index <= 5)
                .map((article) => (
                    <SidebarRecentPost
                        id={article.id}
                        key={article.id}
                        image={article.img}
                        title={article.title}
                        month={article.details?.date.monthName}
                        day={article.details?.date.day}
                        year={article.details?.date.year}
                    />
                ))}
        </div>
    )
}
export default SidebarRecentPosts
