import { Grid } from '@mui/material'
import MainContent from 'components/MainContent/MainContent'
import Sidebar from 'components/Sidebar/Sidebar'

type Props = {}

const PageContent = (props: Props) => {
    return (
        <Grid
            container
            columnSpacing={0}
            paddingTop={{ xs: 50, sm: 60 }}
            paddingBottom={{ xs: 80, md: 70 }}
        >
            <Grid item xs={12} md={8}>
                <MainContent/>
            </Grid>
            <Grid item xs={12} md={4} paddingLeft={{xs: 0, md: 50}}>
                <Sidebar/>
            </Grid>
        </Grid>
    )
}
export default PageContent
