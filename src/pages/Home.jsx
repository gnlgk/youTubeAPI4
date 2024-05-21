import React from 'react'
import Main from '../components/section/Main'
import VideoSlider from '../components/video/VideoSlider'


import { commend } from '../data/Commend'
import { handdrip } from '../data/Handdrip'
import { caffe } from '../data/Caffe'
import { chain } from '../data/Chain'
import { bakery } from '../data/Bakery'
import { special } from '../data/Special'
import { beans } from '../data/Beans'

// import CommendCont from '../components/contents/CommendCont'
// import HanddripCont from '../components/contents/HanddripCont'
// import CaffeCont from '../components/contents/CaffeCont'
// import ChainCont from '../components/contents/ChainCont'
// import BakeryCont from '../components/contents/BakeryCont'
// import SpecialCont from '../components/contents/SpecialCont'
// import BeansCont from '../components/contents/BeansCont'


const Home = () => {
    return (
        <Main
            title="Coffee Youtube"
            description="Coffee Youtube입니다.">

            <VideoSlider videos={commend} id="commend" title="추천영상" />
            <VideoSlider videos={handdrip} id="handdrip" title="핸드드립" />
            <VideoSlider videos={caffe} id="caffe" title="개인카페" />
            <VideoSlider videos={chain} id="chain" title="체인점" />
            <VideoSlider videos={bakery} id="bakery" title="베이커리카페" />
            <VideoSlider videos={special} id="special" title="이색카페" />
            <VideoSlider videos={beans} id="beans" title="커피원두종류" />

        </Main>
    )
}

export default Home
