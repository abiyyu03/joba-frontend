import { Route, Routes } from 'react-router';
import './index.css';
import Post from './pages/Post';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
    return (
        <Routes>
            {/* <Route path='/' element={<Home />} /> */}
            <Route path='/posts' element={<Post />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
        </Routes>
    )
}
export default App
