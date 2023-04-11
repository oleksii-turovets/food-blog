import { Rating } from '@mui/material'
import StarIcon from '@mui/icons-material/Star'
import { useState } from 'react'
import { Article } from 'utils/articlesArray'
import { useAppDispatch, useAppSelector } from 'redux/hooks'
import { addUserRating, changeUserRating } from 'redux/ratingReducer'

type Props = {
    id: Article['id']
}
const RecipeRateStars = ({ id }: Props) => {
    const [prevUserValue, setPrevUserValue] = useState<number | null>()

    const articleRatingValue = useAppSelector(
        (state) => state.articlesRating[id].ratingValue
    )
    const dispatch = useAppDispatch()

    return (
        <span
            className="rating-stars-box"
            style={{ position: 'relative', padding: '0 5px' }}
        >
            <Rating
                name="recipe-rating-controlled"
                value={articleRatingValue}
                precision={0.1}
                emptyIcon={<StarIcon fontSize="inherit" />}
                onChange={(event, userValue) => {
                    prevUserValue !== undefined
                        ? dispatch(
                              changeUserRating({ id, userValue, prevUserValue })
                          )
                        : dispatch(addUserRating({ id, userValue }))
                    setPrevUserValue(Math.ceil(userValue || 0))
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
