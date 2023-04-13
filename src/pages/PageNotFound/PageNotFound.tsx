import { Container, Typography } from '@mui/material'
import { Link } from 'react-router-dom'

type Props = {}
const PageNotFound = (props: Props) => {
    return (
        <Container
            component="div"
            sx={{
                maxWidth: { xs: 'none', md: 940, lg: 1170 },
                height: 1,
                paddingLeft: { xs: 15, md: 0 },
                paddingRight: { xs: 15, md: 0 },
            }}
            disableGutters={true}
        >
            <div className="page-not-found" style={{ margin: '150px 0 115px' }}>
                <Typography
                    component={'h1'}
                    align={'center'}
                    className="error-img"
                    sx={{
                        paddingBottom: '40px',
                        marginBottom: '30px',
                        position: 'relative',
                        '&::after': {
                            content: '""',
                            position: 'absolute',
                            width: '60px',
                            height: '1px',
                            backgroundColor: 'secondary.main',
                            bottom: '0',
                            left: '50%',
                            marginLeft: '-30px',
                        },
                    }}
                >
                    <img src="/images/404.png" />
                </Typography>
                <Typography
                    variant={'body1'}
                    component={'p'}
                    align={'center'}
                    mb={30}
                    className="error-desc"
                >
                    OOPS! Page you're looking for doesn't exist.
                </Typography>
                <Typography
                    component={'div'}
                    align={'center'}
                    className="back-to-home"
                >
                    <Link to={'/'}>
                        <Typography
                            variant={'button'}
                            component={'span'}
                            align={'center'}
                            color={'text.hint'}
                            sx={{textDecoration: 'underline'}}
                        >
                            Back to home page
                        </Typography>
                    </Link>
                </Typography>
            </div>
        </Container>
    )
}
export default PageNotFound
