import TitleSection from '../TitleSection';

const EditProfile = () => {
    return (
        <div className="mt-4 w-11/12 mx-auto">
            <TitleSection>Edit Profile</TitleSection>
            <div className="shadow-lg rounded-xl p-5 mt-4">
                <form action="">
                    <div className="mt-5">
                        <label htmlFor="">Nama Lengkap</label>
                        <input type="text" placeholder="" name="fullname" className="input-bordered input w-full" />
                    </div>
                    <div className="mt-5">
                        <label htmlFor="">Email</label>
                        <input type="text" placeholder="" name="email" className="input-bordered input w-full" />
                    </div>
                    <div className="mt-5">
                        <label htmlFor="">Alamat Lengkap</label>
                        <input type="text" placeholder="" name="address" className="input-bordered input w-full" />
                    </div>
                    <div className="mt-5">
                        <label htmlFor="">Nomor Telepon</label>
                        <input type="text" placeholder="" name="number_phone" className="input-bordered input w-full" />
                    </div>
                    <div className="mt-5">
                        <button type="button" className="bg-green-500 text-white rounded-lg p-3 w-full">Simpan</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default EditProfile;