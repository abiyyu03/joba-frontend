import { Route, Routes, useNavigate } from 'react-router';
import './index.css';
import Post from './pages/Post';
import Login from './pages/Login';
import Register from './pages/Register';
import Bookmark from './pages/Bookmark';
import SearchPage from './pages/Search';
import DetailPostPage from './pages/DetailPostPage';
import AddPostFormPage from './pages/AddPostFormPage';
import ProfilePage from './pages/ProfilePage';
import EditProfilePage from './pages/EditProfilePage';
import PrivacyPage from './pages/PrivacyPage';
import { useJwt } from 'react-jwt';
import MyPost from './pages/MyPost';

function App() {
    const { isExpired } = useJwt(JSON.parse(localStorage.getItem('jewete')).accessToken)
    const navigate = useNavigate()
    // if (!isExpired) {
    //     navigate("/")
    // } else {
    //     navigate("/login")
    // }
    // if (isExpired) navigate("/login")
    return (
        <Routes>
            {/* <Route path='/' element={<Home />} /> */}
            <Route path='/' element={<Post />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/bookmark' element={<Bookmark />} />
            <Route path='/search' element={<SearchPage />} />
            <Route path='/post/:id' element={<DetailPostPage />} />
            <Route path='/new-post' element={<AddPostFormPage />} />
            <Route path='/profile' element={<ProfilePage />} />
            <Route path='/edit-profile' element={<EditProfilePage />} />
            <Route path='/privacy' element={<PrivacyPage />} />
            <Route path='/my-post' element={<MyPost />} />
        </Routes>
    )
}
export default App
