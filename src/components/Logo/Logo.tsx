import Typography from '@mui/material/Typography'
import logo from 'assets/logo.png'

type Props = {
    align: 'right' | 'left' | 'center' | 'inherit' | 'justify' | undefined
}
const Logo = ({ align }: Props) => {
    return (
        <Typography variant="h6" component="div" align={align}>
            <img src={logo} alt="" style={{ width: '100%', maxWidth:'360px' }} />
        </Typography>
    )
}
export default Logo
