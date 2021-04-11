import React from 'react'
import YouTube from 'react-youtube'

function VideoPlayer () {
    const opts = {
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 1
        }
    }
    const _onReady = (event) => {
        // access to player in all event handlers via event.target
        event.target.pauseVideo()
    }
    return (
        <>
            <div className="video-player-container">
                <div className="video-screen">
                    <YouTube className="video-screen__player" videoId="2g811Eo7K8U" opts={opts} onReady={_onReady} />
                    {/* <div className="video-screen__player">
                        <YouTube className="video-screen__player" videoId="2g811Eo7K8U" opts={opts} onReady={_onReady} />
                    </div> */}
                    <h4 className="video-screen__title"></h4>
                    <div className="video-screen__info">
                        <span>觀看次數:</span>
                        <span>上傳時間:</span>
                    </div>
                    <div className="video-screen__yt-btn">
                        以 Youtube 開啟
                    </div>
                </div>
                <div className="video-list">
                    <h4 className="video-list__title">播放清單</h4>
                    <div className="video-list__container">
                        <div className="video-list__video">
                            <div className="video-list__video-pic">
                                <img src={require('../assets/images/coding_pic.jpg').default} alt="video-pic"/>
                            </div>
                            <div className="video-list__video-info">
                                <div className="video-list__video-title">【轉生成蜘蛛又怎樣】魔王老師靠譜解説七大罪技能 蜘蛛子卻腦内創作小本本（新人女神奮鬥史04）【阿偉馬克兔】</div>
                                <div className="video-list__video-channel">阿偉馬克兔</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default VideoPlayer
