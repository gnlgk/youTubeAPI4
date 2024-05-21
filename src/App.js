import React, { Suspense, lazy } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Main from './components/section/Main'
import Channel from './pages/Channel';
import Video from './pages/Video';
import Search from './pages/Search';

const Home = lazy(() => import('./pages/Home'));
const Commend = lazy(() => import('./pages/Commend'));
const Handdrip = lazy(() => import('./pages/Handdrip'));
const Caffe = lazy(() => import('./pages/Caffe'));
const Chain = lazy(() => import('./pages/Chain'));
const Bakery = lazy(() => import('./pages/Bakery'));
const Special = lazy(() => import('./pages/Special'));
const Beans = lazy(() => import('./pages/Beans'));


const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<Main />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Commend" element={<Commend />} />
          <Route path="/Handdrip" element={<Handdrip />} />
          <Route path="/Caffe" element={<Caffe />} />
          <Route path="/Chain" element={<Chain />} />
          <Route path="/Bakery" element={<Bakery />} />
          <Route path="/Special" element={<Special />} />
          <Route path="/Beans" element={<Beans />} />
          <Route path="/channel/:channelId" element={<Channel />} />
          <Route path="/video/:videoId" element={<Video />} />
          <Route path="/search/:searchId" element={<Search />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )

}

export default App
