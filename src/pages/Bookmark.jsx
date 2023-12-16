import { useEffect, useState } from 'react';
import BookmarkCard from '../components/BookmarkCard';
import BottomNav from '../components/BottomNav';
import axios from 'axios';
import keys from '../constant/keys';

const Bookmark = () => {
    const [ bookmarkData, setBookmarkData ] = useState([]);
    const getBookmarkData = async () => {
        const response = await axios.get('http://localhost:3000/bookmarks',
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
            <BookmarkCard savedPost={bookmarkData} />
            <BottomNav />
        </div>
    )
}

export default Bookmark;