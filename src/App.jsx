import { Route, Routes } from 'react-router';
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

function App() {
    const isUserNotExist = localStorage.getItem('jewete') === null;
    const userObject = JSON.stringify({
        tokenPayload: { id_user: '', fullname: '', email: '', address: '', number_phone: '', description: '' },
        accessToken: '',
    });
    if (isUserNotExist) localStorage.setItem('jewete', userObject);
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
        </Routes>
    )
}
export default App
