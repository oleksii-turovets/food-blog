import { Typography } from '@mui/material'
import ShareBox from 'components/ShareBox/ShareBox'
import WriteMessage from 'components/WriteMessage/WriteMessage'

type Props = {}
const ContactPageContent = (props: Props) => {
    return (
        <article style={{ marginBottom: '60px' }}>
            <Typography
                component={'h1'}
                align={'center'}
                sx={{
                    typography: { xs: 'h4', sm: 'h3', md: 'h1' },
                    color: 'text.primary',
                    marginBottom: '30px',
                }}
            >
                Contact me
            </Typography>
            <img
                src="/images/contact.jpg"
                alt="about-page-image"
                style={{
                    display: 'block',
                    width: '100%',
                    margin: '5px 0px 20px',
                }}
            />
            <Typography component={'p'} variant="body1" mb={17}>
                Have a question, a comment? Want to collaborate in some way?
                Just have something nice to say? I’d love to hear from you!
                Shoot me a message below and I’ll be sure to get back to you as
                soon as I can. Thanks! Lommodo ligula eget dolor. Aenean massa.
                Cum sociis natoque penatibus et magnis dis parturient montes
                lorem, nascetur ridiculus mus. Donec quam felis, ultricies nec,
                pellentesque eu, pretium quis, sem. Nulla onsequat massa quis.
            </Typography>
            <Typography
                component={'ul'}
                variant="body1"
                mb={40}
                sx={{ listStyle: 'square' }}
            >
                <li style={{ marginBottom: '6px' }}>
                    <Typography
                        component={'span'}
                        variant="inherit"
                        fontWeight={700}
                    >
                        Adress:
                    </Typography>
                    &nbsp; 123 Beverly Hill, New York, USA
                </li>
                <li style={{ marginBottom: '6px' }}>
                    <Typography
                        component={'span'}
                        variant="inherit"
                        fontWeight={700}
                    >
                        Phone:
                    </Typography>
                    &nbsp;{' '}
                    <a href="tel:+0123456789">
                        <Typography
                            component={'span'}
                            variant="inherit"
                            color={'text.primary'}
                        >
                            0123 456 789
                        </Typography>
                    </a>
                </li>
                <li>
                    <Typography
                        component={'span'}
                        variant="inherit"
                        fontWeight={700}
                    >
                        Email:
                    </Typography>
                    &nbsp;{' '}
                    <a href="mailto:pencidesign@gmail.com">
                        <Typography
                            component={'span'}
                            variant="inherit"
                            color={'text.primary'}
                        >
                            pencidesign@gmail.com
                        </Typography>
                    </a>
                </li>
            </Typography>
            <WriteMessage/>

            <ShareBox title={`About me`} image={'/images/contact.jpg'} />
        </article>
    )
}
export default ContactPageContent
