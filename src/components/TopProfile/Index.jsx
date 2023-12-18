import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faEdit, faEnvelope, faUserCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect, useMemo, useState } from 'react'
import { useJwt } from 'react-jwt'
import { Link } from 'react-router-dom'

const TopProfile = () => {
    const user = JSON.parse(localStorage.getItem('jewete')).tokenPayload

    console.log(user)
    return (
        <div className="">
            <div className="flex justify-between mx-6 items-center">
                <div className="flex my-8 items-center justify-center">
                    <FontAwesomeIcon icon={faUserCircle} className="text-7xl"></FontAwesomeIcon>
                    <div className="mx-3">
                        <h2 className="text-2xl font-bold">{user.fullname}</h2>
                        <h4 className="text-lg">
                            <FontAwesomeIcon icon={faEnvelope} className="mx-1"></FontAwesomeIcon>
                            {user.email}
                        </h4>
                        <h4 className="text-lg">
                            <FontAwesomeIcon icon={faWhatsapp} className="mx-1"></FontAwesomeIcon>
                            {user.number_phone}
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