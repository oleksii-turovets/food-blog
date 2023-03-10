import { IconButton } from '@mui/material'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconDefinition } from '@fortawesome/fontawesome-svg-core'
import './TopSocialBtns.scss'

type Props = {
    iconName: IconDefinition
    href: string
}

const TopSocialBtn = ({ iconName, href }: Props) => {
    return (
        <IconButton
            href={href}
            target="_blank"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{
                m: 0,
                mr: 0,
                p: 0,
                height: 1,
                display: { xs: 'none', sm: 'flex' },
                justifyContent: 'center',
                alignItems: 'center',
                color: 'primary.light',
                '&:hover': {
                    color: 'secondary.main',
                },
            }}
        >
            <FontAwesomeIcon className="top-social-btn-icon" icon={iconName} />
        </IconButton>
    )
}
export default TopSocialBtn
