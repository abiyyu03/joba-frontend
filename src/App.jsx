import { Route, Routes } from 'react-router';
import './index.css';
import Post from './pages/Post';

function App() {
    return (
        <Routes>
            {/* <Route path='/' element={<Home />} /> */}
            <Route path='/posts' element={<Post />} />
        </Routes>
    )
}
export default App
