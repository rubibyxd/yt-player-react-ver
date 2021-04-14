import React, { useEffect, useState } from 'react'
import VideoContainer from './VideosContainer'
import Pagination from './Pagination'

function Collection (props) {
    const [newPage, setNewPage] = useState(0)
    const [collectData, setCollectData] = useState([])

    useEffect(() => {
        getData()
    }, [])

    useEffect(() => {
    }, [collectData])

    function getData () {
        const storageData = JSON.parse(localStorage.getItem('myCollectionFolder'))
        if (storageData.lenght === 0 || !storageData) { return }
        setCollectData(storageData)
    }

    return (
        <>
            <div className="video-list-page">
                <h2 className="pageTitle">我的收藏夾</h2>
                <VideoContainer videoData={collectData} page={newPage}/>
                <Pagination page={newPage} setNewPage={setNewPage} totalVideo={collectData}/>
            </div>
        </>
    )
}

export default Collection
