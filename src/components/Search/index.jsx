import { useEffect, useState } from 'react'
import ENDPOINT from '../../constant/endpoint'
import axios from 'axios'
import keys from '../../constant/keys'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faTimes } from '@fortawesome/free-solid-svg-icons'
import PostSearchCard from './PostSearchCard'
import { Link } from 'react-router-dom'

const Search = () => {
    const [ query, setQuery ] = useState("")
    const [ searchData, setSearchData ] = useState([]);

    useEffect(() => {
        const getSearchData = async () => {
            const response = await axios.get(ENDPOINT.search.get(query),
                {
                    headers: {
                        'Authorization': `Bearer ${keys.jwtKey}`,
                        // "Access-Control-Allow-Origin": "*",
                    }
                }
            )
            const data = response.data.data
            // console.log(data)
            setSearchData(data)
        }
        // console.log(query)
        setTimeout(() => {
            if (query != "") getSearchData()
        }, 500);
    }, [ query ])

    return (
        <div>
            <div className="mt-4 text-end">
                <Link to="..">
                    <FontAwesomeIcon icon={faTimes} size="2xl" className="text-gray-600"></FontAwesomeIcon>
                </Link>
            </div>
            <form action="">
                <label htmlFor="" className="relative text-gray-400 focus-within:text-gray-600">
                    <input type="text" name="inputSearch" onChange={(e) => setQuery(e.target.value)} placeholder="Cari Pekerjaan .."
                        className="border p-3 bg-white rounded-full w-full text-black mt-6" />
                    <button>
                        <FontAwesomeIcon icon={faMagnifyingGlass} className='text-gray-200 pointer-events-none w-8 h-8 absolute top-1/2 transform -translate-y-1/2 right-3 z-3'></FontAwesomeIcon>
                    </button>
                </label>
            </form>
            <div className="mx-auto">
                <PostSearchCard searchData={searchData} />
            </div>
        </div>
    )
}

export default Search