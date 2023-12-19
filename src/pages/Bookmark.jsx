import { useEffect, useState } from 'react';
import BookmarkCard from '../components/BookmarkCard';
import BottomNav from '../components/BottomNav';
import axios from 'axios';
import keys from '../constant/keys';
import AuthenticatedPage from '../components/AuthenticatedPage';
import decodeJWT from '../services/decodeJWT';
import ENDPOINT from '../constant/endpoint';

const Bookmark = () => {

    return (
        <div className="container mx-auto">
            <AuthenticatedPage>
                <BookmarkCard />
                <BottomNav />
            </AuthenticatedPage>
        </div>
    )
}

export default Bookmark;