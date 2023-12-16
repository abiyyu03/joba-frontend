import { useEffect, useState } from 'react'
import BottomNav from '../components/BottomNav'
import DetailPost from '../components/DetailPost'
import axios from 'axios';
import { useParams } from 'react-router';

const DetailPostPage = () => {

    return (
        <div className="container">
            <DetailPost />
            <BottomNav />
        </div>
    )

}

export default DetailPostPage