import { Typography } from '@mui/material'
import Quote from 'components/Quote/Quote'
import ShareBox from 'components/ShareBox/ShareBox'

type Props = {}
const AboutPageContent = (props: Props) => {
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
                About me
            </Typography>
            <img
                src="/images/about.jpg"
                alt="about-page-image"
                style={{
                    display: 'block',
                    width: '100%',
                    margin: '5px 0px 20px',
                }}
            />
            <Typography component={'p'} variant="body1" mb={17}>
                A wonderful serenity has taken possession of my entire soul,
                like these sweet mornings of spring which I enjoy with my whole
                heart. I am alone, and feel the charm of existence in this spot,
                which was created for the bliss of souls like mine. I am so
                happy, my dear friend, so absorbed in the exquisite sense of
                mere tranquil existence, that I neglect my talents. I should be
                incapable of drawing a single stroke at the present moment; and
                yet I feel that I never was a greater artist than now.
            </Typography>
            <Typography component={'p'} variant="body1" mb={17}>
                When, while the lovely valley teems with vapour around me, and
                the meridian sun strikes the upper surface of the impenetrable
                foliage of my trees, and but a few stray gleams steal into the
                inner sanctuary, I throw myself down among the tall grass by the
                trickling stream; and, as I lie close to the earth, a thousand
                unknown plants are noticed.
            </Typography>

            <Quote
                quote="Life is a series of natural and spontaneous changes. Don't resist them - that only creates sorrow. Let reality be reality. Let things flow naturally forward in whatever way they like."
                author="Lao Tsu"
            />

            <Typography
                component={'h3'}
                variant="h3"
                color={'text.primary'}
                mb={17}
                mt={17}
            >
                Love what you do. Do what you love
            </Typography>
            <Typography component={'p'} variant="body1" mb={17}>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor. Aenean massa. Cumto sociis natoque
                penatibus et magnis dis parturient montes, nascetur ridiculus
                mus. Donec quam felis, ultricies nec.
            </Typography>
            <Typography
                component={'ul'}
                variant="body1"
                mb={20}
                sx={{ listStyle: 'square' }}
            >
                <li>In enim justo, rhoncus ut</li>
                <li>Curabitur ullamcorper ultricies</li>
                <li>Donec vitae sapien utlorem</li>
            </Typography>
            <Typography component={'p'} variant="body1">
                Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id,
                lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae
                sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit
                amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla
                mauris sit amet nibh. Donec sodales sagittis magna.
            </Typography>
            <ShareBox title={`About me`} image={'/images/about.jpg'} />
        </article>
    )
}
export default AboutPageContent
