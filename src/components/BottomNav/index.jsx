
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle, faBriefcase, faBookmark, faChartBar } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';
const BottomNav = () => {
    return (<div className="btm-nav">
        <button>
            <Link to="/">
                <FontAwesomeIcon icon={faBriefcase}></FontAwesomeIcon>
                <p>Find Job</p>
            </Link>
        </button>
        <button>
            <Link to="/bookmark">
                <FontAwesomeIcon icon={faBookmark}></FontAwesomeIcon>
                <p>Bookmark</p>
            </Link>
        </button>
        <button>
            <Link to="/">
                <FontAwesomeIcon icon={faChartBar}></FontAwesomeIcon>
                <p>Statistics</p>
            </Link>
        </button>
        <button>
            <Link to="/profile">
                <FontAwesomeIcon icon={faUserCircle}></FontAwesomeIcon>
                <p>Profile</p>
            </Link>
        </button>
    </div>
    )
}

export default BottomNav;