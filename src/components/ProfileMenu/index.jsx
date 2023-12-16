import { faBookmark, faShield, faSignOut } from '@fortawesome/free-solid-svg-icons'
import { faShieldHalved } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'

const ProfileMenu = () => {
    return (
        <ul className="menu bg-base-200 w-full rounded-box">
            <li className="py-2 text-lg">
                <Link to="/bookmark">
                    <FontAwesomeIcon icon={faBookmark}></FontAwesomeIcon>
                    Postingan Disimpan
                </Link>
            </li>
            <li className="py-2 text-lg">
                <Link to="/privacy">
                    <FontAwesomeIcon icon={faShieldHalved}></FontAwesomeIcon>
                    Ketentuan dan Privasi
                </Link>
            </li>
            <li className="py-2 text-lg text-red-600">

                <Link to="/logout">
                    <FontAwesomeIcon icon={faSignOut}></FontAwesomeIcon>
                    Keluar Akun
                </Link>
            </li>
        </ul>
    )
}

export default ProfileMenu