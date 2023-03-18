import { Grid } from '@mui/material'
import {
    faFacebookF,
    faTwitter,
    faInstagram,
    faPinterest,
    faYoutube,
} from '@fortawesome/free-brands-svg-icons'
import SidebarSocialBtn from './SidebarSocialBtn'

type Props = {}

const SidebarSocialBtns = (props: Props) => {
    return (
        <Grid
            container
            justifyContent="center"
            columnSpacing={15}

        >
            <SidebarSocialBtn iconName={faFacebookF} href="/"/>
            <SidebarSocialBtn iconName={faTwitter} href="/"/>
            <SidebarSocialBtn iconName={faInstagram} href="/"/>
            <SidebarSocialBtn iconName={faPinterest} href="/"/>
            <SidebarSocialBtn iconName={faYoutube} href="/"/>
        </Grid>
    )
}
export default SidebarSocialBtns
