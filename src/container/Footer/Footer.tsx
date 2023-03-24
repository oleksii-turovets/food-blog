import { Container, Typography, Grid } from '@mui/material'
import useTheme from '@mui/material/styles/useTheme'
import FooterInstaPosts from 'components/FooterInstaPosts/FooterInstaPosts'
import FooterSocialBtns from 'components/FooterSocialBtns/FooterSocialBtns'

type Props = {}
const Footer = (props: Props) => {
    const theme = useTheme()
    return (
        <div style={{ backgroundColor: theme.palette.primary.main }}>
            <FooterInstaPosts />
            <Container
                component="div"
                sx={{
                    maxWidth: { xs: 'none', md: 940, lg: 1170 },
                    paddingRight: { xs: 15, md: 0 },
                    paddingLeft: { xs: 15, md: 0 },
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
            </Container>
        </div>
    )
}
export default Footer
