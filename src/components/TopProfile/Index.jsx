import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faEdit, faEnvelope, faUserCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect, useMemo, useState } from 'react'
import { useJwt } from 'react-jwt'
import { Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import keys from '../../constant/keys';
import ENDPOINT from '../../constant/endpoint';
import axios from 'axios';

const TopProfile = () => {
    const [ userData, setUserData ] = useState({})
    const query = new URLSearchParams(window.location.search);
    const editProfileParam = query.get("edit_profile");
    const notifyEditProfileSuccess = () => toast("Profile berhasil diubah !");
    const idUser = JSON.parse(localStorage.getItem('jewete')).tokenPayload.id_user
    if (editProfileParam == 'success') {
        notifyEditProfileSuccess()
    }

    const getUserDataById = async () => {
        const response = await axios.get(ENDPOINT.user.get(idUser),
            {
                headers: {
                    'Authorization': `Bearer ${keys.jwtKey}`
                }
            });
        setUserData(response.data.data)
        // console.log(response)
    }
    useEffect(() => {
        getUserDataById()
    }, [])

    return (
        <div className="">
            <ToastContainer
                position="top-right"
                autoClose={4000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
            <div className="flex justify-between mx-6 items-center">
                <div className="flex my-8 items-center justify-center">
                    <FontAwesomeIcon icon={faUserCircle} className="text-7xl"></FontAwesomeIcon>
                    <div className="mx-3">
                        <h2 className="text-2xl font-bold">{userData.fullname}</h2>
                        <h4 className="text-lg">
                            <FontAwesomeIcon icon={faEnvelope} className="mx-1"></FontAwesomeIcon>
                            {userData.email}
                        </h4>
                        <h4 className="text-lg">
                            <FontAwesomeIcon icon={faWhatsapp} className="mx-1"></FontAwesomeIcon>
                            {userData.number_phone}
                        </h4>
                    </div>
                </div>
                <div className="shadow-lg hover:bg-gray-200 rounded-full p-4">
                    <Link to="/edit-profile">
                        <FontAwesomeIcon icon={faEdit} className="text-2xl"></FontAwesomeIcon>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default TopProfile