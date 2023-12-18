import AddPostForm from '../components/AddPostForm';
import AuthenticatedPage from '../components/AuthenticatedPage';
import BottomNav from '../components/BottomNav';

const AddPostFormPage = () => {
    return (
        <div className="container">
            <AuthenticatedPage>
                <AddPostForm></AddPostForm>
                <BottomNav></BottomNav>
            </AuthenticatedPage>
        </div>
    )
}

export default AddPostFormPage;