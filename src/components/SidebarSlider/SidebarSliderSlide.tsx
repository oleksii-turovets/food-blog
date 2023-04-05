import { Typography } from "@mui/material"
import { Link } from "react-router-dom"

type Props = {
    id?: number
    image?: string
    title?: string
}

const SidebarSliderSlide = ({ id, image, title }: Props) => {
    return (
        <div className="featured-post">
            <Link to={`/category/recipes/${id}`} className="featured-post-link">
                <img src={image} alt="recipe-photo" style={{ width: '100%' }} />
                <Typography
                    variant={'h4'}
                    component={'h5'}
                    textTransform={'capitalize'}
                    align={'center'}
                    sx={{
                        color: 'primary.contrastText',
                    }}
                    className="title"
                >
                    {title}
                </Typography>
            </Link>
        </div>
    )
}

export default SidebarSliderSlide
