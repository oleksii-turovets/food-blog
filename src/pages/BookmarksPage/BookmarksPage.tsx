import { Container } from '@mui/material'
import BookmarksPageContent from 'components/BookmarksPageContent/BookmarksPageContent'
import PageContent from 'components/PageContent/PageContent'

type Props = {}
const BookmarkPage = (props: Props) => {
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
          <BookmarksPageContent/>
            </PageContent>
        </Container>
    )
}
export default BookmarkPage
