import { faBookmark, faShield, faSignOut } from '@fortawesome/free-solid-svg-icons'
import { faShieldHalved } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const ProfileMenu = () => {
    const navigate = useNavigate()
    const logout = () => {
        localStorage.removeItem('jewete')
        navigate(0)
    }
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

                <Link onClick={logout}>
                    <FontAwesomeIcon icon={faSignOut}></FontAwesomeIcon>
                    Keluar Akun
                </Link>
            </li>
        </ul>
    )
}

export default ProfileMenu