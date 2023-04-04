import { Typography } from '@mui/material'
import Button from '@mui/material/Button'
import SidebarBannerAds from 'components/SidebarBannerAds/SidebarBannerAds'
import SidebarCategories from 'components/SidebarCategories/SidebarCategories'
import SidebarInstaPosts from 'components/SidebarInstaPosts/SidebarInstaPosts'
import SidebarRecentPosts from 'components/SidebarRecentPosts/SidebarRecentPosts'
import SidebarSearch from 'components/SidebarSearch/SidebarSearch'
import SidebarSlider from 'components/SidebarSlider/SidebarSlider'
import SidebarSocialBtns from 'components/SidebarSocialBtns/SidebarSocialBtns'
import './Sidebar.scss'

type Props = {}
const Sidebar = (props: Props) => {
    return (
        <aside className="sidebar">
            <SidebarSearch />
            <div className="sidebar-option sidebar-about">
                <div className="sidebar-option-title">
                    <Typography
                        className="sidebar-option-title-text"
                        component="h4"
                        variant="h6"
                        color={'primary.contrastText'}
                        align="center"
                    >
                        About me
                    </Typography>
                </div>
                <div className="img">
                    <img src="/images/ava.jpg" alt="avatar" />
                </div>
                <div className="content">
                    <Typography
                        className="name"
                        component="h5"
                        variant="body1"
                        color={'text.primary'}
                        align="center"
                    >
                        Food Blogger
                    </Typography>
                    <Typography
                        className="dscrbtn"
                        component="p"
                        variant="subtitle1"
                        align="center"
                    >
                        Hi, I'm Rachel. Cooking is the way I express my creative
                        side to the world. Welcome to my Kitchen Corner on the
                        Internet!
                    </Typography>
                </div>
            </div>
            <div className="sidebar-option sidebar-keep-in-touch">
                <div className="sidebar-option-title">
                    <Typography
                        className="sidebar-option-title-text"
                        component="h4"
                        variant="h6"
                        color={'primary.contrastText'}
                        align="center"
                    >
                        Keep in touch
                    </Typography>
                </div>
                <div className="content">
                    <SidebarSocialBtns />
                </div>
            </div>
            <div className="sidebar-option sidebar-insta">
                <div className="sidebar-option-title">
                    <Typography
                        className="sidebar-option-title-text"
                        component="h4"
                        variant="h6"
                        color={'primary.contrastText'}
                        align="center"
                    >
                        On Instagram
                    </Typography>
                </div>
                <div className="content">
                    <SidebarInstaPosts />
                </div>
            </div>
            <div className="sidebar-option sidebar-featured-recipes">
                <div className="sidebar-option-title">
                    <Typography
                        className="sidebar-option-title-text"
                        component="h4"
                        variant="h6"
                        color={'primary.contrastText'}
                        align="center"
                    >
                        Featured recipes
                    </Typography>
                </div>
                <div className="content">
                    <SidebarSlider/>
                </div>
            </div>
            <div className="sidebar-option sidebar-subscribe">
                <div className="sidebar-option-title">
                    <Typography
                        className="sidebar-option-title-text"
                        component="h4"
                        variant="h6"
                        color={'primary.contrastText'}
                        align="center"
                    >
                        Subscribe newsletter
                    </Typography>
                </div>
                <div className="content">
                    <Typography
                        component="p"
                        variant="subtitle1"
                        align="center"
                    >
                        Subscribe my Newsletter for new blog posts, tips & new
                        photos. Let's stay updated!
                    </Typography>
                    <form action="">
                        <input
                            type="text"
                            name="name"
                            placeholder="Name..."
                            required
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Email..."
                            required
                        />
                        <Button
                            className="sidebar-subscribe-btn"
                            color="inherit"
                            aria-label="subscribe"
                            type="submit"
                            sx={{
                                width: 1,
                                m: 0,
                                pl: 20,
                                pr: 20,
                                pt: 12,
                                pb: 12,
                                color: '#313131',
                                bgcolor: '#f5f5f5',
                                '&:hover': {
                                    color: 'primary.contrastText',
                                    bgcolor: 'text.hint',
                                },
                            }}
                        >
                            <Typography
                                component="div"
                                variant="h6"
                                align="center"
                            >
                                Subscribe
                            </Typography>
                        </Button>
                    </form>
                </div>
            </div>
            <div className="sidebar-option sidebar-recent-posts">
                <div className="sidebar-option-title">
                    <Typography
                        className="sidebar-option-title-text"
                        component="h4"
                        variant="h6"
                        color={'primary.contrastText'}
                        align="center"
                    >
                        Recent posts
                    </Typography>
                </div>
                <div className="content">
                    <SidebarRecentPosts/>
                </div>
            </div>
            <div className="sidebar-option sidebar-ads">
                <div className="content">
                    <SidebarBannerAds />
                </div>
            </div>
            <div className="sidebar-option sidebar-categories">
                <div className="sidebar-option-title">
                    <Typography
                        className="sidebar-option-title-text"
                        component="h4"
                        variant="h6"
                        color={'primary.contrastText'}
                        align="center"
                    >
                        Categories
                    </Typography>
                </div>
                <div className="content">
                    <SidebarCategories/>
                </div>
            </div>
        </aside>
    )
}
export default Sidebar
