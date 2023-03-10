import {
    AppBar,
    Box,
    Container,
    IconButton,
    Toolbar,
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import { useState } from 'react'
import Menu from 'components/Menu/Menu'
import TopSearch from 'components/TopSearch/TopSearch'
import TopSocialBtns from 'components/TopSocialBtns/TopSocialBtns'
import AppBarDrawer from 'components/AppBarDrawer/AppBarDrawer'

type Props = {}

const Header = (props: Props) => {

    const [mobileOpen, setMobileOpen] = useState(false)

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState)
    }

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
                        sx={{
                            height: 1,
                            pr: 25,
                            justifyContent: 'flex-start',
                        }}
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
                        <TopSocialBtns />
                        <TopSearch />
                    </Toolbar>
                </Container>
            </AppBar>
            <AppBarDrawer
                handleDrawerToggle={handleDrawerToggle}
                mobileOpen= {mobileOpen}
            />
        </div>
    )
}
export default Header
