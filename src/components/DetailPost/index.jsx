import { faTelegram } from '@fortawesome/free-brands-svg-icons';
import { faEdit, faMap } from '@fortawesome/free-regular-svg-icons';
import { faCalendar, faMapSigns, faPhone, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import TitleSection from '../TitleSection';
import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import keys from '../../constant/keys';
import axios from 'axios';
import ENDPOINT from '../../constant/endpoint';

const DetailPost = () => {
    const [ detailPostData, setDetailPostData ] = useState({});
    const { id } = useParams();
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
    useEffect(() => {
        getDetailPostData()
    }, [ id ])
    return (
        <div className="container mt-6">
            <div className="mt-4 w-96 ml-7">
                {/* <h1 className="text-4xl">Judul</h1> */}
                <TitleSection>{detailPostData.title}</TitleSection>
                <h4 className="my-4">
                    <Link to="#"><FontAwesomeIcon icon={faCalendar} className="mr-2"></FontAwesomeIcon></Link>
                    {detailPostData.created_at}
                </h4>
                <p>{detailPostData.body}</p>
            </div>
            <div className="flex justify-between content-center mt-5">
                <div className="flex place-items-center mx-4">
                    <h5 className="text-lg text-orange-500">
                        <Link to={"https://wa.me/" + detailPostData.contact} className="mx-4 underline"><FontAwesomeIcon icon={faPhone}></FontAwesomeIcon> Narahubung</Link>
                    </h5>
                    <h5 className="text-lg text-orange-500">
                        <Link to="#" className="underline"> <FontAwesomeIcon icon={faMap}></FontAwesomeIcon> Lokasi</Link>
                    </h5>
                </div>
                <div className="flex mx-4">
                    <Link to="#">
                        <div className="shadow-xl w-fit p-3 rounded-2xl hover:bg-gray-100 bg-white text-dark-500 mx-3">
                            <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
                        </div>
                    </Link>
                    <Link to="#">
                        <div className="shadow-xl w-fit p-3 rounded-2xl hover:bg-gray-100 bg-white text-dark-500  ">
                            <FontAwesomeIcon icon={faEdit}></FontAwesomeIcon>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default DetailPost;