import { faBookmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

const PostSearchCard = (props) => {
    const { searchData } = props
    return (
        <>
            {
                searchData.map(p => {
                    return (
                        <div className="mt-6 w-11/12 mx-auto" key={p.id}>
                            <Link to={"/post/" + p.id}>
                                <div className="shadow-lg rounded-3xl p-4 text-black bg-white relative border transition ease-in-out delay-150 hover:scale-105 active:border-blue" >
                                    <h1 className="text-xl">{p.title}</h1>
                                    <p className="text-sm">{p.created_at}</p>
                                    <div className="mt-4">
                                        <span className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs 
                        font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">{p.tag}</span>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    )
                })
            }
        </>
    )
}

export default PostSearchCard;