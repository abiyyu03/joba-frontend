import { Link } from 'react-router-dom'

const FloatingButton = (props) => {
    return (
        <Link to="/new-post" className="bg-white text-blue-900 rounded-full shadow-xl p-5 bottom-20 right-5 fixed">{props.children}</Link>
    )
}

export default FloatingButton