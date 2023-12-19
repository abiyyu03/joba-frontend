import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from "@fortawesome/free-regular-svg-icons";
import Header from '../Header';
import keys from '../../constant/keys';
import axios from 'axios';
import ENDPOINT from '../../constant/endpoint';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from 'react';

const PostCard = (props) => {
    const query = new URLSearchParams(window.location.search);
    const addPostParam = query.get("add_post");
    const notifyAddPostSuccess = () => toast("Postingan berhasil dibuat !");
    const notifyAddBookmark = () => toast("Postingan berhasil disimpan ke bookmark!");
    const { post } = props;
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
    if (addPostParam == 'success') {
        notifyAddPostSuccess()
    }
    return (
        <div>
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
                post.map(p => {
                    return (
                        <div className="mt-6 w-11/12 mx-auto" key={p.id}>
                            <Link to={"/post/" + p.id}>
                                <div className="shadow-lg rounded-3xl p-4 text-black bg-white relative border transition ease-in-out delay-150 hover:scale-105 active:border-blue" >
                                    {/* <form method="post"> */}
                                    <button type="button" onClick={event => saveBookmark(event, p.id, idUser)}>
                                        <div className="shadow-xl w-fit p-3 rounded-2xl hover:bg-blue-100 bg-white 
                                        text-blue-800 absolute top-0 right-8 bordered">
                                            <FontAwesomeIcon icon={faBookmark} size="xl"></FontAwesomeIcon>
                                        </div>
                                    </button>
                                    {/* </form> */}
                                    <h1 className="text-xl">{p.title}</h1>
                                    <p className="text-sm">{p.created_at}</p>
                                    <div className="mt-4">
                                        <span className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs 
                                        font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">{p.tag}</span>
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
