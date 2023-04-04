import { Container } from '@mui/material'
import ArticlePageContent from 'components/ArticlePageContent/ArticlePageContent'
import CategoryPageContent from 'components/CategoryPageContent/CategoryPageContent'
import PageContent from 'components/PageContent/PageContent'
import { useParams } from 'react-router-dom'

type Props = {}
const ArticlePage = (props: Props) => {
    const { id } = useParams()

    return (
        <Container
            component="div"
            sx={{
                maxWidth: { xs: 'none', md: 940, lg: 1170 },
                height: 1,
                paddingLeft: { xs: 15, md: 0 },
                paddingRight: { xs: 15, md: 0 },
            }}
            disableGutters={true}
        >
            <PageContent>
                <ArticlePageContent id={parseInt(id!)} />
            </PageContent>
        </Container>
    )
}
export default ArticlePage
