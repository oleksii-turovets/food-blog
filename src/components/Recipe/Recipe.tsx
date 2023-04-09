import { Article } from 'utils/articlesArray'
import { Typography } from '@mui/material'
import './Recipe.scss'
import RecipeProperty from 'components/RecipeProperty/RecipeProperty'
import { faFireBurner, faUtensils } from '@fortawesome/free-solid-svg-icons'
import { faClock } from '@fortawesome/free-regular-svg-icons'
import RecipeRateStars from 'components/RecipeRateStars/RecipeRateStars'
import { useState } from 'react'

type Props = {
    title: Article['title']
    img: Article['img']
    content: Article['content']
}
const Recipe = ({ title, img, content }: Props) => {
    const [rate, setRate] = useState<number | null>(
        content?.general.rating.value!
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
                            Rating: {content?.general.rating.value}/5{' '}
                            <RecipeRateStars
                                rate={rate}
                                votesNumber={
                                    content?.general.rating.votesNumber!
                                }
                                setRate={setRate}
                            />
                            ( {content?.general.rating.votesNumber} votes )
                        </Typography>
                    </div>
                </div>
            </div>
            <div className="ingredients">Ingredients</div>
            <div className="instructions">Instructions</div>
        </div>
    )
}
export default Recipe
