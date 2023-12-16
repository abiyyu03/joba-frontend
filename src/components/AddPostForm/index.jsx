import TitleSection from '../TitleSection';

const AddPostForm = () => {
    return (
        <div className="mt-4 w-11/12 mx-auto">
            <TitleSection>Add Post</TitleSection>
            <div className="shadow-lg rounded-xl p-5 mt-4">
                <form action="">
                    <div className="mt-5">
                        <input type="text" placeholder="Judul" className="input-bordered input w-full" />
                    </div>
                    <div className="mt-5">
                        <textarea placeholder="Isi Post" className="textarea textarea-bordered textarea-lg w-full" ></textarea>
                    </div>
                    <div className="mt-5">
                        <input type="text" placeholder="Masukan Nomor kontak yang bisa dihubungi" name="contact" className="input-bordered input w-full" />
                    </div>
                    <div className="mt-5">
                        <input type="text" placeholder="Masukan alamat lengkap" name="location" className="input-bordered input w-full" />
                    </div>
                    <div className="mt-5">
                        <input type="text" placeholder="Masukan alamat lengkap" name="" className="input-bordered input w-full" />
                    </div>
                    <div className="mt-5">
                        <button type="button" className="bg-green-500 text-white rounded-lg p-3 w-full">Unggah</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AddPostForm;