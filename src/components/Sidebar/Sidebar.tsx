import { Typography } from '@mui/material'

type Props = {}
const Sidebar = (props: Props) => {
    return (
        <aside>
            <form className="sidebar-search">
                <input
                    type="search"
                    placeholder="Type and hit enter..."
                    required
                />
            </form>
            <div className="sidebar-option sidebar-about">
                <div className="sidebar-option-title">
                    <Typography className="sidebar-option-title-text">
                        About me
                    </Typography>
                    <div className="img">
                        <img src="./images/ava.jpg" alt="avatar" />
                    </div>
                    <div className="content">
                        <Typography className="name">About me</Typography>
                        <Typography className="dscrbtn">
                            Hi, I'm Rachel. Cooking is the way I express my
                            creative side to the world. Welcome to my Kitchen
                            Corner on the Internet!
                        </Typography>
                    </div>
                </div>
            </div>
            <div className="sidebar-option sidebar-keep-in-touch">
                <div className="sidebar-option-title">
                    <Typography className="sidebar-option-title-text">
                        Keep in touch
                    </Typography>
                </div>
            </div>
        </aside>
    )
}
export default Sidebar
