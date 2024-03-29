import { IconButton } from '@mui/material'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconDefinition } from '@fortawesome/fontawesome-svg-core'
import './ArticleListActionBtn.scss'

type Props = {
    href: string
    icon: IconDefinition
    children: React.ReactNode
    onClick?: React.MouseEventHandler<HTMLAnchorElement>
    color?: string
}
const ArticleListActionBtn = ({ href, icon, children, onClick, color }: Props) => {
    return (
        <IconButton
            className="action-links-btn"
            href={href}
            onClick={onClick}
            target="_blank"
            color="inherit"
            sx={{
                padding: 0,
                height: 14,
                width: 14,
                color: `${color === undefined ? 'text.primary' : color}`,
                '&:hover': {
                    color: 'text.hint',
                    background: 'none',
                },
            }}
        >
            <FontAwesomeIcon icon={icon} style={{ height: '100%' }} />
            <div className="link-label">{children}</div>
        </IconButton>
    )
}
export default ArticleListActionBtn
