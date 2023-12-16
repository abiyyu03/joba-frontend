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

function App() {
    return (
        <Routes>
            {/* <Route path='/' element={<Home />} /> */}
            <Route path='/' element={<Post />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/bookmark' element={<Bookmark />} />
            <Route path='/search' element={<SearchPage />} />
            <Route path='/post/:id' element={<DetailPostPage />} />
            <Route path='/post/add' element={<AddPostFormPage />} />
            <Route path='/profile' element={<ProfilePage />} />
        </Routes>
    )
}
export default App
