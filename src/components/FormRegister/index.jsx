import { Link } from 'react-router-dom';
import Button from '../UI/button';

const FormRegister = () => {
    return (
        <form action="" method="POST">
            <div className="h-screen flex items-center">
                <div className="w-full p-7 mx-auto sm:w-7/12 md:w-5/12 xl:w-3/12">
                    <h1 className="text-center text-5xl font-bold mb-5">JOBA</h1>
                    <h1 className="text-center text-3xl">Sign-up</h1>
                    <div className="mt-6">
                        <p className="mb-3">Data Pribadi</p>
                        <input type="text" placeholder="Nama Lengkap .." name="fullname"
                            className="block border-2 p-2 rounded-lg border-black-200 w-full" required />
                    </div>
                    <div className="mt-6">
                        {/* <label htmlFor="">Password</label> */}
                        <input type="text" placeholder="Alamat Lengkap.." name="address"
                            className="block border-2 p-2 rounded-lg border-black-200 w-full" required />
                    </div>
                    <div className="mt-6">
                        {/* <label htmlFor="">Password</label> */}
                        <input type="text" placeholder="Nomor Telepon.." name="numberPhone"
                            className="block border-2 p-2 rounded-lg border-black-200 w-full" required />
                    </div>
                    <div className="mt-6">
                        <p className="mb-3">Akun</p>
                        <input type="email" placeholder="Masukan Email .." name="email"
                            className="block border-2 p-2 rounded-lg border-black-200 w-full" required />
                    </div>
                    <div className="mt-6">
                        {/* <label htmlFor="">Password</label> */}
                        <input type="password" placeholder="Masukan Password .." name="password"
                            className="block border-2 p-2 rounded-lg border-black-200 w-full" required />
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