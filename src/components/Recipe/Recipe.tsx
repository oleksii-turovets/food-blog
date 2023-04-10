import { Article, articlesObject } from 'utils/articlesArray'
import { Typography } from '@mui/material'
import './Recipe.scss'
import RecipeProperty from 'components/RecipeProperty/RecipeProperty'
import { faFireBurner, faUtensils } from '@fortawesome/free-solid-svg-icons'
import { faClock } from '@fortawesome/free-regular-svg-icons'
import RecipeRateStars from 'components/RecipeRateStars/RecipeRateStars'
import { useAppSelector } from 'redux/hooks'

type Props = {
    id: Article['id']
}
const Recipe = ({ id }: Props) => {
    const { title, img, content } = articlesObject[id]

    const articleRatingValue = useAppSelector(
        (state) => state.articlesRating[id].ratingValue
    )
    const articleRatingVotesNumber = useAppSelector(
        (state) => state.articlesRating[id].votesNumber
    )

    return (
        <div className="recipe-content">
            <div className="recipe-head">
                <div className="img">
                    <img
                        src={img}
                        alt="recipe-thumb"
                        style={{ display: 'block', width: '100%' }}
                    />
                </div>
                <div className="head-text">
                    <Typography
                        component={'h2'}
                        variant="h3"
                        color={'text.primary'}
                        textTransform={'capitalize'}
                        className="title"
                    >
                        {title}
                    </Typography>
                    <button type="button" className="btn-print">
                        Print
                    </button>
                    <div
                        className="recipe-properties"
                        style={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            rowGap: '5px',
                            columnGap: '18px',
                        }}
                    >
                        <RecipeProperty
                            icon={faUtensils}
                            propName={'Serves'}
                            propValue={content?.general.serves!}
                        />
                        <RecipeProperty
                            icon={faClock}
                            propName={'Prep Time'}
                            propValue={content?.general.prepTime!}
                        />

                        <RecipeProperty
                            icon={faFireBurner}
                            propName={'Cooking Time'}
                            propValue={content?.general.cookTime!}
                        />
                    </div>
                    <div className="recipe-rate">
                        <Typography
                            component={'div'}
                            color={'text.secondary'}
                            fontSize={15}
                            lineHeight={1.5}
                        >
                            Rating: {articleRatingValue}/5{' '}
                            <RecipeRateStars id={id} />({' '}
                            {articleRatingVotesNumber} votes )
                        </Typography>
                    </div>
                </div>
            </div>
            <div className="ingredients">
                <Typography
                    component={'h3'}
                    variant="h5"
                    color={'text.secondary'}
                    mb={18}
                >
                    Ingredients
                </Typography>
                <Typography
                    component={'ul'}
                    variant="body1"
                    color={'text.primary'}
                    paddingLeft={18}
                    className="ingredients-list"
                >
                    {content?.ingredients.map((item, index) => (
                        <Typography
                            key={index}
                            component={'li'}
                            variant="inherit"
                            color={'inherit'}
                        >
                            {item}
                        </Typography>
                    ))}
                </Typography>
            </div>
            <div className="instructions">
                <Typography
                    component={'h3'}
                    variant="h5"
                    color={'text.secondary'}
                    mb={18}
                >
                    Instructions
                </Typography>
                <Typography
                    component={'ol'}
                    variant="body1"
                    color={'text.primary'}
                    paddingLeft={18}
                    className="instructions-list"
                >
                    {content?.instructions.map((item, index) => (
                        <Typography
                            key={index}
                            component={'li'}
                            variant="inherit"
                            color={'inherit'}
                        >
                            {item}
                        </Typography>
                    ))}
                </Typography>
            </div>
        </div>
    )
}
export default Recipe
