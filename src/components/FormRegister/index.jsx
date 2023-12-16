import { Link, redirect } from 'react-router-dom';
import Button from '../UI/button';
import { useState } from 'react';
import axios from 'axios';
import ENDPOINT from '../../constant/endpoint';

const FormRegister = () => {
    const [ formData, setFormData ] = useState({
        email: "",
        password: "",
        fullname: "",
        address: "",
        numberPhone: "",
        repeatPassword: "",
        description: "-",
    });

    const { email, password, fullname, address, numberPhone, repeatPassword } = formData;

    //handling form
    function handleChange(e) {
        const { name, value } = e.target;

        setFormData({
            ...formData, [ name ]: value
        });
    };

    async function handleSubmit(e) {
        e.preventDefault();
        if (repeatPassword == password) {
            await axios.post(ENDPOINT.auth.register, formData,
                {
                    headers: {
                        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFiaUBleGFtcGxlLmNvbSIsImlhdCI6MTcwMjUwNDk1MiwiZXhwIjoxNzAyNTEyMTUyfQ.xa7xHXpBfdbTcPMWum8kHN0VyeSz-TK6b3ufJq6sQiU'
                    }
                }
            );
            redirect("/login")
        }
    }
    return (
        <form action="" method="POST" onSubmit={handleSubmit}>
            <div className="h-screen flex items-center">
                <div className="w-full p-7 mx-auto sm:w-7/12 md:w-5/12 xl:w-3/12">
                    <h1 className="text-center text-5xl font-bold mb-5">JOBA</h1>
                    <h1 className="text-center text-3xl">Sign-up</h1>
                    <div className="mt-6">
                        <p className="mb-3">Data Pribadi</p>
                        <input type="text" placeholder="Nama Lengkap .." name="fullname"
                            className="block border-2 p-2 rounded-lg border-black-200 w-full" onChange={handleChange} value={fullname} required />
                    </div>
                    <div className="mt-6">
                        {/* <label htmlFor="">Password</label> */}
                        <input type="text" placeholder="Alamat Lengkap.." name="address"
                            className="block border-2 p-2 rounded-lg border-black-200 w-full" onChange={handleChange} value={address} required />
                    </div>
                    <div className="mt-6">
                        {/* <label htmlFor="">Password</label> */}
                        <input type="text" placeholder="Nomor Telepon.." name="numberPhone"
                            className="block border-2 p-2 rounded-lg border-black-200 w-full" onChange={handleChange} value={numberPhone} required />
                    </div>
                    <div className="mt-6">
                        <p className="mb-3">Akun</p>
                        <input type="email" placeholder="Email .." name="email"
                            className="block border-2 p-2 rounded-lg border-black-200 w-full" onChange={handleChange} value={email} required />
                    </div>
                    <div className="mt-6">
                        {/* <label htmlFor="">Password</label> */}
                        <input type="password" placeholder="Password .." name="password"
                            className="block border-2 p-2 rounded-lg border-black-200 w-full" onChange={handleChange} value={password} required />
                    </div>
                    <div className="mt-6">
                        {/* <label htmlFor="">Password</label> */}
                        <input type="password" placeholder="Ulangi Password .." name="repeatPassword"
                            className="block border-2 p-2 rounded-lg border-black-200 w-full" onChange={handleChange} value={repeatPassword} required />
                    </div>
                    <div className="mt-6">
                        <Button>Register</Button>
                        <Link to="/login">Sudah Punya Akun ? Login</Link>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default FormRegister;