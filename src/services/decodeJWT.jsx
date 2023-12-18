import { useJwt } from 'react-jwt';

const decodeJWT = () => {
    const { decodedToken, isExpired } = useJwt(localStorage.getItem('jewete'))
    // console.log(decodedToken)
    return decodedToken
}

export default decodeJWT