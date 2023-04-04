import { Typography } from '@mui/material'
import { Link } from 'react-router-dom'

type Props = {
    id?: number
    image?: string
    title?: string
    month?: string
    day?: number
    year?: number
}
const SidebarRecentPost = ({ id, image, title, month, day, year }: Props) => {
    return (
        <div className="post">
            <Link to={`/category/recipes/${id}`} className="post-link-img">
                <img src={image} alt="recipe-photo" style={{ width: '100%' }} />
            </Link>
            <Link to={`/category/recipes/${id}`} className="post-link-title">
                <Typography
                    variant={'h6'}
                    component={'h5'}
                    textTransform={'capitalize'}
                    sx={{
                        color: 'text.primary',
                        '&:hover': {
                            color: 'text.hint',
                        },
                    }}
                >
                    {title}
                </Typography>
            </Link>
            <Typography component={'p'} fontSize={13} color={'text.secondary'}>
                {month} {day}, {year}
            </Typography>
        </div>
    )
}
export default SidebarRecentPost
