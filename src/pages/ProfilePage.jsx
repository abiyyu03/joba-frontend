import AuthenticatedPage from '../components/AuthenticatedPage'
import BottomNav from '../components/BottomNav'
import Header from '../components/Header'
import ProfileMenu from '../components/ProfileMenu'
import TopProfile from '../components/TopProfile/Index'

const ProfilePage = () => {
    return (
        <div className="container">
            <AuthenticatedPage>
                {/* <Header /> */}
                <TopProfile />
                <ProfileMenu />
                <BottomNav />
            </AuthenticatedPage>
        </div>
    )
}

export default ProfilePage