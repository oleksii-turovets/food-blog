import {
    faFacebookF,
    faTwitter,
    faInstagram,
    faPinterest,
    faYoutube,
} from '@fortawesome/free-brands-svg-icons'
import TopSocialBtn from './TopSocialBtn'

type Props = {}
const TopSocialBtns = (props: Props) => {
    return (
        <div className="top-social-btns">
            <TopSocialBtn iconName={faFacebookF} href="/" />
            <TopSocialBtn iconName={faTwitter} href="/" />
            <TopSocialBtn iconName={faInstagram} href="/" />
            <TopSocialBtn iconName={faPinterest} href="/" />
            <TopSocialBtn iconName={faYoutube} href="/" />
        </div>
    )
}
export default TopSocialBtns
