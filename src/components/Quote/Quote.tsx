import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Typography } from '@mui/material'
import './Quote.scss'

type Props = {
    quote: string
    author: string
}
const Quote = ({ quote, author }: Props) => {
    return (
        <div className="quote">
            <FontAwesomeIcon icon={faQuoteLeft} className="quote-icon" />
            <Typography
                component={'p'}
                variant="body1"
                color={'text.secondary'}
                fontStyle={'italic'}
                lineHeight={1.7}
                className="quote-text"
            >
                {quote}
            </Typography>
            <Typography
                component={'p'}
                variant="h6"
                color={'text.hint'}
                fontSize={12}
                lineHeight={1.7}
                className="quote-author"
            >
                {author}
            </Typography>
        </div>
    )
}
export default Quote
