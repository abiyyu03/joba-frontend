import PostCard from '../components/PostCard'
import BottomNav from '../components/BottomNav'
import axios from 'axios';
import { useEffect, useState } from 'react';
import keys from '../constant/keys';
import ENDPOINT from '../constant/endpoint';
import AuthenticatedPage from '../components/AuthenticatedPage';

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
                <BottomNav />
            </AuthenticatedPage>
        </div>
    )
}

export default Post