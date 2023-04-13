import {
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
    Typography,
} from '@mui/material'
import Logo from 'components/Logo/Logo'
import './AppBarDrawer.scss'
import TopSocialBtns from 'components/TopSocialBtns/TopSocialBtns'
import SidebarSocialBtns from 'components/SidebarSocialBtns/SidebarSocialBtns'
import AppBarDrawerMenu from 'components/AppBarDrawerMenu/AppBarDrawerMenu'

type Props = {
    window?: () => Window
    handleDrawerToggle: () => void
    mobileOpen: boolean
}

const drawerWidth = 270
const navItems = [
    'Home',
    'Featured',
    'Recipes',
    'Breakfast',
    'About',
    'Contact',
    'Bookmarks',
]

const AppBarDrawer = ({ window, handleDrawerToggle, mobileOpen }: Props) => {
    const container =
        window !== undefined ? () => window().document.body : undefined

    const drawer = (
        <Box
            onClick={handleDrawerToggle}
            sx={{ textAlign: 'center', padding: '30px 20px 30px' }}
            className="app-bar-drawer"
        >
            {/* <Typography variant="h6" sx={{ my: 2 }}>
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
            </List> */}
            <div className="logo-wrapper">
                <Logo align="center" />
            </div>
            <div className="social-btns-wrapper">
                <SidebarSocialBtns variant="h6" />
            </div>
            <AppBarDrawerMenu/>
        </Box>
    )

    return (
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
    )
}
export default AppBarDrawer
