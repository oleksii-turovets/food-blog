import { IconButton, Typography } from '@mui/material'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './SidebarSearch.scss'

type Props = {}

const SidebarSearch = (props: Props) => {
    return (
        <form className="sidebar-search">
            <input type="search" placeholder="Type and hit enter..." required />
            <IconButton
                className="sidebar-search-btn"
                edge="end"
                color="inherit"
                aria-label="menu"
                type="submit"
                sx={{
                    ml: 0,
                    mr: 0,
                    mt: 'auto',
                    mb: 'auto',
                    p: 0,
                    color: '#313131',
                    '&:hover': {
                        background: 'none',
                    },
                }}
            >
                <Typography component="div" lineHeight="14px" paddingTop="2px">
                    <FontAwesomeIcon
                        className="sidebar-search-icon-glass"
                        icon={faMagnifyingGlass}
                    />
                </Typography>
            </IconButton>
        </form>
    )
}
export default SidebarSearch
