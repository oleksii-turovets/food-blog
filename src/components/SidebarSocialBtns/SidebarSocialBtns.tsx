import { Grid } from '@mui/material'
import {
    faFacebookF,
    faTwitter,
    faInstagram,
    faPinterest,
    faYoutube,
} from '@fortawesome/free-brands-svg-icons'
import SidebarSocialBtn from './SidebarSocialBtn'
import { OverridableStringUnion } from '@mui/types'
import { Variant } from '@mui/material/styles/createTypography'
import { TypographyPropsVariantOverrides } from '@mui/material/Typography/Typography'

type Props = {
    variant?: OverridableStringUnion<
        Variant | 'inherit',
        TypographyPropsVariantOverrides
    >
}

const SidebarSocialBtns = ({ variant }: Props) => {
    return (
        <Grid container justifyContent="center" columnSpacing={15}>
            <SidebarSocialBtn
                iconName={faFacebookF}
                href="/"
                variant={variant}
            />
            <SidebarSocialBtn iconName={faTwitter} href="/" variant={variant} />
            <SidebarSocialBtn
                iconName={faInstagram}
                href="/"
                variant={variant}
            />
            <SidebarSocialBtn
                iconName={faPinterest}
                href="/"
                variant={variant}
            />
            <SidebarSocialBtn iconName={faYoutube} href="/" variant={variant} />
        </Grid>
    )
}
export default SidebarSocialBtns
