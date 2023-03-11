import './FooterInstaPost.scss'

type Props = {
    id: number
    image: string
    postLink: string
}

const FooterInstaPost = ({ id, image, postLink }: Props) => {
    return (
        <li>
            <a href={postLink} target="_blank" rel="noopener noreferrer">
                <img src={image} alt="instapost" />
            </a>
        </li>
    )
}
export default FooterInstaPost