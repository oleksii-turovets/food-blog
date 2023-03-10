import { Grid } from '@mui/material'
import {
    faFacebookF,
    faTwitter,
    faInstagram,
    faPinterest,
    faYoutube,
} from '@fortawesome/free-brands-svg-icons'
import FooterSocialBtn from './FooterSocialBtn'

type Props = {}

const FooterSocialBtns = (props: Props) => {
    return (
        <Grid
            container
            justifyContent="center"
            columnSpacing={{ xs: 10, sm: 35 }}
            paddingTop={30}
            paddingBottom={30}
        >
            <FooterSocialBtn iconName={faFacebookF} href="/">
                Facebook
            </FooterSocialBtn>
            <FooterSocialBtn iconName={faTwitter} href="/">
                Twitter
            </FooterSocialBtn>
            <FooterSocialBtn iconName={faInstagram} href="/">
                Instagram
            </FooterSocialBtn>
            <FooterSocialBtn iconName={faPinterest} href="/">
                Pinterest
            </FooterSocialBtn>
            <FooterSocialBtn iconName={faYoutube} href="/">
                Youtube
            </FooterSocialBtn>
        </Grid>
    )
}
export default FooterSocialBtns
