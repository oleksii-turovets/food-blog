import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faEnvelope,
    faHeart as faHeartSolid,
    faAngleUp,
    faAngleDown,
    faAngleRight,
    faAngleLeft,
} from '@fortawesome/free-solid-svg-icons'
import {
    faUser,
    faHeart,
    faClock,
    faComment,
} from '@fortawesome/free-regular-svg-icons'

type Props = {}

const FontAwesomeIcons = (props: Props) => {
    return (
        <>
            <FontAwesomeIcon icon={faUser} />
            <FontAwesomeIcon icon={faEnvelope} />
            <FontAwesomeIcon icon={faHeart} />
            <FontAwesomeIcon icon={faHeartSolid} />
            <FontAwesomeIcon icon={faAngleUp} />
            <FontAwesomeIcon icon={faAngleDown} />
            <FontAwesomeIcon icon={faAngleLeft} />
            <FontAwesomeIcon icon={faAngleRight} />
            <FontAwesomeIcon icon={faClock} />
            <FontAwesomeIcon icon={faComment} />
        </>
    )
}
export default FontAwesomeIcons
