import { Link } from 'react-router-dom';
import Button from '../UI/button';
import { useState } from 'react';
import axios from 'axios';
import ENDPOINT from '../../constant/endpoint';

const FormLogin = () => {
    const [ formData, setFormData ] = useState({
        email: "",
        password: "",
    });

    const { email, password } = formData;

    //handling form
    function handleChange(e) {
        const { name, value } = e.target;

        setFormData({
            ...formData, [ name ]: value
        });
    };

    async function handleSubmit(e) {
        e.preventDefault();
        console.log(formData)
        const data = await axios.post(ENDPOINT.auth.login, formData);
        localStorage.setItem("jewete", data.data);
        console.log(data)
    }
    return (
        <form action="" method="POST" onSubmit={handleSubmit}>
            <div className="h-screen flex items-center">
                <div className="w-full p-7 mx-auto sm:w-7/12 md:w-5/12 xl:w-3/12">
                    <h1 className="text-center text-5xl font-bold mb-5">JOBA</h1>
                    <h1 className="text-center text-3xl">Sign-in</h1>
                    <div className="mt-6">
                        {/* <label htmlFor="">Email</label> */}
                        <input type="email" placeholder="Masukan Email .." name="email"
                            className="block border-2 p-2 rounded-lg border-black-200 w-full" onChange={handleChange} value={email} required />
                    </div>
                    <div className="mt-6">
                        {/* <label htmlFor="">Password</label> */}
                        <input type="password" placeholder="Masukan Password .." name="password"
                            className="block border-2 p-2 rounded-lg border-black-200 w-full" onChange={handleChange} value={password} required />
                    </div>
                    <div className="mt-6">
                        <Button>Login</Button>
                        <Link to="/register">Belum Punya Akun ? Register</Link>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default FormLogin;