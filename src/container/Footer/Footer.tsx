import { faAngleUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Container, Typography, Button } from '@mui/material'
import useTheme from '@mui/material/styles/useTheme'
import FooterInstaPosts from 'components/FooterInstaPosts/FooterInstaPosts'
import FooterSocialBtns from 'components/FooterSocialBtns/FooterSocialBtns'

type Props = {}
const Footer = (props: Props) => {
    const theme = useTheme()
    return (
        <footer style={{ backgroundColor: theme.palette.primary.main }}>
            <FooterInstaPosts />
            <Container
                component="div"
                sx={{
                    maxWidth: { xs: 'none', md: 940, lg: 1170 },
                    paddingRight: { xs: 15, md: 0 },
                    paddingLeft: { xs: 15, md: 0 },
                    position: 'relative',
                }}
                disableGutters={true}
            >
                <FooterSocialBtns />
                <Typography
                    component="div"
                    variant="caption"
                    align="center"
                    color="primary.light"
                    paddingTop={20}
                    paddingBottom={60}
                    borderTop={1}
                    borderColor={'#212121'}
                    sx={{ fontSize: { xs: 12, sm: 14 } }}
                >
                    @2023 - All Right Reserved. Designed and Developed by{' '}
                    <span style={{ color: theme.palette.text.hint }}>
                        PenciDesign
                    </span>
                    <br />
                    Copied by{' '}
                    <span style={{ color: theme.palette.text.hint }}>
                        Oleksii Turovets
                    </span>{' '}
                    for Educational Purposes
                </Typography>
                <Button
                    onClick={() => {
                        window.scrollTo({
                            top: 0,
                            behavior: 'smooth',
                        })
                    }}
                    sx={{
                        position: 'absolute',
                        bottom: '15px',
                        left: '50%',
                        transform: 'translateX(-50%)',
                    }}
                >
                    <Typography
                        component={'div'}
                        variant="h6"
                        fontSize={12}
                        lineHeight={1}
                        sx={{
                            color: 'primary.light',
                            transition: 'color 0.3s',
                            '&:hover': { color: 'primary.contrastText' },
                        }}
                    >
                        <Typography component={'div'} variant='inherit' mb={2}>
                            <FontAwesomeIcon icon={faAngleUp} />
                        </Typography>
                        Back to top
                    </Typography>
                </Button>
            </Container>
        </footer>
    )
}
export default Footer
