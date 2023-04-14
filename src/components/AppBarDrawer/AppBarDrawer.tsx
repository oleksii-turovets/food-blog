import { Box, Drawer } from '@mui/material'
import Logo from 'components/Logo/Logo'
import './AppBarDrawer.scss'
import SidebarSocialBtns from 'components/SidebarSocialBtns/SidebarSocialBtns'
import AppBarDrawerMenu from 'components/AppBarDrawerMenu/AppBarDrawerMenu'

type Props = {
    window?: () => Window
    handleDrawerToggle: () => void
    mobileOpen: boolean
}

const drawerWidth = 270

const AppBarDrawer = ({ window, handleDrawerToggle, mobileOpen }: Props) => {

    const container =
        window !== undefined ? () => window().document.body : undefined

    const drawer = (
        <Box
            sx={{ textAlign: 'center', padding: '30px 20px 30px' }}
            className="app-bar-drawer"
        >
            <div className="logo-wrapper">
                <Logo align="center" />
            </div>
            <div className="social-btns-wrapper">
                <SidebarSocialBtns variant="h6" />
            </div>
            <AppBarDrawerMenu />
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
