import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

import Main from '../components/section/Main'
import VideoSearch from '../components/video/VideoSearch';

const Search = () => {
    const { searchId } = useParams();
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=${searchId}&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`)
            .then(response => response.json())
            .then(result => {
                console.log(result);
                setVideos(result.items);
            })
    }, [searchId])

    return (
        <Main
            title="유튜브 검색"
            description="유투브 검색 결과 페이지 입니다.">

            <section id='searchPage'>
                <div className="video__inner search">
                    <VideoSearch videos={videos} />
                </div>
            </section>
        </Main>
    )
}

export default Search
