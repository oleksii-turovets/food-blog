import { Grid } from '@mui/material'
import Sidebar from 'components/Sidebar/Sidebar'

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
                {children}
            </Grid>
            <Grid item xs={12} md={4} paddingLeft={{xs: 0, md: 50}} sx={{position: 'relative'}}>
                <Sidebar/>
            </Grid>
        </Grid>
    )
}
export default PageContent
