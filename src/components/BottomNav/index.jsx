
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle, faHome, faBriefcase, faMagnifyingGlass, faFileCircleCheck, faBookmark } from "@fortawesome/free-solid-svg-icons";
const BottomNav = () => {
    return (
        <div className="btm-nav">
            <button>
                <FontAwesomeIcon icon={faBriefcase}></FontAwesomeIcon>
                <p>Find Job</p>
            </button>
            <button>
            <FontAwesomeIcon icon={faFileCircleCheck}></FontAwesomeIcon>
                <p>Create Job</p>
            </button>
            <button>
            <FontAwesomeIcon icon={faMagnifyingGlass}></FontAwesomeIcon>
                <p>Search</p>
            </button>
            <button>
            <FontAwesomeIcon icon={faBookmark}></FontAwesomeIcon>
                <p>Bookmark</p>
            </button>
            <button>
                <FontAwesomeIcon icon={faUserCircle}></FontAwesomeIcon>
                <p>Profile</p>
            </button>
        </div>
    )
}

export default BottomNav;