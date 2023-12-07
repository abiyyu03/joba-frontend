import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from "@fortawesome/free-solid-svg-icons";

const PostCard = () => {
    return (
        <div className="mt-6 w-9/12 mx-auto block">
            <Link to="#">
                <div className="shadow-lg rounded-3xl p-4 text-white bg-green-600 hover:bg-green-700">
                    <h1 className="text-2xl">Hello World</h1>
                    <p className="text-lg">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Magni molestias, veniam saepe corporis officia soluta quo.</p>
                    {/* <div className="flex content-between"> */}
                    <div className="shadow-xl w-fit p-3 rounded-xl">
                        <FontAwesomeIcon icon={faBookmark} size="xl"></FontAwesomeIcon>
                    </div>
                    {/* </div> */}
                </div>
            </Link>
        </div>
    );
};

export default PostCard;
