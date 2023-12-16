import { useEffect, useState } from 'react';
import Search from '../components/Search';
import axios from 'axios';
import ENDPOINT from '../constant/endpoint';
import BottomNav from '../components/BottomNav';

const SearchPage = () => {
    // const [ searchData, setSearchData ] = useState([])
    // const getSearchData = async () => {
    //     const response = await axios.get(ENDPOINT.search.get)
    //     const data = response.data.data
    //     setSearchData(data)
    // }
    // useEffect(() => {
    //     getSearchData()
    // }, [])
    return (
        <div className="container max-w-80 px-6 justify-center mx-auto">
            <Search />
            <BottomNav />
        </div>
    )
}

export default SearchPage;