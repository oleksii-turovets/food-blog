import { Typography, Grid } from '@mui/material'
import Button from '@mui/material/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconDefinition } from '@fortawesome/fontawesome-svg-core'
import './FooterSocialBtns.scss'

type Props = {
    iconName: IconDefinition
    href: string
    children: React.ReactNode
}

const FooterSocialBtn = ({ iconName, href, children }: Props) => {

    return (
        <Grid item>
            <Button href={href} target="_blank" className="footer-social-btn" sx={{minWidth:30}}>
                <Typography
                    variant="h6"
                    color={'primary.light'}
                    sx={{
                        '&:hover': {
                            color: 'secondary.main',
                        },
                    }}
                >
                    <FontAwesomeIcon
                        className="footer-social-btn-icon"
                        icon={iconName}
                    />
                    <span
                        className="footer-social-btn-text"
                    >
                        {children}
                    </span>
                </Typography>
            </Button>
        </Grid>
    )
}
export default FooterSocialBtn
