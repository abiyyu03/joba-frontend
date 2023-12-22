import { faTelegram } from '@fortawesome/free-brands-svg-icons';
import { faEdit, faMap } from '@fortawesome/free-regular-svg-icons';
import { faCalendar, faCheck, faCheckCircle, faMapLocation, faMapSigns, faPhone, faTimes, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import TitleSection from '../TitleSection';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import keys from '../../constant/keys';
import axios from 'axios';
import ENDPOINT from '../../constant/endpoint';
import moment from 'moment';

const DetailPost = () => {
    const user = JSON.parse(localStorage.getItem('jewete')).tokenPayload
    const [ detailPostData, setDetailPostData ] = useState({});
    const { id } = useParams();
    const navigate = useNavigate()
    const getDetailPostData = async () => {
        const response = await axios.get(ENDPOINT.post.getById(id),
            {
                headers: {
                    'Authorization': `Bearer ${keys.jwtKey}`
                }
            }
        );
        const postData = response.data.data;
        setDetailPostData(postData);
    }
    const deletePostData = async () => {
        await axios.delete(ENDPOINT.post.delete(id),
            {
                headers: {
                    'Authorization': `Bearer ${keys.jwtKey}`
                }
            }
        );
        navigate("/?delete_post=success")
    }
    useEffect(() => {
        getDetailPostData()
    }, [ id ])
    return (
        <div className="container mt-6">
            <div className="mt-4 ml-7">
                <TitleSection>{detailPostData.title}</TitleSection>
                <h4 className="my-4">
                    <FontAwesomeIcon icon={faCalendar} className="mr-2"></FontAwesomeIcon>
                    {moment(detailPostData.created_at).locale('id-ID').format("ddd, DD MMMM YYYY HH:mm")}
                </h4>
                <h4 className="my-4">
                    <FontAwesomeIcon icon={faMapLocation} className="mr-2"></FontAwesomeIcon>
                    {detailPostData.location}
                </h4>
                {detailPostData.is_active == 1 ?
                    <p className='my-4 text-green-500'>
                        <FontAwesomeIcon icon={faCheckCircle} className="mr-2"></FontAwesomeIcon>
                        <span>Aktif Merekrut</span>
                    </p>
                    :
                    <p className='my-4 text-red-500'>
                        <FontAwesomeIcon icon={faTimes} className="mr-2"></FontAwesomeIcon>
                        <span>Tidak Aktif Merekrut</span>
                    </p>
                }
                <div className="my-4">
                    <span className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs 
                                    font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">{detailPostData.skill_name}</span>
                </div>
                <hr />
                <p className="mt-4" dangerouslySetInnerHTML={{ __html: detailPostData.body }}></p>
            </div>
            <div className="flex justify-between content-center mt-5">
                <div className="flex place-items-center mx-4">
                    <h5 className="text-lg text-orange-500">
                        <Link to={"https://wa.me/" + detailPostData.contact} className="mx-4 underline"><FontAwesomeIcon icon={faPhone}></FontAwesomeIcon> Narahubung</Link>
                    </h5>
                    {/* <h5 className="text-lg text-orange-500">
                        <Link to="#" className="underline"> <FontAwesomeIcon icon={faMap}></FontAwesomeIcon> Lokasi</Link>
                    </h5> */}
                </div>
                {user.id_user == detailPostData.user_id ?
                    <div className="flex mx-4">
                        <Link to="#" onClick={deletePostData}>
                            <div className="shadow-xl w-fit p-3 rounded-2xl hover:bg-gray-100 bg-white text-dark-500 mx-3">
                                <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
                            </div>
                        </Link>
                        {/* <Link to="#">
                            <div className="shadow-xl w-fit p-3 rounded-2xl hover:bg-gray-100 bg-white text-dark-500  ">
                                <FontAwesomeIcon icon={faEdit}></FontAwesomeIcon>
                            </div>
                        </Link> */}
                    </div>
                    :
                    <h1></h1>
                }

            </div>
        </div >
    )
}

export default DetailPost;