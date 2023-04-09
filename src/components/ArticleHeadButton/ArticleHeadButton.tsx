import { IconDefinition} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button, Typography } from '@mui/material'

type Props = {
    icon: IconDefinition
    text: string
    href: string
    onClick?: React.MouseEventHandler<HTMLAnchorElement>
}
const ArticleHeadButton = ({icon, text, href, onClick}: Props) => {
    return (
        <div>
            <Button
                type='button'
                href={href}
                onClick={onClick}
                variant="contained"
                sx={{
                    padding: '10px 20px',
                    color: 'primary.contrastText',
                    backgroundColor: 'primary.main',
                    '&:hover': {
                        backgroundColor: 'secondary.main',
                    },
                }}
            >
                <FontAwesomeIcon icon={icon} style={{ marginRight: '6px' }} />
                <Typography
                    component={'div'}
                    variant="body2"
                    textTransform={'none'}
                    lineHeight={1.2}
                >
                    {text}
                </Typography>
            </Button>
        </div>
    )
}
export default ArticleHeadButton
