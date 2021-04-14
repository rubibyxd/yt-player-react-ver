import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

VideosContainer.propTypes = {
    videoData: PropTypes.array,
    page: PropTypes.number
}

function VideosContainer (props) {
    const [videoArr, setVideoArr] = useState([])
    const perPage = 8

    useEffect(() => {
        if (props.videoData && props.videoData.length > 0) arrangeVideos()
    }, [props.videoData])

    useEffect(() => {
        arrangeVideos(props.page)
    }, [props.page])

    function arrangeVideos (page) {
        const videos = JSON.parse(JSON.stringify(props.videoData))
        const newData = []
        videos.forEach((item, i) => {
            const page = parseInt(i / perPage)
            if (i % perPage === 0) newData.push([])
            newData[page].push(item)
        })
        const currentPage = page || 0
        const nowArr = newData[currentPage]
        if (nowArr && nowArr.length > 0) setVideoArr(nowArr)
    }

    return (
        <>
            <div className="videos-container">
                {
                    videoArr.map((data, index) => {
                        return (
                            <div className="single-video" key={index}>
                                <div className="single-video__pic">
                                    <img src={require(`../assets/images/${data.videoPicture}`).default}
                                        alt="video-pic"/>
                                </div>
                                <h4 className="single-video__title">{data.videoTitle}</h4>
                                <div className="single-video__channel">{data.channelName}</div>
                                <div className="single-video__views">觀看數: {data.videoViews}</div>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default VideosContainer
