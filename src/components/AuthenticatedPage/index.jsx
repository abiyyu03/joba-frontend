import { useJwt } from 'react-jwt';
import { Link, useNavigate } from 'react-router-dom';
const AuthenticatedPage = (props) => {
    const isTokenIlang = localStorage.getItem('jewete') == null
    const navigate = useNavigate()
    const accessToken = JSON.parse(localStorage.getItem('jewete')).accessToken
    const { decodedToken, isExpired } = useJwt(accessToken);
    return (
        <div>
            {/* <> */}
            {/* <h1 className="text-3xl text-center my-6">Kamu harus login terlebih dahulu</h1>
            <Link to="/login" className="bg-green-400 w-fit p-4 text-white rounded justify-center flex mx-auto">Login</Link> */}
            {/* </> */}
            {isTokenIlang || isExpired ?
                navigate("/login")
                :
                props.children
            }
        </div>
    )
}

export default AuthenticatedPage;