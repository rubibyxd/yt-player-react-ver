import React, { useEffect, useState } from 'react'
import SearchBar from './SearchBar'
import VideoContainer from './VideosContainer'
import Pagination from './Pagination'
import fakeData from '../assets/json/fakeData.json'

function Home (props) {
    const [newPage, setNewPage] = useState(0)

    useEffect(() => {

    }, [newPage])
    return (
        <>
            <div className="video-list-page">
                <SearchBar />
                <VideoContainer videoData={fakeData} page={newPage}/>
                <Pagination page={newPage} setNewPage={setNewPage} totalVideo={fakeData}/>
            </div>
        </>
    )
}

export default Home
