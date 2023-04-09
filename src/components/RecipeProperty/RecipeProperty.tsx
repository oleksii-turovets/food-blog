import { IconDefinition } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Typography } from '@mui/material'

type Props = {
    icon: IconDefinition
    propName: string
    propValue: string | number
}
const RecipeProperty = ({icon, propName, propValue}: Props) => {
  return (
      <div>
          <Typography
              component={'div'}
              color={'text.secondary'}
              fontSize={15}
              lineHeight={1.5}
          >
              <FontAwesomeIcon icon={icon} style={{marginRight: '6px'}}/>
              {propName} : {propValue}
          </Typography>
      </div>
  )
}
export default RecipeProperty