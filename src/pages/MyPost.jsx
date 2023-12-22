import PostCard from '../components/PostCard'
import BottomNav from '../components/BottomNav'
import axios from 'axios';
import { useEffect, useState } from 'react';
import keys from '../constant/keys';
import ENDPOINT from '../constant/endpoint';
import AuthenticatedPage from '../components/AuthenticatedPage';
import FloatingButton from '../components/UI/FloatingButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import MyPostCard from '../components/MyPostCard';

const MyPost = () => {
    const [ postData, setPostData ] = useState([]);
    const idUser = JSON.parse(localStorage.getItem('jewete')).tokenPayload.id_user
    const getTagData = async () => {
        const response = await axios.get(ENDPOINT.post.getByUserId(idUser),
            {
                headers: {
                    'Authorization': `Bearer ${keys.jwtKey}`
                }
            }
        );
        const postData = response.data.data;
        setPostData(postData);
    }
    useEffect(() => {
        getTagData()
    }, [])
    return (
        <div className="container mx-auto mb-12">
            <AuthenticatedPage>
                <MyPostCard post={postData} />
                {/* <FloatingButton>
                    <FontAwesomeIcon icon={faPlus} size="xl"></FontAwesomeIcon>
                </FloatingButton> */}
                <BottomNav />
            </AuthenticatedPage>
        </div>
    )
}

export default MyPost