import {
    AppBar,
    Box,
    Button,
    Container,
    Divider,
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
    Toolbar,
    Typography,
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faFacebookF,
    faTwitter,
    faInstagram,
    faPinterest,
    faYoutube,
} from '@fortawesome/free-brands-svg-icons'
import {
    faEnvelope,
    faHeart as faHeartSolid,
    faAngleUp,
    faAngleDown,
    faAngleRight,
    faAngleLeft,
    faMagnifyingGlass,
} from '@fortawesome/free-solid-svg-icons'
import {
    faUser,
    faHeart,
    faClock,
    faComment,
} from '@fortawesome/free-regular-svg-icons'
import Menu from 'components/Menu/Menu'

type Props = {
    window?: () => Window
}

const drawerWidth = 240
const navItems = [
    'Home',
    'Featured',
    'Recipes',
    'Breakfast',
    'About',
    'Contact',
    'Bookmarks',
]

const Header = (props: Props) => {
    const { window } = props
    const [mobileOpen, setMobileOpen] = useState(false)

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState)
    }

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <Typography variant="h6" sx={{ my: 2 }}>
                MUI
            </Typography>
            <Divider />
            <List>
                {navItems.map((item) => (
                    <ListItem key={item} disablePadding>
                        <ListItemButton sx={{ textAlign: 'center' }}>
                            <ListItemText primary={item} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    )

    const container =
        window !== undefined ? () => window().document.body : undefined

    return (
        <div>
            <AppBar position="static" component="div" sx={{ height: 60 }}>
                <Container
                    component="div"
                    sx={{
                        maxWidth: { xs: 'none', md: 940, lg: 1170 },
                        height: 1,
                    }}
                    disableGutters={true}
                >
                    <Toolbar
                        variant="dense"
                        disableGutters={true}
                        sx={{ height: 1 }}
                    >
                        <IconButton
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            onClick={handleDrawerToggle}
                            sx={{
                                ml: 15,
                                mr: 0,
                                p: 0,
                                mt: 'auto',
                                mb: 'auto',
                                display: { sm: 'none' },
                                color: 'primary.light',
                            }}
                        >
                            <MenuIcon
                                sx={{ display: 'block', width: 24, p: 0 }}
                            />
                        </IconButton>
                        <Box
                            sx={{
                                display: { xs: 'none', sm: 'block' },
                                height: 1,
                            }}
                        >
                            <Menu />
                        </Box>
                        <Box
                            sx={{
                                display: { xs: 'none', sm: 'block' },
                                height: 1,
                            }}
                        >
                            <IconButton
                                edge="start"
                                color="inherit"
                                aria-label="menu"
                                sx={{
                                    ml: 15,
                                    mr: 0,
                                    p: 0,
                                    mt: 'auto',
                                    mb: 'auto',
                                    display: { xs: 'none', sm: 'block' },
                                    color: 'primary.light',
                                }}
                            >
                                <FontAwesomeIcon icon={faFacebookF} />
                            </IconButton>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
            <Box component="nav">
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true,
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': {
                            boxSizing: 'border-box',
                            width: drawerWidth,
                        },
                    }}
                >
                    {drawer}
                </Drawer>
            </Box>
            <FontAwesomeIcon icon={faFacebookF} />
            <FontAwesomeIcon icon={faTwitter} />
            <FontAwesomeIcon icon={faInstagram} />
            <FontAwesomeIcon icon={faPinterest} />
            <FontAwesomeIcon icon={faUser} />
            <FontAwesomeIcon icon={faYoutube} />
            <FontAwesomeIcon icon={faEnvelope} />
            <FontAwesomeIcon icon={faHeart} />
            <FontAwesomeIcon icon={faHeartSolid} />
            <FontAwesomeIcon icon={faAngleUp} />
            <FontAwesomeIcon icon={faAngleDown} />
            <FontAwesomeIcon icon={faAngleLeft} />
            <FontAwesomeIcon icon={faAngleRight} />
            <FontAwesomeIcon icon={faMagnifyingGlass} />
            <FontAwesomeIcon icon={faClock} />
            <FontAwesomeIcon icon={faComment} />
        </div>
    )
}
export default Header
