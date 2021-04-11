import React from 'react'
import VideoContainer from './VideosContainer'
import Pagination from './Pagination'

function Collection () {
    return (
        <>
            <div className="video-list-page">
                <h2 className="pageTitle">我的收藏夾</h2>
                <VideoContainer />
                <Pagination />
            </div>
        </>
    )
}

export default Collection
