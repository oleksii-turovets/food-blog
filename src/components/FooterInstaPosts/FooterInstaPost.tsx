import './FooterInstaPost.scss'

type Props = {
    image: string
    postLink: string
}

const FooterInstaPost = ({ image, postLink }: Props) => {
    return (
        <li>
            <a href={postLink} target="_blank" rel="noopener noreferrer">
                <img src={image} alt="instapost" />
            </a>
        </li>
    )
}
export default FooterInstaPost