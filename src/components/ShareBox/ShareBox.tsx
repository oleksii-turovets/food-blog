import { Typography } from '@mui/material'
import { faEnvelope, faShareNodes } from '@fortawesome/free-solid-svg-icons'
import {
    faFacebookF,
    faTwitter,
    faPinterest,
} from '@fortawesome/free-brands-svg-icons'
import ArticleListActionBtn from 'components/ArticleListActionBtn/ArticleListActionBtn'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

type Props = {
    title: string
    image: string
}
const ShareBox = ({title, image}: Props) => {
    return (
        <div
            className="share-box"
            style={{
                display: 'flex',
                gap: '10px',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '16px 0',
                borderTop: '1px solid #eeeeee',
                borderBottom: '1px solid #eeeeee',
                marginTop: '50px',
            }}
        >
            <Typography
                component={'div'}
                variant="h6"
                fontSize={12}
                lineHeight={1}
                display={'flex'}
                alignItems={'center'}
            >
                <Typography
                    component={'span'}
                    fontSize={15}
                    lineHeight={1}
                    marginRight={8}
                >
                    <FontAwesomeIcon icon={faShareNodes} />
                </Typography>
                <Typography component={'span'} variant="inherit">
                    Share
                </Typography>
            </Typography>

            <div
                className="share-links-wrap"
                style={{ display: 'flex', gap: '10px' }}
            >
                <ArticleListActionBtn
                    href={`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`}
                    icon={faFacebookF}
                >
                    Facebook
                </ArticleListActionBtn>
                <ArticleListActionBtn
                    href={`https://twitter.com/intent/tweet?text=Check%20out%20this%20article:%20${window.location.href}`}
                    icon={faTwitter}
                >
                    Twitter
                </ArticleListActionBtn>
                <ArticleListActionBtn
                    href={`https://www.pinterest.com/pin/create/button/?url=${encodeURI(
                        `${window.location.href}`
                    )}&media=${encodeURI(
                        `${window.location.origin}${image}`
                    )}&description=${encodeURI(`${title}`)}`}
                    icon={faPinterest}
                >
                    Pinterest
                </ArticleListActionBtn>
                <ArticleListActionBtn
                    href={`mailto:?subject=${encodeURI(`${title}`)}&BODY=${
                        window.location.href
                    }`}
                    icon={faEnvelope}
                >
                    Email
                </ArticleListActionBtn>
            </div>
        </div>
    )
}
export default ShareBox
