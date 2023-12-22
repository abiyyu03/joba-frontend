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
    return (
        <div className="container mx-auto mb-12">
            <AuthenticatedPage>
                <PostCard />
                <FloatingButton>
                    <FontAwesomeIcon icon={faPlus} size="xl"></FontAwesomeIcon>
                </FloatingButton>
                <BottomNav />
            </AuthenticatedPage>
        </div>
    )
}

export default Post