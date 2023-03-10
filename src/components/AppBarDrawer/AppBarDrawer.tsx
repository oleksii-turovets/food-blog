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

type Props = {
    window?: () => Window
    handleDrawerToggle: () => void
    mobileOpen: boolean
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

const AppBarDrawer = ({ window, handleDrawerToggle, mobileOpen }: Props) => {
    const container =
        window !== undefined ? () => window().document.body : undefined

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
