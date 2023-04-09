import { Rating } from '@mui/material'
import StarIcon from '@mui/icons-material/Star'
import { Dispatch, SetStateAction } from 'react'

type Props = {
    rate: number | null
    votesNumber: number
    setRate: Dispatch<SetStateAction<number | null>>
}
const RecipeRateStars = ({ rate, votesNumber, setRate }: Props) => {
    return (
        <span className="rating-stars-box" style={{ position: 'relative', padding: '0 5px' }}>
            <Rating
                name="recipe-rating-controlled"
                value={rate}
                precision={0.1}
                emptyIcon={<StarIcon fontSize="inherit" />}
                onChange={(event, userValue) => {
                    setRate(
                        ((rate === null ? 0 : rate) * votesNumber +
                            (userValue === null ? 0 : Math.ceil(userValue))) /
                            (votesNumber + 1)
                    )
                }}
                sx={{
                    position: 'relative',
                    top: '1.6px',
                    fontSize: 'inherit',
                    lineHeight: 'inherit',
                    color: '#F39C12',
                    '& .MuiRating-iconActive': {
                        color: '#F39C12',
                        '& .MuiRating-iconEmpty': {
                            color: '#F39C12',
                        },
                    },
                }}
            />
        </span>
    )
}
export default RecipeRateStars
