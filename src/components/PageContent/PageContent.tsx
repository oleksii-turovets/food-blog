import { Grid } from '@mui/material'
import Sidebar from 'components/Sidebar/Sidebar'
import StickyBox from 'react-sticky-box'

type Props = {
    children?: React.ReactNode
}

const PageContent = ({children}: Props) => {
    return (
        <Grid
            container
            columnSpacing={0}
            rowGap={80}
            paddingTop={{ xs: 50, sm: 60 }}
            paddingBottom={{ xs: 80, md: 70 }}
        >
            <Grid item xs={12} md={8}>
                <StickyBox offsetTop={80} offsetBottom={20}>
                    {children}
                </StickyBox>
            </Grid>
            <Grid
                item
                xs={12}
                md={4}
                paddingLeft={{ xs: 0, md: 50 }}
                sx={{ position: 'relative' }}
            >
                <StickyBox offsetTop={80} offsetBottom={20}>
                    <Sidebar />
                </StickyBox>
            </Grid>
        </Grid>
    )
}
export default PageContent
