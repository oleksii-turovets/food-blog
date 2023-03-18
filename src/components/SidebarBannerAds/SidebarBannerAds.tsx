import Typography from '@mui/material/Typography'
import './SidebarBannerAds.scss'

type Props = {}

const SidebarBannerAds = (props: Props) => {
    return (
        <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="banner-ads"
        >
            <img src="/images/banner.jpg" alt="banner-ads" />
            <Typography
                className="banner-ads-text"
                component="div"
                variant="h6"
                color="primary.main"
                align="center"
                fontSize={12}
            >
                Banner Ads
            </Typography>
        </a>
    )
}
export default SidebarBannerAds
