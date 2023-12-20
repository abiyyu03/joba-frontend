import { useEffect, useState } from 'react';
import TitleSection from '../TitleSection';
import ENDPOINT from '../../constant/endpoint';
import axios from 'axios';
import keys from '../../constant/keys';
import Button from '../UI/button';
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Navigate, useNavigate } from 'react-router';
import Select from 'react-select'

const AddPostForm = (props) => {
    const { skillData, tagData } = props
    const idUser = JSON.parse(localStorage.getItem('jewete')).tokenPayload.id_user
    // console.log(skillData)
    const navigate = useNavigate()
    const [ formData, setFormData ] = useState({
        title: "",
        body: "",
        tag_id: "",
        skill_id: "",
        user_id: idUser,
        slug: "123",
        location: "",
        contact: "",
    });
    const { title, body, tag_id, skill_id, location, contact } = formData;

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
        const data = await axios.post(ENDPOINT.post.create, formData,
            {
                headers: {
                    'Authorization': `Bearer ${keys.jwtKey}`
                }
            });
        console.log(data)
        // notify()
        // navigate("/?add_post=success")
    }
    return (
        <div className="mt-4 w-11/12 mx-auto">
            <TitleSection>Add a New Post</TitleSection>
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
            <div className="shadow-lg rounded-xl p-5 mb-12">
                <form action="" onSubmit={handleSubmit} method="POST">
                    <div className="mt-5">
                        <label htmlFor="">Judul <sup className="text-red-500">*</sup></label>
                        <input type="text" required placeholder="Judul" name="title" value={title} onChange={handleChange} className="input-bordered input w-full" />
                    </div>
                    <div className="mt-5">
                        <label htmlFor="">Isi Post <sup className="text-red-500">*</sup></label>
                        {/* <Editor
                            name="body"
                            toolbarClassName="border-2 bg-red-500"
                            wrapperClassName="wrapperClassName"
                            editorClassName="editorClassName"
                            onChange={handleChange}
                        /> */}
                        <textarea placeholder="Isi Post" required name="body" value={body} onChange={handleChange} className="textarea textarea-bordered textarea-lg w-full" ></textarea>
                    </div>
                    <div className="mt-5">
                        <label htmlFor="">Kontak (Whatsapp) <sup className="text-red-500">*</sup></label>
                        <input type="text" required placeholder="Masukan Nomor kontak yang bisa dihubungi" value={contact} name="contact" onChange={handleChange} className="input-bordered input w-full" />
                    </div>
                    <div className="mt-5">
                        <label htmlFor="">Alamat Lengkap <sup className="text-red-500">*</sup></label>
                        <input type="text" required placeholder="Masukan alamat lengkap" name="location" value={location} onChange={handleChange} className="input-bordered input w-full" />
                    </div>
                    <div className="mt-5">
                        <label htmlFor="">Pilih satu skill yang dibutuhkan <sup className="text-red-500">*</sup></label>
                        <select className="select select-bordered w-full" name="skill_id" value={skill_id} onChange={handleChange}>
                            <option selected>-</option>
                            {skillData.map((s, key) => {
                                return (
                                    <option key={key} value={s.id_skill}>{s.skill_name}</option>
                                )
                            })}
                        </select>
                    </div>
                    <div className="mt-5">
                        <label htmlFor="">Tag Pekerjaan terkait <sup className="text-red-500">*</sup></label>
                        <select className="select select-bordered w-full" name="tag_id" value={tag_id} onChange={handleChange}>
                            <option selected>-</option>
                            {tagData.map((s, key) => {
                                return (
                                    <option key={key} value={s.id_tag}>{s.tag}</option>
                                )
                            })}
                        </select>
                    </div>
                    <div className="mt-5">
                        <div className="form-control">
                            <label className="label cursor-pointer">
                                <input type="checkbox" className="checkbox checkbox-primary" />
                                <span className="label-text">Saya menyetujui ketentuan privasi layanan</span>
                            </label>
                        </div>
                    </div>
                    <div className="mt-5">
                        <Button>Buat</Button>
                    </div>
                </form>
            </div >
        </div >
    )
}

export default AddPostForm;