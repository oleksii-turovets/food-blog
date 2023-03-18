import { IconButton, Typography, Grid } from '@mui/material'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconDefinition } from '@fortawesome/fontawesome-svg-core'

type Props = {
    iconName: IconDefinition
    href: string
}

const SidebarSocialBtn = ({ iconName, href }: Props) => {
    return (
        <Grid item>
            <IconButton
                href={href}
                target="_blank"
                className="sidebar-social-btn"
                sx={{ minWidth: 25, padding: 0 }}
                disableRipple={true}
            >
                <Typography
                    component="div"
                    variant="h3"
                    color={'text.primary'}
                    sx={{
                        '&:hover': {
                            color: 'secondary.main',
                        },
                    }}
                >
                    <FontAwesomeIcon
                        className="sidebar-social-btn-icon"
                        icon={iconName}
                    />
                </Typography>
            </IconButton>
        </Grid>
    )
}
export default SidebarSocialBtn
