import React from 'react'
import fackData from '../assets/json/fakeData.json'

function VideosContainer () {
    return (
        <>
            <div className="videos-container">
                {
                    fackData.map((data, index) => {
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
