import { IconButton, Typography, Grid } from '@mui/material'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconDefinition } from '@fortawesome/fontawesome-svg-core'
import { OverridableStringUnion } from '@mui/types'
import { Variant } from '@mui/material/styles/createTypography'
import { TypographyPropsVariantOverrides } from '@mui/material/Typography/Typography'

type Props = {
    iconName: IconDefinition
    href: string
    variant?: OverridableStringUnion<
        Variant | 'inherit',
        TypographyPropsVariantOverrides
    >
}

const SidebarSocialBtn = ({ iconName, href, variant }: Props) => {
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
                    variant={variant === undefined ? 'h3' : variant}
                    color={'text.primary'}
                    sx={{
                        transition: 'all 0.3s',
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
