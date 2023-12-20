import axios from 'axios';
import AddPostForm from '../components/AddPostForm';
import AuthenticatedPage from '../components/AuthenticatedPage';
import BottomNav from '../components/BottomNav';
import ENDPOINT from '../constant/endpoint';
import { useEffect, useState } from 'react';
import keys from '../constant/keys';

const AddPostFormPage = () => {
    const [ skillData, setSkillData ] = useState([]);
    const [ tagData, setTagData ] = useState([]);
    const getSkillData = async () => {
        const response = await axios.get(ENDPOINT.skill.get,
            {
                headers: {
                    'Authorization': `Bearer ${keys.jwtKey}`
                }
            }
        );
        const skill = response.data.data;
        setSkillData(skill);
    }
    const getTagData = async () => {
        const response = await axios.get(ENDPOINT.tag.get,
            {
                headers: {
                    'Authorization': `Bearer ${keys.jwtKey}`
                }
            }
        );
        const tag = response.data.data;
        setTagData(tag);
    }
    useEffect(() => {
        getSkillData()
        getTagData()
    }, [])
    if (skillData.length === 0) return null
    return (
        <div className="container">
            <AuthenticatedPage>
                <AddPostForm skillData={skillData} tagData={tagData} />
                <BottomNav></BottomNav>
            </AuthenticatedPage>
        </div>
    )
}

export default AddPostFormPage;