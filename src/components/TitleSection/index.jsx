import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowCircleLeft, faBookmark, faLessThan } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';
import { faLess } from '@fortawesome/free-brands-svg-icons';

const TitleSection = ({ children }) => {
    return (
        <div className="flex place-items-center items-center ">
            <Link to="/">
                <FontAwesomeIcon icon={faLessThan} size="2xl"></FontAwesomeIcon>
            </Link>
            {/* <h1 className="text-4xl mx-2">{"<"}</h1> */}
            <h1 className="text-3xl mx-2 mt-4">{children}</h1>

        </div>
    )
}

export default TitleSection;