import instagramFooterArray from 'utils/instagramFooterArray'
import FooterInstaPost from './FooterInstaPost'

type Props = {}
const FooterInstaPosts = (props: Props) => {
    return (
        <ul className='footer-insta-posts'>
            {instagramFooterArray.map(({ id, image, postLink }) => (
                <FooterInstaPost id={id} image={image} postLink={postLink} />
            ))}
        </ul>
    )
}
export default FooterInstaPosts
