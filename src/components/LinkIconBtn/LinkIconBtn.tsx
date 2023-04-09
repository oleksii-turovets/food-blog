import { IconButton, Typography } from '@mui/material'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconDefinition } from '@fortawesome/fontawesome-svg-core'
import { type } from 'os'
import { faEarthAmerica } from '@fortawesome/free-solid-svg-icons'
import {
    faFacebookF,
    faTwitter,
    faInstagram,
    faPinterest,
    faYoutube,
} from '@fortawesome/free-brands-svg-icons'
import { faCircleQuestion } from '@fortawesome/free-regular-svg-icons'

type Props = {
    href: string
    type:
        | 'website'
        | 'facebook'
        | 'twitter'
        | 'instagram'
        | 'pinterest'
        | 'youtube'
        | string
        | undefined
    fontSize: number
}

const LinkIconBtn = ({ href, type, fontSize }: Props) => {
    return (
        <IconButton
            href={href}
            target="_blank"
            className="link-btn"
            sx={{ minWidth: 5, padding: 0 }}
            disableRipple={true}
        >
            <Typography
                component="div"
                color={'text.primary'}
                fontSize={fontSize}
                lineHeight={1}
                sx={{
                    transition: 'all 0.3s',
                    '&:hover': {
                        color: 'text.hint',
                    },
                }}
            >
                <FontAwesomeIcon
                    className="link-btn-icon"
                    icon={
                        type === 'website'
                            ? faEarthAmerica
                            : type === 'facebook'
                            ? faFacebookF
                            : type === 'twitter'
                            ? faTwitter
                            : type === 'instagram'
                            ? faInstagram
                            : type === 'pinterest'
                            ? faPinterest
                            : type === 'youtube'
                            ? faYoutube
                            : faCircleQuestion
                    }
                />
            </Typography>
        </IconButton>
    )
}
export default LinkIconBtn
