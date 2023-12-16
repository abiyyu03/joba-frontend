import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import Header from '../Header';

const BookmarkCard = (props) => {
    const { savedPost } = props;
    return (
        <>
            <Header />
            <h1 className="text-2xl text-center mt-4 ">Saved Post</h1>
            {
                savedPost.map(p => {
                    return (
                        <div className="mt-6 w-80 lg:w-full mx-auto hover:shadow-xl" key={p.id}>
                            <Link to="#">
                                <div className="shadow-lg rounded-3xl p-4 text-black bg-white relative" >
                                    <Link to="">
                                        <div className="shadow-xl w-fit p-3 rounded-2xl hover:bg-green-100 bg-white 
                                        text-red-500 absolute top-0 right-5">
                                            <FontAwesomeIcon icon={faTrash} size="xl"></FontAwesomeIcon>
                                        </div>
                                    </Link>
                                    <h1 className="text-2xl">{p.title}</h1>
                                    <p className="text-lg">{p.body}</p>
                                    {/* <div className="flex content-between"> */}
                                    {/* </div> */}
                                </div>
                            </Link>
                        </div>
                    )
                })
            }
        </>
    )
};

export default BookmarkCard;
