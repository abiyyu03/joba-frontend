
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle, faHome } from "@fortawesome/free-solid-svg-icons";
const BottomNav = () => {
    return (
        <div className="btm-nav">
            <button>
                <FontAwesomeIcon icon={faHome}></FontAwesomeIcon>
                <p>Home</p>
            </button>
            <button>
                <FontAwesomeIcon icon={faUserCircle}></FontAwesomeIcon>
                <p>Profile</p>
            </button>
        </div>
    )
}

export default BottomNav;