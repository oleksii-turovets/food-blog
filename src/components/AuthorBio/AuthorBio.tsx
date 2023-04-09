import { Typography } from '@mui/material'
import LinkIconBtn from 'components/LinkIconBtn/LinkIconBtn'
import { Link } from 'react-router-dom'
import authorsObject from 'utils/authorsObject'
import './AuthorBio.scss'

type Props = {
    author: string
}

const AuthorBio = ({ author }: Props) => {
    const { name, img, bio, links } = authorsObject[author]

    return (
        <div className="author-bio">
            <img src={img} alt="author-avatar" className="author-img" />
            <div className="author-text">
                <Link to={`/author/${name.toLowerCase()}`}>
                    <Typography
                        component={'h3'}
                        variant="h6"
                        color={'text.primary'}
                        className="author-name"
                        sx={{
                            transition: 'all 0.3s',
                            '&:hover': {
                                color: 'text.hint',
                            },
                        }}
                    >
                        {name}
                    </Typography>
                </Link>
                <Typography
                    component={'p'}
                    variant="body1"
                    className="author-bio"
                >
                    {bio}
                </Typography>
                <div className="author-links">
                    {Object.entries(links).map((item, index) => (
                        <LinkIconBtn
                            key={index}
                            href={item[1]}
                            type={item[0]}
                            fontSize={14}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}
export default AuthorBio
