import { IconButton } from '@mui/material'
import { faClose, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './TopSearch.scss'
import { useState } from 'react'

type Props = {}

const TopSearch = (props: Props) => {
    const [formClasses, setFormClasses] = useState<string>('top-search-form')

    const topSearchToggle = (open: boolean) => {
        open
            ? setFormClasses(() => 'top-search-form top-search-form-active')
            : setFormClasses(() => 'top-search-form')
    }

    return (
        <div className="top-search">
            <form className={formClasses}>
                <input
                    type="search"
                    placeholder="Type and hit enter..."
                    required
                />
                <IconButton
                    onClick={() => topSearchToggle(false)}
                    edge="end"
                    color="inherit"
                    sx={{
                        ml: 0,
                        mr: 0,
                        mt: 'auto',
                        mb: 'auto',
                        p: 0,
                        color: '#fff',
                        height: 1,
                    }}
                >
                    <FontAwesomeIcon
                        className="top-search-icon-close"
                        icon={faClose}
                    />
                </IconButton>
            </form>
            <IconButton
                className="top-search-btn"
                onClick={() => topSearchToggle(true)}
                edge="end"
                color="inherit"
                aria-label="menu"
                sx={{
                    ml: 0,
                    mr: 0,
                    mt: 'auto',
                    mb: 'auto',
                    p: 0,
                    color: 'primary.light',
                    height: 1,
                }}
            >
                <FontAwesomeIcon
                    className="top-search-icon-glass"
                    icon={faMagnifyingGlass}
                />
            </IconButton>
        </div>
    )
}
export default TopSearch
