import { useEffect, useState } from 'react'
import BottomNav from '../components/BottomNav'
import DetailPost from '../components/DetailPost'
import axios from 'axios';
import { useParams } from 'react-router';
import AuthenticatedPage from '../components/AuthenticatedPage';

const DetailPostPage = () => {

    return (
        <div className="container">
            <AuthenticatedPage>
                <DetailPost />
                <BottomNav />
            </AuthenticatedPage>
        </div>
    )

}

export default DetailPostPage