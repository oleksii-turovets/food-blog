import { Typography, Button } from '@mui/material'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRefresh } from '@fortawesome/free-solid-svg-icons'

type Props = {
    onClick: () => void
    disabled: boolean
    isLoadingArticles: boolean
}
const LoadMoreArticles = ({ onClick, disabled, isLoadingArticles }: Props) => {
    return (
        <div className="load-more" style={{ padding: '0 15px', width: '100%' }}>
            <Button
                variant="outlined"
                onClick={onClick}
                disabled={disabled}
                sx={{
                    display: 'block',
                    padding: '11px 10px',
                    maxWidth: '400px',
                    width: '100%',
                    margin: '0 auto',
                    border: '1px solid #eeeeee',
                    trasition: 'all .25s',
                    color: 'primary.light',
                    background: 'none',
                    '&:hover': {
                        color: 'secondary.main',
                        borderColor: 'secondary.main',
                        background: 'none',
                    },
                }}
            >
                {disabled ? (
                    <Typography component={'div'} variant="h6" fontSize={12}>
                        Sorry, no more posts
                    </Typography>
                ) : (
                    <Typography component={'div'} variant="h6" fontSize={12}>
                        Load more posts
                        <FontAwesomeIcon
                            icon={faRefresh}
                            style={{ marginLeft: '15px' }}
                            className={
                                isLoadingArticles
                                    ? 'loading-circle-active'
                                    : 'loading-circle'
                            }
                        />
                    </Typography>
                )}
            </Button>
        </div>
    )
}
export default LoadMoreArticles
