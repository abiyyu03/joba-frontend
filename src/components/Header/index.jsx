import { faMagnifyingGlass, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="flex items-center m-5 justify-between">
            <Link to="/"><h1 className="text-3xl font-bold">JOBA</h1></Link>
            <Link to="/search"><FontAwesomeIcon icon={faMagnifyingGlass} className="text-blue-700 hover:text-blue-900" size="2xl"></FontAwesomeIcon></Link>
            {/* <div className="border-b"></div> */}
        </div>
    )
}

export default Header;