import { useEffect, useState } from 'react';
import BookmarkCard from '../components/BookmarkCard';
import BottomNav from '../components/BottomNav';
import axios from 'axios';
import keys from '../constant/keys';
import AuthenticatedPage from '../components/AuthenticatedPage';
import decodeJWT from '../services/decodeJWT';
import ENDPOINT from '../constant/endpoint';

const Bookmark = () => {
    const [ bookmarkData, setBookmarkData ] = useState([]);
    const user = JSON.parse(localStorage.getItem('jewete')).tokenPayload
    // console.log(decodeJWT())
    // const idUser = decodeJWT().id_user ?? 'hehe'
    const getBookmarkData = async () => {
        const response = await axios.get(ENDPOINT.bookmark.get(user.id_user),
            {
                headers: {
                    'Authorization': `Bearer ${keys.jwtKey}`
                }
            });
        const postData = response.data.data;
        setBookmarkData(postData);
    }
    useEffect(() => {
        getBookmarkData()
    }, [])
    return (
        <div className="container mx-auto">
            <AuthenticatedPage>
                <BookmarkCard savedPost={bookmarkData} />
                <BottomNav />
            </AuthenticatedPage>
        </div>
    )
}

export default Bookmark;