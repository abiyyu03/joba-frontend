import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes, faTrash } from "@fortawesome/free-solid-svg-icons";
import Header from '../Header';
import axios from 'axios';
import ENDPOINT from '../../constant/endpoint';
import keys from '../../constant/keys';

const BookmarkCard = (props) => {
    const { savedPost } = props;

    const deleteBookmark = async (bookmarkId) => {
        const response = await axios.delete(ENDPOINT.bookmark.delete(bookmarkId),
            {
                headers: {
                    'Authorization': `Bearer ${keys.jwtKey}`
                }
            }
        );
        console.log(response);
    }
    return (
        <>
            <Header />
            <h1 className="text-2xl text-center mt-4 ">Saved Post</h1>
            <div className="mb-12">
                {
                    savedPost.map(p => {
                        return (
                            <div className="mt-6 w-80 w-10/12 mx-auto hover:shadow-xl" key={p.id}>
                                <Link to="#">
                                    <div className="shadow-lg rounded-3xl p-4 text-black bg-white relative" >
                                        <Link to="" onClick={() => deleteBookmark(p.id)}>
                                            <div className="shadow-xl w-fit p-3 rounded-2xl hover:bg-gray-100 bg-red-500 
                                        text-white absolute top-0 right-5">
                                                <FontAwesomeIcon icon={faTimes} size="xl"></FontAwesomeIcon>
                                            </div>
                                        </Link>
                                        <h1 className="text-2xl">{p.title}</h1>
                                        {/* <p className="text-lg">{p.body}</p> */}
                                        {/* <div className="flex content-between"> */}
                                        {/* </div> */}
                                    </div>
                                </Link>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
};

export default BookmarkCard;
