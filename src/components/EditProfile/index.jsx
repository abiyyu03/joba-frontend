import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import TitleSection from '../TitleSection';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import keys from '../../constant/keys';
import ENDPOINT from '../../constant/endpoint';
import axios from 'axios';
import { useNavigate } from 'react-router';
import Button from '../UI/button';

const EditProfile = () => {
    const [ userData, setUserData ] = useState({})
    const navigate = useNavigate()
    const [ formData, setFormData ] = useState({
        email: "",
        fullname: "",
        address: "",
        number_phone: "",
        // description: "-",
    });
    const idUser = JSON.parse(localStorage.getItem('jewete')).tokenPayload.id_user
    const { email, password, fullname, address, number_phone } = formData;

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

    const updateUserData = async () => {
        const data = await axios.put(ENDPOINT.user.update(idUser), formData,
            {
                headers: {
                    'Authorization': `Bearer ${keys.jwtKey}`
                }
            });
        console.log(data.data)
    }
    useEffect(() => {
        getUserDataById()
    }, [])
    // //handling form
    function handleChange(e) {
        const { name, value } = e.target;

        setFormData({
            ...formData, [ name ]: value
        });
    }

    async function handleSubmit(e) {
        e.preventDefault();
        console.log(formData)
        updateUserData()
        // navigate("/profile?edit_profile=success")
    }
    return (
        <div className="mt-4 w-11/12 mx-auto">
            <TitleSection>Edit Profile</TitleSection>
            <div className="shadow-lg rounded-xl p-5 mt-4">
                <div className="mx-auto text-center">
                    <FontAwesomeIcon icon={faUserCircle} className="text-8xl"></FontAwesomeIcon>
                </div>
                <form action="" onSubmit={handleSubmit}>
                    <div className="mt-5">
                        <label htmlFor="">Nama Lengkap</label>
                        <input type="text" placeholder={userData.fullname} name="fullname" value={fullname} onChange={handleChange} className="input-bordered input w-full" />
                    </div>
                    <div className="mt-5">
                        <label htmlFor="">Email</label>
                        <input type="text" placeholder={userData.email} name="email" value={email} onChange={handleChange} className="input-bordered input w-full" />
                    </div>
                    <div className="mt-5">
                        <label htmlFor="">Alamat Lengkap</label>
                        <input type="text" placeholder={userData.address} name="address" value={address} onChange={handleChange} className="input-bordered input w-full" />
                    </div>
                    <div className="mt-5">
                        <label htmlFor="">Nomor Telepon</label>
                        <input type="text" placeholder={userData.number_phone} name="number_phone" value={number_phone} onChange={handleChange} className="input-bordered input w-full" />
                    </div>
                    <div className="mt-5">
                        <Button>Simpan</Button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default EditProfile;