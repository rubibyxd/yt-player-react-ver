import React from 'react'
import SearchBar from './SearchBar'
import VideoContainer from './VideosContainer'
import Pagination from './Pagination'

function Home () {
    return (
        <>
            <div className="video-list-page">
                <SearchBar />
                <VideoContainer />
                <Pagination />
            </div>
        </>
    )
}

export default Home
