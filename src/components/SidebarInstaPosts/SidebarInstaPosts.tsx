import instagramFooterArray from 'utils/instagramFooterArray'
import FooterInstaPost from 'components/FooterInstaPosts/FooterInstaPost'

type Props = {}
const SidebarInstaPosts = (props: Props) => {
    return (
        <ul className="sidebar-insta-posts">
            {instagramFooterArray
                .filter((item) => item.id <= 6)
                .map(({ id, image, postLink }) => (
                    <FooterInstaPost
                        image={image}
                        postLink={postLink}
                        key={id}
                    />
                ))}
        </ul>
    )
}
export default SidebarInstaPosts
