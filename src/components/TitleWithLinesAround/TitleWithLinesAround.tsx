import { Typography } from '@mui/material'
import './TitleWithLinesAround.scss'

type Props = {
    children: React.ReactNode
}
const TitleWithLinesAround = ({children}: Props) => {
    return (
        <Typography
            component={'h3'}
            variant="h4"
            className="title-with-lines"
            align="center"
        >
            {children}
        </Typography>
    )
}
export default TitleWithLinesAround
