import React from 'react'
import { Link } from 'react-router-dom'

const VideoSearch = ({ videos }) => {
    return (
        <>
            {
                videos.map((video, index) => (
                    <div className='video' key={index}>
                        <div className="video__thumb play__icon">
                            <Link to="/">
                                <img src={video.snippet.thumbnails.high.url} alt="" />
                            </Link>
                        </div>
                        <div className="video__text">
                            <Link to="/">{video.snippet.title}</Link>
                        </div>
                    </div>
                ))}
        </>
    )
}

export default VideoSearch
