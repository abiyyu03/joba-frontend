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

const Post = () => {
    const [ postData, setPostData ] = useState([]);
    const getTagData = async () => {
        const response = await axios.get(ENDPOINT.post.get,
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
        <div className="container mx-auto">
            <AuthenticatedPage>
                <PostCard post={postData} />
                <FloatingButton>
                    <FontAwesomeIcon icon={faPlus} size="2xl"></FontAwesomeIcon>
                </FloatingButton>
                <BottomNav />
            </AuthenticatedPage>
        </div>
    )
}

export default Post