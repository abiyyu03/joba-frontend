import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from "@fortawesome/free-regular-svg-icons";
import Header from '../Header';
import keys from '../../constant/keys';
import axios from 'axios';
import ENDPOINT from '../../constant/endpoint';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect, useState } from 'react';

const PostCard = () => {
    const [ postData, setPostData ] = useState([]);
    const query = new URLSearchParams(window.location.search);
    const addPostParam = query.get("add_post");
    const deletePostParam = query.get("delete_post");

    const notifyAddPostSuccess = () => toast("Postingan berhasil dibuat !");
    const notifyDeletePostSuccess = () => toast("Postingan berhasil dihapus !");
    const notifyAddBookmark = () => toast("Postingan berhasil disimpan ke bookmark!");

    const idUser = JSON.parse(localStorage.getItem('jewete')).tokenPayload.id_user
    const saveBookmark = async (event, postId, userId) => {
        event.preventDefault()
        const bookmarkData = {
            postId: postId,
            userId: userId
        };
        await axios.post(ENDPOINT.bookmark.create, bookmarkData, {
            headers: {
                'Authorization': `Bearer ${keys.jwtKey}`
            }
        })
        notifyAddBookmark()
    }
    const getPostData = async () => {
        const response = await axios.get(ENDPOINT.post.get,
            {
                headers: {
                    'Authorization': `Bearer ${keys.jwtKey}`
                }
            }
        );
        const postData = response.data.data;
        setPostData(postData);
    }
    useEffect(() => {
        getPostData()
        if (addPostParam == 'success') {
            notifyAddPostSuccess()
        }
        if (deletePostParam == 'success') {
            notifyDeletePostSuccess()
        }
    }, [])
    return (
        <div >
            <Header />
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
            {
                postData.map(p => {
                    return (
                        <div className="mt-6 w-11/12 mx-auto" key={p.id}>
                            <Link to={"/post/" + p.id}>
                                <div className="shadow-lg rounded-3xl p-4 text-black bg-white relative border transition ease-in-out delay-150 hover:scale-105 active:border-blue" >
                                    {/* <form method="post"> */}
                                    <div className="flex">
                                        <div>
                                            <button type="button" onClick={event => saveBookmark(event, p.id, idUser)}>
                                                <div className="shadow-xl w-fit p-3 rounded-2xl hover:bg-blue-100 bg-white 
                                        text-blue-800 absolute top-0 right-8 bordered">
                                                    <FontAwesomeIcon icon={faBookmark} size="xl"></FontAwesomeIcon>
                                                </div>
                                            </button>
                                        </div>
                                        {/* </form> */}
                                        <div>
                                            <h1 className="text-xl">{p.title}</h1>
                                            <p className="text-xs">{p.skill_name}</p>
                                            <div className="mt-4">
                                                <span className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs 
                                        font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">{p.tag}</span>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <div className="flex content-between"> */}
                                    {/* </div> */}
                                </div>
                            </Link>
                        </div>
                    )
                })
            }
        </div>
    )
};

export default PostCard;
